import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Stack,
  Modal,
} from '@mui/material';
import Trade from '../Trade';
import userService from '../../services/users';
import tradeService from '../../services/trade';
import { UserContext } from '../../contexts/UserContext';
import defaultModalStyle from '../../styles/defaultModalStyle';
import EditButton from './EditButton';
import FriendCodeForm from './FriendCodeForm';
import ProfilePictureForm from './ProfilePictureForm';
import SpinnerOverlay from '../SpinnerOverlay';
import BioForm from './BioForm';
import ErrorAlert from '../ErrorAlert';

const style = {
  ...defaultModalStyle,
  height: 'max-content',
};

function UserPage() {
  const [user, setUser] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [openProgress, setOpenProgress] = useState(true);
  const [trades, setTrades] = useState(null);
  const [friendModalOpen, setFriendModalOpen] = useState(false);
  const [friendCode, setFriendCode] = useState('');
  const [checked, setChecked] = useState(true);
  const [pictureModalOpen, setPictureModalOpen] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [bio, setBio] = useState('');
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { username } = useParams();

  const handleFriendOpen = () => setFriendModalOpen(true);
  const handleFriendClose = () => setFriendModalOpen(false);

  const handlePictureOpen = () => setPictureModalOpen(true);
  const handlePictureClose = () => setPictureModalOpen(false);

  const handleBioOpen = () => setBioModalOpen(true);
  const handleBioClose = () => setBioModalOpen(false);

  // user refers to the page's user, logged user is the logged-in user
  const loggedUser = useContext(UserContext);

  const isLoggedUser = (user && loggedUser && user.username === loggedUser.username);

  const handleOpenProgress = () => setOpenProgress(true);
  const handleCloseProgress = () => setOpenProgress(false);

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleFriendCodeChange = (event) => {
    setFriendCode(event.target.value);
  };

  useEffect(() => {
    setUser(null);
    setNotFound(false);
    handleOpenProgress();
    userService.findOne(username)
      .then((foundUser) => {
        setUser(foundUser);
        return foundUser;
      })
      .then((foundUser) => tradeService.getByUserId(foundUser.id))
      .then((response) => setTrades(response))
      .catch(() => {
        setNotFound(true);
      })
      .finally(() => handleCloseProgress());
    handleCloseProgress();
  }, [username]);

  // View while loading
  if (!user) {
    // View if no user is found.
    if (notFound) {
      return (
        <Container>
          <Typography>User not found.</Typography>
        </Container>
      );
    }

    return (
      <Container>
        <SpinnerOverlay open />
      </Container>
    );
  }

  // handles deletion of user's posts
  const handleDelete = (id) => async () => {
    handleOpenProgress();
    try {
      await tradeService.deleteTrade(id);
      const response = await tradeService.getByUserId(user.id);
      setTrades(response);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }

    handleCloseProgress();
  };

  const handleFriendCodeSubmit = async () => {
    handleOpenProgress();

    try {
      let fc = '';
      if (checked) {
        fc += 'SW-';
      }
      fc += friendCode;
      const response = await userService.updateFriendCode(loggedUser.username, { friendCode: fc });
      setUser(response);
      handleFriendClose();
      setFriendCode('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }

    handleCloseProgress();
  };

  const handlePictureSubmit = async () => {
    handleOpenProgress();

    try {
      const response = await userService
        .updateProfilePicture(loggedUser.username, profilePictureUrl);
      setUser(response);
      handlePictureClose();
      setProfilePictureUrl('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }

    handleCloseProgress();
  };

  const handleBioSubmit = async () => {
    handleOpenProgress();

    try {
      const response = await userService
        .updateBio(loggedUser.username, bio);
      setUser(response);
      handleBioClose();
      setBio('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }

    handleCloseProgress();
  };

  const joinDate = new Date(user.createdAt);

  return (
    <Container sx={{ marginTop: 1 }}>
      {/* Modal: Friend Code Form */}
      <Modal
        open={friendModalOpen}
        onClose={handleFriendClose}
      >
        <Box>
          <FriendCodeForm
            checked={checked}
            handleCheckedChange={handleCheckedChange}
            friendCode={friendCode}
            handleFriendCodeChange={handleFriendCodeChange}
            handleFriendCodeSubmit={handleFriendCodeSubmit}
          />
        </Box>
      </Modal>
      {/* Modal: Profile Picture Form */}
      <Modal
        open={pictureModalOpen}
        onClose={handlePictureClose}
      >
        <Box sx={style}>
          <ProfilePictureForm
            profilePictureUrl={profilePictureUrl}
            setProfilePictureUrl={setProfilePictureUrl}
            handlePictureSubmit={handlePictureSubmit}
          />
        </Box>
      </Modal>
      <SpinnerOverlay open={openProgress} />
      {/* Modal: Bio Form */}
      <Modal
        open={bioModalOpen}
        onClose={handleBioClose}
      >
        <Box sx={{ ...style, width: 600 }}>
          <BioForm
            bio={bio}
            setBio={setBio}
            handleBioSubmit={handleBioSubmit}
          />
        </Box>
      </Modal>

      {/* Content */}
      <ErrorAlert errorMessage={errorMessage} />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ padding: 1 }}>
            <Stack alignItems="center" gap={1}>
              <Typography variant="h4">{username}</Typography>
              <Box
                sx={{
                  position: 'relative',
                  width: 160,
                  height: 160,
                  borderRadius: 4,
                  backgroundColor: (theme) => theme.palette.background.default,
                }}
              >
                {user.profilePictureUrl
                && <img style={{ height: '100%', width: '100%', borderRadius: 4 }} src={`${user.profilePictureUrl}?w=160&h=160&fit=crop&auto=format`} alt="Kappa" />}
                { isLoggedUser
                  && (
                  <EditButton
                    size="small"
                    sx={{
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      zIndex: (theme) => theme.zIndex.modal - 1,
                    }}
                    onClick={handlePictureOpen}
                  />
                  )}
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="overline">Friend Code:</Typography>
                <Typography>
                  { user && user.friendCode ? user.friendCode : 'No friend code available.'}
                  { isLoggedUser
                    && (
                    <EditButton size="small" onClick={handleFriendOpen} />
                    )}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{
            padding: 2,
            paddingLeft: 3,
            paddingRight: 3,
            height: '100%',
          }}
          >
            <Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ padding: 0, margin: 0 }} variant="h6">Bio</Typography>
                { isLoggedUser
                    && (
                    <EditButton
                      size="small"
                      sx={{
                        marginLeft: 'auto',
                        zIndex: (theme) => theme.zIndex.modal - 1,
                      }}
                      onClick={handleBioOpen}
                    />
                    )}
              </Box>
              <Typography sx={{ textAlign: 'justify' }}>{user.bio ? user.bio : ''}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{
            padding: 2,
            paddingLeft: 3,
            paddingRight: 3,
            height: '100%',
          }}
          >
            <Box>
              <Typography>
                <strong>Joined:</strong>
                &nbsp;
                {`${joinDate.toLocaleDateString()}`}
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5">
              User Trade Requests
            </Typography>
            <Stack spacing={2}>
              {trades
                && trades.map((trade) => (
                  <Trade
                    key={trade.id}
                    trade={trade}
                    handleDelete={handleDelete(trade.id)}
                  />
                ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserPage;

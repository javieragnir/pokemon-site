import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Backdrop,
  CircularProgress,
  Stack,
  Button,
  Modal,
  Switch,
  FormControlLabel,
  FormHelperText,
  FormControl,
} from '@mui/material';
import Trade from '../Trade';
import userService from '../../services/users';
import tradeService from '../../services/trade';
import { UserContext } from '../../contexts/UserContext';
import defaultModalStyle from '../../styles/defaultModalStyle';
import FriendCodeField from './FriendCodeField';
import EditButton from './EditButton';

const style = {
  ...defaultModalStyle,
  height: 'max-content',
};

function UserPage() {
  const [openProgress, setOpenProgress] = useState(true);
  const [user, setUser] = useState(null);
  const [trades, setTrades] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [friendCode, setFriendCode] = useState('');
  const [checked, setChecked] = useState(true);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };

  const { username } = useParams();
  const loggedUser = useContext(UserContext);

  const isLoggedUser = (user && loggedUser && user.username === loggedUser.username);

  const handleOpenProgress = () => setOpenProgress(true);
  const handleCloseProgress = () => setOpenProgress(false);

  const handleFriendCodeChange = (event) => {
    setFriendCode(event.target.value);
  };

  useEffect(() => {
    userService.findOne(username)
      .then((foundUser) => {
        setUser(foundUser);
        return foundUser;
      })
      .then((foundUser) => tradeService.getByUserId(foundUser.id))
      .then((response) => setTrades(response))
      .catch((error) => console.log(error))
      .finally(() => handleCloseProgress());
  }, []);

  // View while loading
  if (!user) {
    if (openProgress) {
      return (
        <Container>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
            open={openProgress}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Container>
      );
    }

    // View if no user is found.
    return (
      <Container>
        <Typography>User not found.</Typography>
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
    } catch (error) {
      console.log(error);
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
      handleModalClose();
      setFriendCode('');
    } catch (error) {
      console.log(error);
    }

    handleCloseProgress();
  };

  return (
    <Container sx={{ marginTop: 1 }}>
      {/* Modal: Friend Code Form */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
      >
        <Box sx={style}>
          <Stack alignItems="flex-start">
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              Update friend code
            </Typography>
            <FormControl variant="standard">
              <FormControlLabel
                sx={{ margin: 0 }}
                control={(
                  <Switch
                    checked={checked}
                    onChange={handleCheckedChange}
                  />
                )}
                label="Is code for Nintendo Switch"
                labelPlacement="start"
              />
            </FormControl>
            <FormControl variant="standard">
              <FriendCodeField
                value={friendCode}
                onChange={handleFriendCodeChange}
              />
              <FormHelperText>
                Twelve digits in the form 0000-0000-0000
              </FormHelperText>
            </FormControl>
            <Button variant="contained" onClick={handleFriendCodeSubmit} sx={{ marginTop: 2 }}>
              Update
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
        open={openProgress}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Content */}
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
                  border: '2px solid white',
                  borderRadius: 2,
                  backgroundColor: (theme) => theme.palette.background.default,
                }}
              >
                {user.profilePictureUrl
                && <img style={{ height: '100%', width: '100%' }} src={`${user.profilePictureUrl}?w=160&h=160&fit=crop&auto=format`} alt="Kappa" />}
                <EditButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    zIndex: (theme) => theme.zIndex.modal + 1,
                  }}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="overline">Friend Code:</Typography>
                <Typography>
                  { user && user.friendCode ? user.friendCode : 'No friend code available.'}
                  { isLoggedUser
                    && (
                    <EditButton size="small" onClick={handleModalOpen} />
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
              <Typography sx={{ padding: 0, margin: 0 }} variant="h6">Bio</Typography>
              <Typography sx={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
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
                <strong>Reputation:</strong>
                {' '}
                6
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

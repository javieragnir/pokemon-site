import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Stack,
  Box,
  Button,
  Modal,
  TextField,
  Fade,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { UserContext } from '../../contexts/UserContext';
import Trade from '../Trade';
import Comment from '../Comment';
import tradeService from '../../services/trade';
import SpinnerOverlay from '../SpinnerOverlay';
import defaultModalStyle from '../../styles/defaultModalStyle';
import commentService from '../../services/comments';
import ErrorAlert from '../ErrorAlert';
import SignUpModal from '../SignUpModal';

const style = {
  ...defaultModalStyle,
  width: '80%',
};

function TradePage() {
  const [trade, setTrade] = useState(null);
  const [loadingOpen, setLoadingOpen] = useState(true);
  const [buttonLoadingOpen, setButtonLoadingOpen] = useState(false);
  const [content, setContent] = useState('');
  const [newCommentOpen, setNewCommentOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [signUpModal, setSignUpModal] = useState(false);

  const user = useContext(UserContext);
  const { tradeId } = useParams();

  const handleLoadingOpen = () => setLoadingOpen(true);
  const handleLoadingClose = () => setLoadingOpen(false);
  const handleButtonLoadingOpen = () => setButtonLoadingOpen(true);
  const handleButtonLoadingClose = () => setButtonLoadingOpen(false);
  const handleNewCommentOpen = () => setNewCommentOpen(true);
  const handleNewCommentClose = () => setNewCommentOpen(false);
  const openSignUpModal = () => setSignUpModal(true);

  useEffect(() => {
    handleLoadingOpen();
    tradeService.getByTradeId(tradeId)
      .then((foundTrade) => {
        setTrade(foundTrade);
        return foundTrade;
      })
      .catch((error) => setErrorMessage(error.response.data.error))
      .finally(() => handleLoadingClose());
  }, []);

  const handleSubmit = async () => {
    handleButtonLoadingOpen();
    try {
      await commentService.create(tradeId, content);
      const foundTrade = await tradeService.getByTradeId(tradeId);
      setTrade(foundTrade);
      setContent('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
    handleNewCommentClose();
    handleButtonLoadingClose();
  };

  const handleCommentDelete = (id) => async () => {
    handleLoadingOpen();
    try {
      await commentService.deleteComment(id);
      const response = await tradeService.getByTradeId(tradeId);
      setTrade(response);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
    handleLoadingClose();
  };

  // View while loading
  if (!trade) {
    if (loadingOpen) {
      return (
        <Container>
          <SpinnerOverlay open={loadingOpen} />
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

  return (
    <Container>
      <SignUpModal open={signUpModal} setOpen={setSignUpModal} />
      <SpinnerOverlay open={loadingOpen} />
      <ErrorAlert errorMessage={errorMessage} />
      <Trade trade={trade} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 2,
          marginBottom: 2,
          alignItems: 'baseline',
        }}
      >
        <Typography variant="h4">Comments</Typography>
        <Button
          variant="contained"
          sx={{ height: 'max-content' }}
          onClick={user ? handleNewCommentOpen : openSignUpModal}
        >
          Post
        </Button>
      </Box>
      <Modal
        open={newCommentOpen}
        onClose={handleNewCommentClose}
        closeAfterTransition
      >
        <Fade in={newCommentOpen}>
          <Box sx={style}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Add post
            </Typography>
            <Stack spacing={2}>
              <TextField
                multiline
                rows={5}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                label="Description"
              />
              <LoadingButton
                variant="contained"
                onClick={handleSubmit}
                loading={buttonLoadingOpen}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Stack spacing={2}>
        {trade.trade_comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            handleDelete={handleCommentDelete(comment.id)}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default TradePage;

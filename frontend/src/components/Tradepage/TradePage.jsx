import { useState, useEffect } from 'react';
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
import Trade from '../Trade';
import Comment from '../Comment';
import tradeService from '../../services/trade';
import SpinnerOverlay from '../SpinnerOverlay';
import defaultModalStyle from '../../styles/defaultModalStyle';
import commentService from '../../services/comments';

const style = {
  ...defaultModalStyle,
  width: '80%',
};

function TradePage() {
  const [trade, setTrade] = useState(null);
  const [loadingOpen, setLoadingOpen] = useState(true);
  const [content, setContent] = useState('');
  const [newCommentOpen, setNewCommentOpen] = useState(false);
  const { tradeId } = useParams();

  const handleLoadingOpen = () => setLoadingOpen(true);
  const handleLoadingClose = () => setLoadingOpen(false);
  const handleNewCommentOpen = () => setNewCommentOpen(true);
  const handleNewCommentClose = () => setNewCommentOpen(false);

  useEffect(() => {
    handleLoadingOpen();
    tradeService.getByTradeId(tradeId)
      .then((foundTrade) => {
        setTrade(foundTrade);
        return foundTrade;
      })
      .catch((error) => console.log(error))
      .finally(() => handleLoadingClose());
  }, []);

  const handleSubmit = async () => {
    handleLoadingOpen();
    try {
      await commentService.create(tradeId, content);
      const foundTrade = await tradeService.getByTradeId(tradeId);
      setTrade(foundTrade);
      setContent('');
    } catch (error) {
      console.log(error);
    }
    handleNewCommentClose();
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
          onClick={handleNewCommentOpen}
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
                loading={loadingOpen}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Stack spacing={2}>
        {trade.trade_comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Stack>
    </Container>
  );
}

export default TradePage;

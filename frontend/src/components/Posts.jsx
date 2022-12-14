import { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import {
  Container,
  Box,
  Stack,
  Button,
  Typography,
  Modal,
  TextField,
  Fade,
} from '@mui/material';
import { UserContext } from '../contexts/UserContext';
import PokemonPicker from './PokemonPicker';
import tradeService from '../services/trade';
import Trade from './Trade';
import defaultModalStyle from '../styles/defaultModalStyle';
import SpinnerOverlay from './SpinnerOverlay';
import ErrorAlert from './ErrorAlert';
import SignUpModal from './SignUpModal';

const style = {
  ...defaultModalStyle,
  width: '80%',
};

function Posts() {
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [offeredPokemon, setOfferedPokemon] = useState(null);
  const [requestedPokemon, setRequestedPokemon] = useState(null);
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState(null);
  const [loadingOpen, setLoadingOpen] = useState(true);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 500);
  const [errorMessage, setErrorMessage] = useState('');
  const [signUpModal, setSignUpModal] = useState(false);

  const user = useContext(UserContext);

  const handlePostOpen = () => setNewPostOpen(true);
  const handlePostClose = () => setNewPostOpen(false);

  const handleLoadingOpen = () => setLoadingOpen(true);
  const handleLoadingClose = () => setLoadingOpen(false);

  const openSignUpModal = () => setSignUpModal(true);

  // query the database, debounced a split second after finished typing
  useEffect(() => {
    tradeService.getAll(debouncedQuery)
      .then((trades) => {
        setPosts(trades);
      })
      .catch(() => {
        setErrorMessage('Could not load trades.');
        setPosts(null);
      })
      .finally(() => {
        handleLoadingClose();
      });
  }, [debouncedQuery]);

  // submit a new post
  const handleSubmit = async () => {
    handleLoadingOpen();
    try {
      const trades = await tradeService.create({
        offeredId: offeredPokemon.id,
        requestedId: requestedPokemon.id,
        content,
      }, debouncedQuery);
      handlePostClose();
      setPosts(trades);
      setOfferedPokemon(null);
      setRequestedPokemon(null);
      setContent('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
    handleLoadingClose();
  };

  const handleDelete = (id) => async () => {
    handleLoadingOpen();
    try {
      await tradeService.deleteTrade(id);
      const response = await tradeService.getAll(debouncedQuery);
      setPosts(response);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
    handleLoadingClose();
  };

  return (
    <Container>
      <SpinnerOverlay open={loadingOpen} />
      <ErrorAlert errorMessage={errorMessage} />
      <Typography variant="h2"><strong>Trades</strong></Typography>
      <Box marginBottom={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <TextField
            label="Search"
            variant="outlined"
            type="search"
            size="small"
            sx={{ width: 250 }}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button onClick={user ? handlePostOpen : openSignUpModal} variant="contained">
            Add post
          </Button>
        </Stack>
      </Box>
      <SignUpModal open={signUpModal} setOpen={setSignUpModal} />
      <Modal
        open={newPostOpen}
        onClose={handlePostClose}
        closeAfterTransition
      >
        <Fade in={newPostOpen}>
          <Box sx={style}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Add post
            </Typography>
            <Stack spacing={2}>
              <PokemonPicker
                setFunction={setOfferedPokemon}
                label="Pokemon to offer"
              />
              <PokemonPicker
                setFunction={setRequestedPokemon}
                label="Pokemon to request"
              />
              <TextField
                multiline
                rows={5}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                label="Description"
              />
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Stack spacing={2}>
        {posts
        && posts.map((post) => (
          <Trade
            key={post.id}
            trade={post}
            handleDelete={handleDelete(post.id)}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Posts;

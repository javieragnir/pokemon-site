import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import PokemonPicker from './PokemonPicker';
import {
  Container,
  Box,
  Stack,
  Button,
  Typography,
  Modal,
  TextField,
  Fade,
  Backdrop,
  CircularProgress,
} from '@mui/material'
import tradeService from '../services/trade'
import Trade from './Trade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Posts = () => {
  const [newPostOpen, setNewPostOpen] = useState(false)
  const [offeredPokemon, setOfferedPokemon] = useState(null)
  const [requestedPokemon, setRequestedPokemon] = useState(null)
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState(null)
  const [loadingOpen, setLoadingOpen] = useState(true)

  const user = useContext(UserContext)

  const handlePostOpen = () => setNewPostOpen(true)
  const handlePostClose = () => setNewPostOpen(false)

  const handleLoadingOpen = () => setLoadingOpen(true)
  const handleLoadingClose = () => setLoadingOpen(false)

  useEffect(() => {
    tradeService.getAll()
      .then(posts => {
        setPosts(posts)
        handleLoadingClose()
      })
  }, [])

  const handleSubmit = async () => {
    handleLoadingOpen()
    const trades = await tradeService.create({
      offeredId: offeredPokemon.id,
      requestedId: requestedPokemon.id,
      content,
    })
    handleLoadingClose()
    handlePostClose()
    setPosts(trades)
    setOfferedPokemon(null)
    setRequestedPokemon(null)
    setContent('')
  }

  const handleDelete = (id) => {
    return async () => {
      handleLoadingOpen()
      await tradeService.deleteTrade(id)
      const response = await tradeService.getAll()
      setPosts(response)
      handleLoadingClose()
    }
  }

  return (
    <Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
        open={loadingOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="h2">Posts</Typography>
      <Box marginBottom={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Box sx={{ display: 'flex', alignItems: 'flex-bottom', gap: 1 }}>
            <TextField
              label="Keyword"
              variant="outlined"
              type="search"
              size="small"
              sx={{ width: 250 }}
            />
            <Button variant="contained" >Search</Button>
          </Box>
          {user &&
          <Button onClick={handlePostOpen} variant="contained" >
            Add post
          </Button>
          }
        </Stack>
      </Box>
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
              />
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Stack spacing={2}>
        {posts &&
          posts.map(post => <Trade key={post.id} trade={post} handleDelete={handleDelete(post.id)} />)
        }
      </Stack>
    </Container>
  )
}

export default Posts
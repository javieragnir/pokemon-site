import { useState, useEffect, useContext } from 'react'
import { useDebounce } from 'use-debounce'
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
import { defaultModalStyle } from '../styles'

const style = {
  ...defaultModalStyle,
  width: '80%',
};

const Posts = () => {
  const [newPostOpen, setNewPostOpen] = useState(false)
  const [offeredPokemon, setOfferedPokemon] = useState(null)
  const [requestedPokemon, setRequestedPokemon] = useState(null)
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState(null)
  const [loadingOpen, setLoadingOpen] = useState(true)
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebounce(query, 500)

  const user = useContext(UserContext)

  const handlePostOpen = () => setNewPostOpen(true)
  const handlePostClose = () => setNewPostOpen(false)

  const handleLoadingOpen = () => setLoadingOpen(true)
  const handleLoadingClose = () => setLoadingOpen(false)

  useEffect(() => {
    tradeService.getAll(debouncedQuery)
      .then(posts => {
        setPosts(posts)
        handleLoadingClose()
      })
  }, [debouncedQuery])

  const handleSubmit = async () => {
    handleLoadingOpen()
    const trades = await tradeService.create({
      offeredId: offeredPokemon.id,
      requestedId: requestedPokemon.id,
      content,
    }, debouncedQuery)
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
      const response = await tradeService.getAll(debouncedQuery)
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
          <TextField
            label="Search"
            variant="outlined"
            type="search"
            size="small"
            sx={{ width: 250 }}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
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
        {posts &&
          posts.map(post => <Trade key={post.id} trade={post} handleDelete={handleDelete(post.id)} />)
        }
      </Stack>
    </Container>
  )
}

export default Posts
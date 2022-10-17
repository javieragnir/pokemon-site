import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import PokemonPicker from './PokemonPicker';
import {
  Container,
  Grid,
  Box,
  Stack,
  Paper,
  Button,
  Typography,
  Modal,
  TextField,
  Fade,
  Link,
} from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import tradeService from '../services/trade'

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
  const [open, setOpen] = useState(false)
  const [offeredPokemon, setOfferedPokemon] = useState(null)
  const [requestedPokemon, setRequestedPokemon] = useState(null)
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState(null)

  const user = useContext(UserContext)

  useEffect(() => {
    tradeService.getAll()
      .then(posts => setPosts(posts))
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = async () => {
    const trades = await tradeService.create({
      offeredId: offeredPokemon.id,
      requestedId: requestedPokemon.id,
      content,
    })
    console.log('trades', trades)
    handleClose()
    setPosts(trades)
    setOfferedPokemon(null)
    setRequestedPokemon(null)
    setContent('')
  }

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <Typography variant="h2">Posts</Typography>
            <Box marginBottom={1}>
              {user &&
              <Button onClick={handleOpen} variant="contained" sx={{ height: 'max-content' }}>
                Add post
              </Button>
              }
            </Box>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
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
      <Grid container spacing={2}>
        {posts &&
          posts.map(post => {
            const date = new Date(post.createdAt)
            return (
                <Grid item xs={12} key={post.id}>
                  <Paper sx={{
                    padding: 2,
                    textAlign: 'justify',
                    paddingRight: 4,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center'
                  }}
                  >     
                    <Box sx={{ boxSizing: 'border-box', height: 'max-content', width: 120, flexShrink: 0 }}>
                      <Paper elevation={3} sx={{ textAlign: 'center' }}>
                        <Typography variant="overline">Offering</Typography>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${post.offeredId}.png`} alt={post.pokemonOffered} />
                        <Typography variant="overline">{post.offered.name}</Typography>
                      </Paper>
                    </Box>
                    <SwapHorizIcon/>
                    <Box sx={{ boxSizing: 'border-box', height: 'max-content', width: 120, flexShrink: 0 }}>
                      <Paper elevation={3} sx={{ textAlign: 'center' }}>
                        <Typography variant="overline">Requesting</Typography>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${post.requestedId}.png`} alt={post.pokemonRequested} />
                        <Typography variant="overline">{post.requested.name}</Typography>
                      </Paper>
                    </Box>
                    <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <Link
                          href="#"
                          color="inherit"
                          underline="hover"
                          variant="h6"
                          sx={{ display: 'inline' }}
                        >
                          {post.user.username}
                        </Link>
                        <Typography variant="body2">{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} </Typography>
                      </Box>
                      {post.content}
                      </Box>
                  </Paper>
                </Grid>
              )
            }
          )
        }
      </Grid>
    </Container>
  )
}

export default Posts
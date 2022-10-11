import { useState } from 'react'
import posts from '../data/posts'
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
  Fade
} from '@mui/material'

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
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <Typography variant="h2">Posts</Typography>
            <Box marginBottom={1}>
              <Button onClick={handleOpen} variant="contained" sx={{ height: 'max-content' }}>
                Add post
              </Button>
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
              <TextField

              />
              <TextField
                multiline
                rows={5}
              />
              <Button variant="contained">
                Submit
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Grid container spacing={2}>
        {
          posts.map(post => 
            <Grid item xs={12} key={post.id}>
              <Paper sx={{ padding: 2, textAlign: 'justify', paddingRight: 4 }}>         
                <Stack spacing={1} direction='row'>
                  <Box>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${post.pokemon}.png`} alt={post.pokemon} />
                  </Box>
                  <Box>
                    {post.content}
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}

export default Posts
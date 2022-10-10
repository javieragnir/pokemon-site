import posts from '../data/posts'
import {
  Container,
  Grid,
  Box,
  Stack,
  Paper,
  Button,
  Typography
} from '@mui/material'

const Posts = () => {

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <Typography variant="h2">Posts</Typography>
            <Box marginBottom={1}>
              <Button variant="contained" sx={{ height: 'max-content' }}>
                Add post
              </Button>
            </Box>
      </Stack>
      <Grid container spacing={2}>
        {
          posts.map(post => 
            <Grid item xs={12} key={post.id}>
              <Paper sx={{ padding: 1 }}>         
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
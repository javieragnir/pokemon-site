import posts from '../data/posts'
import { Container, Grid, Box, Stack } from '@mui/material'

const Posts = () => {

  return (
    <Container>
      <Grid container spacing={2}>
        {
          posts.map(post => 
            <Grid item xs={6}>
              <Stack spacing={1} direction='row'>
                <Box>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${post.pokemon}.png`} alt={post.pokemon} />
                </Box>
                <Box>
                  {post.content}
                </Box>
              </Stack>
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}

export default Posts
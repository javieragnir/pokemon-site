import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Backdrop,
  CircularProgress,
  Stack
 } from '@mui/material'
import userService from '../services/users'

const UserPage = () => {
  const [openProgress, setOpenProgress] = useState(true)
  const [user, setUser] = useState(null)

  const username = useParams().username

  // const handleOpenProgress = () => setOpenProgress(true)
  const handleCloseProgress = () => setOpenProgress(false)

  useEffect(() => {
    userService.findOne(username)
      .then(response => setUser(response))
      .catch(error => setUser(null))
      .finally(() => handleCloseProgress())
  }, [])

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
    )
  }

  if (!user) {
    return (
      <Container>
        <Typography>User not found.</Typography>
      </Container>
    )
  }

  return (
    <Container sx={{ marginTop: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ padding: 1 }}>
            <Stack alignItems="center" gap={1}>
              <Typography variant="h4">{username}</Typography>
              <Box
                sx={{
                  height: 160,
                  width: 160,
                  border: '2px solid white',
                  borderRadius: 2,
                  backgroundColor: (theme) => theme.palette.background.default
                }}
              >
                <img style={{ height: '100%', width: '100%' }} src="https://i.kym-cdn.com/photos/images/newsfeed/000/925/494/218.png_large?w=164&h=164&fit=crop&auto=format" alt="Kappa" />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="overline">Friend Code:</Typography>
                <Typography>0011-0111-1111-1111</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Box>
            <Typography>
              lololololololololol
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UserPage
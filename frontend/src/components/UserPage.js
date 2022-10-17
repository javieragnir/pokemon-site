import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import { Container, Typography, Grid, Box, Paper, Backdrop, CircularProgress } from '@mui/material'
import userService from '../services/users'

const UserPage = () => {
  const [openProgress, setOpenProgress] = useState(true)
  const [user, setUser] = useState(null)

  const username = useParams().username

  const handleOpenProgress = () => setOpenProgress(true)
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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper>
            <Typography>{username}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
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
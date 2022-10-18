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
import Trade from './Trade'
import userService from '../services/users'
import tradeService from '../services/trade'

const UserPage = () => {
  const [openProgress, setOpenProgress] = useState(true)
  const [user, setUser] = useState(null)
  const [trades, setTrades] = useState(null)

  const username = useParams().username

  // const handleOpenProgress = () => setOpenProgress(true)
  const handleCloseProgress = () => setOpenProgress(false)

  useEffect(() => {
    userService.findOne(username)
      .then(user => {
        setUser(user)
        return user
      })
      .then(user => tradeService.getByUserId(user.id))
      .then(response => setTrades(response))
      .catch(error => console.log(error))
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
          <Paper sx={{
            padding: 2,
            paddingLeft: 3,
            paddingRight: 3,
            height: '100%',
            }}>
            <Box>
              <Typography sx={{ padding: 0, margin: 0 }} variant="h6">Bio</Typography>
              <Typography sx={{textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5">
              User Trade Requests
            </Typography>
            <Stack spacing={2}>
              {trades &&
                trades.map(trade => <Trade key={trade.id} trade={trade} />)
              }
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UserPage
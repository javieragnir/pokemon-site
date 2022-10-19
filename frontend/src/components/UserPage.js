import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom' 
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Backdrop,
  CircularProgress,
  Stack,
  IconButton
 } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import Trade from './Trade'
import userService from '../services/users'
import tradeService from '../services/trade'
import { UserContext } from '../contexts/UserContext';

const UserPage = () => {
  const [openProgress, setOpenProgress] = useState(true)
  const [user, setUser] = useState(null)
  const [trades, setTrades] = useState(null)

  const username = useParams().username
  const loggedUser = useContext(UserContext)

  const isLoggedUser = (user && loggedUser && user.username === loggedUser.username)
  console.log(user)
  console.log(loggedUser)

  const handleOpenProgress = () => setOpenProgress(true)
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

  if (!user) {
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

    return (
      <Container>
        <Typography>User not found.</Typography>
      </Container>
    )
  }

  const handleDelete = (id) => {
    return async () => {
      handleOpenProgress()
      await tradeService.deleteTrade(id)
      const response = await tradeService.getByUserId(user.id)
      setTrades(response)
      handleCloseProgress()
    }
  }

  return (
    <Container sx={{ marginTop: 1 }}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
        open={openProgress}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ padding: 1 }}>
            <Stack alignItems="center" gap={1}>
              <Typography variant="h4">{username}</Typography>
              <Box
                sx={{
                  width: 160,
                  height: 160,
                  border: '2px solid white',
                  borderRadius: 2,
                  backgroundColor: (theme) => theme.palette.background.default
                }}
              >
                {user.profilePictureUrl &&
                <img style={{ height: '100%', width: '100%' }} src={`${user.profilePictureUrl}?w=160&h=160&fit=crop&auto=format`} alt="Kappa" />
                }
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="overline">Friend Code:</Typography>
                <Typography>
                  0011-0111-1111-1111
                  { isLoggedUser &&
                    <IconButton size="small">
                      <EditIcon fontsize="inherit" />
                    </IconButton>
                  }
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={3}>
        <Paper sx={{
            padding: 2,
            paddingLeft: 3,
            paddingRight: 3,
            height: '100%',
            }}>
            <Box>
              <Typography><strong>Reputation:</strong> 6</Typography>
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
                trades.map(trade => 
                  <Trade
                    key={trade.id}
                    trade={trade}
                    handleDelete={handleDelete(trade.id)}
                  />
                )
              }
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UserPage
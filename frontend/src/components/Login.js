import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Paper,
  Box,
  Link,
  Modal,
  Fade
} from '@mui/material'
import loginService from '../services/login'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameErrorState, setUsernameErrorState] = useState(false)
  const [passwordErrorState, setPasswordErrorState] = useState(false)
  const [usernameMessage, setUsernameMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [wrongCredentials, setWrongCredentials] = useState(false)
  const [user, setUser] = useState(null)

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    setUsernameErrorState(false)
    setPasswordErrorState(false)
    setUsernameMessage('')
    setPasswordMessage('')
    setWrongCredentials(false)

    if (!username) {
      setUsernameErrorState(true)
      setUsernameMessage('Field is required')
    } 

    if (!password) {
      setPasswordErrorState(true)
      setPasswordMessage('Field is required')
    }

    if (username && password) {
      try {
        const user = await loginService.login({
          username, password,
        })

        window.localStorage.setItem(
          'loggedUser', JSON.stringify(user)
        )

        setUser(user)
        setUsername('')
        setPassword('')
        navigate('/')
      } catch (exception) {
        setUsernameErrorState(true)
        setPasswordErrorState(true)
        setUsernameMessage('')
        setPasswordMessage('')
        setWrongCredentials(true)
      }
    }

  }

  return (
    <Container>
      <Typography variant="h2">Log In</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ width: 400, padding: 4, paddingBottom: 2 }}>
            <Stack alignItems="center" spacing={2} sx={{ width: '100%' }}>
              <TextField
                id="username" label="Username" variant="outlined"
                value={username} onChange={(event) => setUsername(event.target.value)}
                error={usernameErrorState} helperText={usernameErrorState ? usernameMessage : ''}
                sx={{ width: '100%' }}
              />
              <TextField
                id="password" label="Password" variant="outlined"
                value={password} onChange={(event) => setPassword(event.target.value)}
                type="password"
                error={passwordErrorState} helperText={passwordErrorState ? passwordMessage : ''}
                sx={{ width: '100%' }}
              />
              {wrongCredentials &&
                <Alert severity="error" sx={{ width: '100%' }}>
                  Username or password is incorrect.
                </Alert>
              }
              <Button variant="contained" onClick={handleLogin} sx={{ width: '100%' }}>
                Submit
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                <Typography variant="body2">Don't have an account?</Typography>
                <Link
                  component="button"
                  variant="body2"
                  color="inherit"
                  onClick={handleOpen}
                >
                  Sign up
                </Link>
              </Box>
            </Stack>
        </Paper>
      </Box>
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
          </Box>
        </Fade>
      </Modal>
    </Container>
  )
}

export default Login
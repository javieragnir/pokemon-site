import { useState } from 'react'

import { Container, Typography, TextField, Button, Stack } from '@mui/material'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameErrorState, setUsernameErrorState] = useState(false)
  const [passwordErrorState, setPasswordErrorState] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    if (!username) {
      setUsernameErrorState(true)
    } 

    if (!password) {
      setPasswordErrorState(true)
    }

    if (username && password) {
      console.log('logging in with', username, password)
      setUsernameErrorState(false)
      setPasswordErrorState(false)
    }

  }

  const helperText = 'Field is required.'

  return (
    <Container>
      <Typography variant="h2">Log In</Typography>
        <Stack alignItems="center" spacing={2} sx={{ width: '100%' }}>
          <TextField
            id="username" label="Username" variant="outlined"
            value={username} onChange={(event) => setUsername(event.target.value)}
            error={usernameErrorState} helperText={usernameErrorState ? helperText : ''}
            sx={{ width: '50%' }}
          />
          <TextField
            id="password" label="Password" variant="outlined"
            value={password} onChange={(event) => setPassword(event.target.value)}
            type="password"
            error={passwordErrorState} helperText={passwordErrorState ? helperText : ''}
            sx={{ width: '50%' }}
          />
          <Button variant="contained" onClick={handleLogin} sx={{ width: '50%' }}>
            Submit
          </Button>
        </Stack>
    </Container>
  )
}

export default Login
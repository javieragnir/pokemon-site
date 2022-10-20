import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Paper,
  Box,
} from '@mui/material';
import usersService from '../services/users';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErrorState, setUsernameErrorState] = useState(false);
  const [passwordErrorState, setPasswordErrorState] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    setUsernameErrorState(false);
    setPasswordErrorState(false);
    setUsernameMessage('');
    setPasswordMessage('');
    setSuccess(false);
    setErrorMessage('');

    if (!username) {
      setUsernameErrorState(true);
      setUsernameMessage('Field is required');
    }

    if (!password) {
      setPasswordErrorState(true);
      setPasswordMessage('Field is required');
    }

    if (password.length < 8) {
      setPasswordMessage('Password must be at least 8 characters long');
    }

    if (!password.match(/^[a-z0-9]+$/i)) {
      setPasswordMessage('Password must consist of alphanumeric characters only');
    }

    if (username && password) {
      try {
        await usersService.signup({
          username, password,
        });

        setSuccess(true);
        setTimeout(() => navigate('/login'), 3000);
      } catch (exception) {
        setUsernameErrorState(true);
        setPasswordErrorState(true);
        setUsernameMessage('');
        setPasswordMessage('');
        setErrorMessage(exception.response.data.error);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h2">Sign Up</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ width: 400, padding: 3 }}>
          <Stack alignItems="center" spacing={2} sx={{ width: '100%' }}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              error={usernameErrorState}
              helperText={usernameErrorState ? usernameMessage : ''}
              sx={{ width: '100%' }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              error={passwordErrorState}
              helperText={passwordErrorState ? passwordMessage : ''}
              sx={{ width: '100%' }}
            />
            {errorMessage
                && (
                <Alert severity="error" sx={{ width: '100%' }}>
                  {errorMessage}
                </Alert>
                )}
            {success
                && (
                <Alert severity="success" sx={{ width: '100%' }}>
                  Account creation successful!
                </Alert>
                )}
            <Button variant="contained" onClick={handleSignup} sx={{ width: '100%' }}>
              Sign up
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default Signup;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Stack,
  Alert,
  Paper,
  Box,
  Link,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import loginService from '../services/login';
import tradeService from '../services/trade';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErrorState, setUsernameErrorState] = useState(false);
  const [passwordErrorState, setPasswordErrorState] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    setUsernameErrorState(false);
    setPasswordErrorState(false);
    setUsernameMessage('');
    setPasswordMessage('');
    setWrongCredentials(false);

    if (!username) {
      setUsernameErrorState(true);
      setUsernameMessage('Field is required');
    }

    if (!password) {
      setPasswordErrorState(true);
      setPasswordMessage('Field is required');
    }

    if (username && password) {
      try {
        const user = await loginService.login({
          username, password,
        });

        window.localStorage.setItem('loggedUser', JSON.stringify(user));

        tradeService.setToken(user.token);
        setUser(user);
        setUsername('');
        setPassword('');
        navigate('/');
      } catch (exception) {
        setUsernameErrorState(true);
        setPasswordErrorState(true);
        setUsernameMessage('');
        setPasswordMessage('');
        setWrongCredentials(true);
      }
    }

    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h2">Log In</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ width: 400, padding: 3, paddingBottom: 2 }}>
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
            {wrongCredentials
                && (
                <Alert severity="error" sx={{ width: '100%' }}>
                  Username or password is incorrect.
                </Alert>
                )}
            <LoadingButton
              variant="contained"
              onClick={handleLogin}
              loading={loading}
              sx={{ width: '100%' }}
            >
              Sign in
            </LoadingButton>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
              <Typography variant="body2">Don&apos;t have an account?</Typography>
              <Link
                component="button"
                variant="body2"
                color="inherit"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </Link>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;

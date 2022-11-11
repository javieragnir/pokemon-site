/* eslint-disable global-require */
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import Features from './Features';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          paddingTop: 6,
          paddingBottom: 10,
          margin: 0,
          backgroundColor: '#001845',
          paddingLeft: 36,
          paddingRight: 36,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    width: 'max-content', marginRight: 2, marginBottom: 1,
                  }}
                >
                  <strong>
                    Welcome to
                    <br />
                    Pokemon Trades!
                  </strong>
                </Typography>
                <Typography
                  variant="h6"
                >
                  Join our growing community of trainers and find the perfect Pokemon
                  for your team.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ boxSizing: 'border-box', width: 90 }}
                    onClick={() => navigate('/login')}
                  >
                    Log In
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ boxSizing: 'border-box', width: 90 }}
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
              <Box>
                <img
                  src={require('../../files/pokeimage.png')}
                  alt="trading pokemon"
                  style={{ width: '375px' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Features />
    </>
  );
}

export default Home;

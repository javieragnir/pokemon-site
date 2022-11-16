/* eslint-disable global-require */
import {
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import Features from './Features';
import SignUpButtonGroup from '../SignUpButtonGroup';

function Home() {
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
                <SignUpButtonGroup />
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

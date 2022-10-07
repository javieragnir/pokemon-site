import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Paper
} from '@mui/material'

import {
  ThemeProvider
} from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline'

import { darkTheme } from './theme'

const Home = () => {
  return (
    <Container>
      <Typography variant="h2">
        Home
      </Typography>
      <Typography variant="body1">
        Work in progress!
      </Typography>
    </Container>
  )
}

const About = () => {
  return (
    <Container>
      <Typography variant="h2">
        About
      </Typography>
      <Typography variant="body1">
        This is the about page.
      </Typography>
    </Container>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
      <Container sx={{ bgcolor: 'background' }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>

          <Container sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Paper sx={{
              position: 'fixed',
              bottom: 0,
              width: '50%',
              textAlign: 'center',
              padding: '0.1em'
            }}>
                <Typography><i>Pokemon app, Javier Agnir 2022</i></Typography>
            </Paper>
          </Container>
      </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App;

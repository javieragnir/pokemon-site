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
  Paper,
} from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme } from './theme'

import Home from './components/Home'
import Posts from './components/Posts'
import Login from './components/Login'
import Signup from './components/Signup'

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
              <Button color="inherit" component={Link} to="/posts">
                Posts
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Log In
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
                <Typography variant="body2"><i>Pokemon app, Javier Agnir 2022</i></Typography>
            </Paper>
          </Container>
      </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App;

import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route,
  Link as RouterLink
} from "react-router-dom"

import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Paper,
  Box,
  Link
} from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme } from './theme'

import Home from './components/Home'
import About from './components/About'
import Posts from './components/Posts'
import Login from './components/Login'
import Signup from './components/Signup'
import UserPage from './components/UserPage'
import UserProvider from './contexts/UserContext'

import tradeService from './services/trade'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      // set token functions (e.g. noteService.setToken(user.token))
      tradeService.setToken(user.token)
    }
  }, [])

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedUser')
  }

  return (
    <UserProvider user={user}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
        <Container sx={{ bgcolor: 'background' }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" component={RouterLink} to="/">
                  Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/posts">
                  Posts
                </Button>
                <Button color="inherit" component={RouterLink} to="/about">
                  About
                </Button>
                {!user &&
                  <Button color="inherit" component={RouterLink} to="/login" sx={{ marginLeft: 'auto' }}>
                    Log In
                  </Button>
                }
                {user &&
                <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography>
                    Signed in as&nbsp;
                    <Link
                        component={RouterLink}
                        to={`/user/${user.username}`}
                        underline="hover"
                        color="inherit"
                      >
                        <strong>{user.username}</strong>
                      </Link>
                  </Typography>
                  <Button color="inherit" onClick={logout}>
                    Log out
                  </Button>
                </Box>
                }
              </Toolbar>
            </AppBar>

            <Routes>
              <Route path="/posts" element={<Posts />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login setUser={setUser}/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user/:username" element={<UserPage />} />
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
    </UserProvider>
  )
}

export default App;

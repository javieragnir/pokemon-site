import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';

import {
  Container,
  Box,
} from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './theme';

import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Login from './components/Login';
import Signup from './components/Signup';
import UserPage from './components/Userpage/UserPage';
import NavigationHeader from './components/NavigationHeader';
import TradePage from './components/Tradepage/TradePage';
import Footer from './components/Footer';
import UserProvider from './contexts/UserContext';
import tradeService from './services/trade';
import commentService from './services/comments';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON);
      setUser(loggedUser);
      // set token functions (e.g. noteService.setToken(user.token))
      tradeService.setToken(loggedUser.token);
      commentService.setToken(loggedUser.token);
    }
  }, []);

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('loggedUser');
    window.location.reload();
  };

  return (
    <UserProvider user={user}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Container sx={{ bgcolor: 'background' }}>
            <NavigationHeader logout={logout} />

            <Box sx={{ minHeight: '80vh' }}>
              <Routes>
                <Route path="/trade" element={<Posts />} />
                <Route path="/trade/:tradeId" element={<TradePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user/:username" element={<UserPage />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Box>

            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;

import { useContext } from 'react';
import {
  Link as RouterLink,
} from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Link,
} from '@mui/material';
import { UserContext } from '../contexts/UserContext';

function NavigationHeader({ logout }) {
  const user = useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/trade">
          Trades
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        {!user
        && (
        <Button color="inherit" component={RouterLink} to="/login" sx={{ marginLeft: 'auto' }}>
          Log In
        </Button>
        )}
        {user
      && (
      <Box sx={{
        marginLeft: 'auto', display: 'flex', alignItems: 'baseline', gap: 1,
      }}
      >
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
      )}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationHeader;

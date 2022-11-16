import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
} from '@mui/material';

function SignUpButtonGroup() {
  const navigate = useNavigate();

  return (
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
  );
}

export default SignUpButtonGroup;

import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
} from '@mui/material';

const isValidHttpUrl = (string) => {
  try {
    return new URL(string);
  } catch (_) {
    return false;
  }
};

function ProfilePictureForm({ profilePictureUrl, setProfilePictureUrl, handlePictureSubmit }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    if (isValidHttpUrl(profilePictureUrl)) {
      await handlePictureSubmit();
    } else {
      setErrorMessage('URL is not in valid format.');
    }
  };

  return (
    <Stack alignItems="flex-start">
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Update profile picture
      </Typography>
      <TextField
        variant="filled"
        label="Profile picture URL"
        helperText="Must be a valid URL including https://, etc."
        value={profilePictureUrl}
        onChange={(event) => setProfilePictureUrl(event.target.value)}
        sx={{ width: '100%' }}
      />
      { errorMessage
        && <Alert size="small" severity="error" sx={{ width: '100%' }}>{errorMessage}</Alert>}
      <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: 2 }}>
        Update
      </Button>
    </Stack>
  );
}

export default ProfilePictureForm;

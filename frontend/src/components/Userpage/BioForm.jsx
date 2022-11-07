import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
} from '@mui/material';

function BioForm({
  bio, setBio, handleBioSubmit,
}) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await handleBioSubmit();
    } catch (error) {
      setErrorMessage('Error setting new bio.');
    }
  };

  return (
    <Stack alignItems="flex-start">
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Update bio
      </Typography>
      <TextField
        variant="filled"
        label="Bio"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
        sx={{ width: '100%' }}
        multiline
        rows={5}
        inputProps={{ maxLength: 1000 }}
        helperText="Maximum 1,000 characters"
      />
      { errorMessage
        && <Alert size="small" severity="error" sx={{ width: '100%' }}>{errorMessage}</Alert>}
      <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: 2 }}>
        Update
      </Button>
    </Stack>
  );
}

export default BioForm;

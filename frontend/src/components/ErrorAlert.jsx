import { Alert, AlertTitle } from '@mui/material';

function ErrorAlert({ errorMessage }) {
  if (errorMessage) {
    return (
      <Alert severity="error" sx={{ width: '100%', marginBottom: 2, marginTop: 2 }}>
        <AlertTitle>Error</AlertTitle>
        { errorMessage }
      </Alert>
    );
  }
}

export default ErrorAlert;

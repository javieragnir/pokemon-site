import { Alert, AlertTitle } from '@mui/material';

function ErrorAlert({ errorMessage }) {
  if (errorMessage) {
    return (
      <Alert severity="error" sx={{ width: '100%' }}>
        <AlertTitle>Error</AlertTitle>
        { errorMessage }
      </Alert>
    );
  }
}

export default ErrorAlert;

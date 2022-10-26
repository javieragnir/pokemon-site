import {
  Backdrop,
  CircularProgress,
} from '@mui/material';

function SpinnerOverlay({ open }) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default SpinnerOverlay;

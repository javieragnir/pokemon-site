import {
  Modal,
  Box,
  Typography,
  Fade,
} from '@mui/material';
import defaultModalStyle from '../styles/defaultModalStyle';
import SignUpButtonGroup from './SignUpButtonGroup';

const style = {
  ...defaultModalStyle,
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

function SignUpModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography><strong>Hi! Please sign in to use this feature.</strong></Typography>
          <SignUpButtonGroup />
        </Box>
      </Fade>
    </Modal>
  );
}

export default SignUpModal;

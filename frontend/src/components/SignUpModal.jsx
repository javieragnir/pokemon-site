import {
  Modal,
  Box,
  Typography,
} from '@mui/material';
import defaultModalStyle from '../styles/defaultModalStyle';

const style = {
  ...defaultModalStyle,
  width: '80%',
};

function SignUpModal(open) {
  return (
    <Modal
      open={open}
      onClose={handlePostClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography>Hi! Please sign in to use this feature.</Typography>
        </Box>
      </Fade>
    </Modal>
  );
}

export default SignUpModal;

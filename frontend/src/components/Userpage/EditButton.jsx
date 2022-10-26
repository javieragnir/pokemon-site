import {
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function EditButton({ size, onClick, sx }) {
  return (
    <IconButton size={size} onClick={onClick} sx={sx}>
      <EditIcon fontSize="inherit" />
    </IconButton>
  );
}

export default EditButton;

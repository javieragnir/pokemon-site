import { Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function LikeButton({ onClick, variant = 'outlined' }) {
  return (
    <Button
      size="small"
      endIcon={<ThumbUpIcon fontSize="small" />}
      variant={variant}
      onClick={onClick}
    >
      Like
    </Button>
  );
}

export default LikeButton;

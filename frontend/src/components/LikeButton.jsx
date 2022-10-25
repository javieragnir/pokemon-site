import { Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function LikeButton() {
  return (
    <Button
      size="small"
      endIcon={<ThumbUpIcon fontSize="small" />}
      variant="outlined"
    >
      Like
    </Button>
  );
}

export default LikeButton;

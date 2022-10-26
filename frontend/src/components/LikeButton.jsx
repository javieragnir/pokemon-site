import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LoadingButton from '@mui/lab/LoadingButton';

function LikeButton({ onClick, variant = 'outlined', loading = false }) {
  return (
    <LoadingButton
      size="small"
      endIcon={<ThumbUpIcon fontSize="small" />}
      variant={variant}
      onClick={onClick}
      loading={loading}
    >
      Like
    </LoadingButton>
  );
}

export default LikeButton;

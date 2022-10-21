import {
  Typography,
  Box,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function PostHeader({ post }) {
  const date = new Date(post.createdAt);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <Link
        component={RouterLink}
        to={`/user/${post.user.username}`}
        color="inherit"
        underline="hover"
        variant="h6"
        sx={{ display: 'inline' }}
      >
        {post.user.username}
      </Link>
      <Typography variant="body2">
        {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
        {' '}
      </Typography>
    </Box>
  );
}

export default PostHeader;

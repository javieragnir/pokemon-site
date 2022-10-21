import {
  Typography,
  Box,
  Paper,
} from '@mui/material';
import PostHeader from './PostHeader';

function Comment({ comment }) {
  return (
    <Box>
      <Paper>
        <Box sx={{
          padding: 2,
          textAlign: 'justify',
          paddingRight: 4,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}
        >
          <Box
            sx={{
              width: '100%',
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <PostHeader post={comment} />
            <Typography>{comment.content}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Comment;

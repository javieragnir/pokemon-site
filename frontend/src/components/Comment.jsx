import { useEffect, useContext } from 'react';
import {
  Typography,
  Box,
  Paper,
} from '@mui/material';
import PostHeader from './PostHeader';
import { UserContext } from '../contexts/UserContext';

function Comment({ comment }) {
  const user = useContext(UserContext);
  useEffect(() => {
    const userLikedPost = (user && trade && trade.users_liked.some(
      (like) => like.username === user.username,
    ));

    setUserLiked(userLikedPost);
  }, []);

  useEffect(() => {
    setLikeVariant(userLiked ? 'contained' : 'outlined');
  }, [userLiked]);

  const handleLike = async () => {
    setLoading(true);
    if (user && !userLiked) {
      try {
        const response = await tradeService.likeTrade(trade.id);
        setUserLiked(!userLiked);
        setLikes(likes + 1);
        setLoading(false);
        return response;
      } catch (error) {
        console.log(error);
      }
    } else if (user && userLiked) {
      try {
        const response = await tradeService.unlikeTrade(trade.id);
        setUserLiked(!userLiked);
        setLikes(likes - 1);
        setLoading(false);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
    return null;
  };

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

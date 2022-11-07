import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Paper,
  Stack,
  Button,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PostHeader from './PostHeader';
import { UserContext } from '../contexts/UserContext';
import commentService from '../services/comments';
import ErrorAlert from './ErrorAlert';

function Comment({ comment, handleDelete }) {
  const [likes, setLikes] = useState(comment.users_liked.length);
  const [likeVariant, setLikeVariant] = useState('outlined');
  const [userLiked, setUserLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const user = useContext(UserContext);
  const navigate = useNavigate();
  const isLoggedUser = user && user.username === comment.user.username;

  useEffect(() => {
    const userLikedPost = (user && comment.users_liked.some(
      (like) => like.username === user.username,
    ));

    setUserLiked(userLikedPost);
  }, []);

  useEffect(() => {
    setLikeVariant(userLiked ? 'contained' : 'outlined');
  }, [userLiked]);

  const handleLike = async () => {
    setLoading(true);
    if (!user) {
      navigate('/login');
    } else if (user && !userLiked) {
      try {
        const response = await commentService.likeComment(comment.id);
        setUserLiked(!userLiked);
        setLikes(likes + 1);
        setErrorMessage('');
        setLoading(false);
        return response;
      } catch (error) {
        setErrorMessage(error.response.data.error);
      }
    } else if (user && userLiked) {
      try {
        const response = await commentService.unlikeComment(comment.id);
        setUserLiked(!userLiked);
        setLikes(likes - 1);
        setErrorMessage('');
        setLoading(false);
        return response;
      } catch (error) {
        setErrorMessage(error.response.data.error);
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
          <Stack spacing={2} sx={{ width: '100%' }}>
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
              <ErrorAlert errorMessage={errorMessage} />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  flexDirection: 'row',
                  gap: 2,
                  alignItems: 'baseline',
                  width: 'max-content',
                }}
              >
                <LoadingButton
                  variant={likeVariant}
                  loading={loading}
                  onClick={handleLike}
                >
                  Like
                </LoadingButton>
                <Typography variant="body2"><strong>{`${likes}`}</strong></Typography>
              </Box>
              <Box sx={{ marginLeft: 'auto' }}>
                {isLoggedUser
                    && (
                      <Button
                        variant="text"
                        color="error"
                        size="small"
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    )}
              </Box>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default Comment;

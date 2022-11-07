import { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Button,
  Link,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { UserContext } from '../contexts/UserContext';
import PostHeader from './PostHeader';
import LikeButton from './LikeButton';
import tradeService from '../services/trade';
import ErrorAlert from './ErrorAlert';

function Trade({ trade, handleDelete }) {
  const [likes, setLikes] = useState(trade.users_liked.length);
  const [likeVariant, setLikeVariant] = useState('outlined');
  const [userLiked, setUserLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const user = useContext(UserContext);
  const navigate = useNavigate();

  const showDelete = user && user.username === trade.user.username;

  // check if user liked post
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
    if (!user) {
      navigate('/login');
    } else if (user && !userLiked) {
      try {
        const response = await tradeService.likeTrade(trade.id);
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
        const response = await tradeService.unlikeTrade(trade.id);
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
          <Box sx={{
            boxSizing: 'border-box', height: 'max-content', width: 120, flexShrink: 0,
          }}
          >
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
              <Typography variant="overline">Offering</Typography>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${trade.offered.id}.png`} alt={trade.pokemonOffered} />
              <Typography variant="overline">{trade.offered.name}</Typography>
            </Paper>
          </Box>
          <SwapHorizIcon />
          <Box sx={{
            boxSizing: 'border-box', height: 'max-content', width: 120, flexShrink: 0,
          }}
          >
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
              <Typography variant="overline">Requesting</Typography>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${trade.requested.id}.png`} alt={trade.pokemonRequested} />
              <Typography variant="overline">{trade.requested.name}</Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              width: '100%',
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <PostHeader post={trade} />
            <Typography sx={{ flexGrow: 1 }}>{trade.content}</Typography>
            <ErrorAlert errorMessage={errorMessage} />
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                width: '100%',
                alignItems: 'baseline',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  flexDirection: 'row',
                  gap: 2,
                  alignItems: 'baseline',
                  width: 'max-content',
                }}
              >
                <LikeButton
                  variant={likeVariant}
                  onClick={handleLike}
                  loading={loading}
                />
                <Typography variant="body2"><strong>{`${likes}`}</strong></Typography>
              </Box>
              <Link
                component={RouterLink}
                to={`/trade/${trade.id}`}
                color="inherit"
                size="small"
              >
                {`Comments (${trade.trade_comments.length})`}
              </Link>
              <Box sx={{ marginLeft: 'auto' }}>
                {showDelete
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
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Trade;

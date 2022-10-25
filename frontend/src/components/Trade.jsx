import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

function Trade({ trade, handleDelete }) {
  const user = useContext(UserContext);

  const showDelete = user && user.username === trade.user.username;

  // check if user liked post
  const userLikedPost = (user && trade && trade.users_liked.some(
    (like) => like.username === user.username,
  ));

  const likeVariant = userLikedPost ? 'contained' : 'outlined';

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
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  alignItems: 'baseline',
                }}
              >
                <LikeButton
                  variant={likeVariant}
                />
                <Typography variant="body2"><strong>{`${trade.users_liked.length}`}</strong></Typography>
              </Box>
              <Link
                component={RouterLink}
                to={`/trade/${trade.id}`}
                color="inherit"
                size="small"
              >
                {`Comments (${trade.trade_comments.length})`}
              </Link>

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
      </Paper>
    </Box>
  );
}

export default Trade;

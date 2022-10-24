import { useContext } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { UserContext } from '../contexts/UserContext';
import PostHeader from './PostHeader';

function Trade({ trade, handleDelete }) {
  const user = useContext(UserContext);

  const showDelete = user && user.username === trade.user.username;

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
              }}
            >
              <Box>
                <Typography>Likes: 1</Typography>
                <Button size="small">
                  Like
                </Button>
              </Box>
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

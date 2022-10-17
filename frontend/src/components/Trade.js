import {
  Box,
  Paper,
  Typography,
  Link,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Trade = ({ trade }) => {
  const date = new Date(trade.createdAt)
  return (
      <Box>
        <Paper sx={{
          padding: 2,
          textAlign: 'justify',
          paddingRight: 4,
          display: 'flex',
          gap: 2,
          alignItems: 'center'
        }}
        >     
          <Box sx={{ boxSizing: 'border-box', height: 'max-content', width: 120, flexShrink: 0 }}>
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
              <Typography variant="overline">Offering</Typography>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${trade.offeredId}.png`} alt={trade.pokemonOffered} />
              <Typography variant="overline">{trade.offered.name}</Typography>
            </Paper>
          </Box>
          <SwapHorizIcon/>
          <Box sx={{ boxSizing: 'border-box', height: 'max-content', width: 120, flexShrink: 0 }}>
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
              <Typography variant="overline">Requesting</Typography>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${trade.requestedId}.png`} alt={trade.pokemonRequested} />
              <Typography variant="overline">{trade.requested.name}</Typography>
            </Paper>
          </Box>
          <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Link
                component={RouterLink}
                to={`/user/${trade.user.username}`}
                color="inherit"
                underline="hover"
                variant="h6"
                sx={{ display: 'inline' }}
              >
                {trade.user.username}
              </Link>
              <Typography variant="body2">{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} </Typography>
            </Box>
            {trade.content}
            </Box>
        </Paper>
      </Box>
  )
}

export default Trade
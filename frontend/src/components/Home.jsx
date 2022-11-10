import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  Paper,
  Grid,
  Box,
} from '@mui/material';
import useApi from '../hooks/useApi';
import PokemonPicker from './PokemonPicker';

function Home() {
  const [pokemonFilter, setPokemonFilter] = useState('');
  const [pokemonToSearch, setPokemonToSearch] = useState('');

  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon-form/${pokemonToSearch}`);

  const navigate = useNavigate();

  const setPokemon = () => {
    if (pokemonFilter) {
      setPokemonToSearch(pokemonFilter.name);
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        paddingTop: 2,
        paddingBottom: 2,
        margin: 0,
        backgroundColor: '#001845',
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              borderRadius: 4,
              display: 'flex',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h2"
                sx={{ width: 'max-content', display: 'inline', marginRight: 2 }}
              >
                <strong>Welcome to Pokemon Trades.</strong>
              </Typography>
              <Typography
                variant="h5"
              >
                <strong>The place to find Pokemon.</strong>
              </Typography>
            </Box>
            <Box>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                alt="pokeball"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            This is a website for posting and finding Pokemon to trade with other players.
            Trades can be found by clicking on the &quot;trades&quot; tab above. Posting new
            trades, posting new comments, and liking content requires sign-in.
          </Typography>
          <Typography variant="body1">
            Be nice, and have fun!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ boxSizing: 'border-box', width: 90 }}
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              sx={{ boxSizing: 'border-box', width: 90 }}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <PokemonPicker
            setFunction={setPokemonFilter}
            sx={{ width: 300 }}
          />
          <Button variant="contained" onClick={setPokemon}>
            Search
          </Button>
        </Grid>
        {error
          && (
          <Grid item xs={12}>
            <Typography>Error!</Typography>
          </Grid>
          )}
        {!isLoading && pokemon && pokemon.sprites
          && (
          <Grid item xs={12}>
            <Paper sx={{ padding: 2, width: 'max-content' }}>
              <img src={pokemon.sprites.front_default} alt={pokemon.pokemon.name} />
            </Paper>
          </Grid>
          )}
      </Grid>
    </Container>
  );
}

export default Home;

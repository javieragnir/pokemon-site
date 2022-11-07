import { useState } from 'react';
import {
  Container,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import useApi from '../hooks/useApi';
import PokemonPicker from './PokemonPicker';

function Home() {
  const [pokemonFilter, setPokemonFilter] = useState('');
  const [pokemonToSearch, setPokemonToSearch] = useState('');

  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon-form/${pokemonToSearch}`);

  const setPokemon = () => {
    if (pokemonFilter) {
      setPokemonToSearch(pokemonFilter.name);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Pokemon Trades
          </Typography>
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

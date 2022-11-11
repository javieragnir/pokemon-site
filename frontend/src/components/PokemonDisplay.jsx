import { useState } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import PokemonPicker from './PokemonPicker';
import useApi from '../hooks/useApi';

function PokemonDisplay() {
  const [pokemonFilter, setPokemonFilter] = useState('');
  const [pokemonToSearch, setPokemonToSearch] = useState('');

  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon-form/${pokemonToSearch}`);

  const setPokemon = () => {
    if (pokemonFilter) {
      setPokemonToSearch(pokemonFilter.name);
    }
  };

  return (
    <Grid container>
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
  );
}

export default PokemonDisplay;

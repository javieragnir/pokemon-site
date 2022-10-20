import { Autocomplete, TextField } from '@mui/material';
import pokemonList from '../data/pokemonList';

// provide a setFunction to onChange to make controlled component

function PokemonPicker({ label = 'Choose a pokemon', setFunction, sx }) {
  // hard coded to match number of pokemon entries from API plus some
  // const { data: allPokemon, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/?limit=${1160}`)

  // const options = isLoading ? [] : allPokemon.results

  const onChange = (event, value) => {
    if (value) {
      setFunction(value);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="pokemonFilter"
      sx={sx}
      options={pokemonList}
      autoHighlight
      getOptionLabel={(option) => option.name[0].toUpperCase() + option.name.slice(1).toLowerCase()}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
        />
      )}
    />
  );
}

export default PokemonPicker;

import useApi from '../hooks/useApi'
import { Typography, Autocomplete, TextField } from '@mui/material'

// provide an onChange prop

const PokemonPicker = ({onChange}) => {
  // hard coded to match number of pokemon entries from API plus some
  const { data: allPokemon, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/?limit=${1160}`)

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Autocomplete
      disablePortal
      id="pokemonFilter"
      sx={{ width: 300 }}
      options={allPokemon.results}
      autoHighlight
      getOptionLabel={(option) => option.name[0].toUpperCase() + option.name.slice(1).toLowerCase()}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a pokemon"
        />
      )}
    />
  )
}

export default PokemonPicker
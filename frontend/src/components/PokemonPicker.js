import useApi from '../hooks/useApi'
import { Autocomplete, TextField } from '@mui/material'

// provide a setFunction to onChange to make controlled component

const PokemonPicker = ({setFunction, sx}) => {
  // hard coded to match number of pokemon entries from API plus some
  const { data: allPokemon, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/?limit=${1160}`)
  
  const options = isLoading ? [] : allPokemon.results

  const onChange = (event, value) => {
    if (value) {
      setFunction(value.name)
    }
  }

  return (
    <Autocomplete
      disablePortal
      id="pokemonFilter"
      sx={sx}
      options={options}
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
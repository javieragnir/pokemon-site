import { useState } from 'react'
import useApi from '../hooks/useApi'

import {
  Container,
  Button,
  Typography,
  Paper,
  Autocomplete,
  TextField,
} from '@mui/material'

const Home = () => {
  const [pokemonFilter, setPokemonFilter] = useState('')
  const [pokemonToSearch, setPokemonToSearch] = useState('')

  const { data: allPokemon, isLoading: listLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/?limit=${2000}`)
  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)

  if (listLoading) {
    return <Typography>Loading...</Typography>
  }

  const pokemonList = allPokemon.results

  const setPokemon = () => {
    if (pokemonFilter) {
      setPokemonToSearch(pokemonFilter)
    }
  }

  const changeFilter = (event, value) => {
    if (value) {
      setPokemonFilter(value.name)
    }
  }

  return (
    <Container>
      <Typography variant="h2">
        Home
      </Typography>
      <Typography variant="body1">
        Work in progress!
      </Typography>
      <Autocomplete
        disablePortal
        id="pokemonFilter"
        sx={{ width: 300 }}
        options={pokemonList}
        autoHighlight
        getOptionLabel={(option) => option.name[0].toUpperCase() + option.name.slice(1).toLowerCase()}
        onChange={changeFilter}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a pokemon"
          />
        )}
      />
      <Button variant="contained" onClick={setPokemon}>
        Search
      </Button>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>Error!</Typography>}
      {!isLoading && pokemon && pokemon.sprites &&
        <Paper>
          <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
        </Paper>
      }
    </Container>
  )
}

export default Home
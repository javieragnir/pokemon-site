import { useState } from 'react'
import useApi from '../hooks/useApi'

import {
  Container,
  Button,
  Typography,
  Paper,
  Autocomplete,
  TextField,
  Grid
} from '@mui/material'

const Home = () => {
  const [pokemonFilter, setPokemonFilter] = useState('')
  const [pokemonToSearch, setPokemonToSearch] = useState('')

  const { data: allPokemon, isLoading: listLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/?limit=${2000}`)
  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)

  if (listLoading) {
    return <Container><Typography>Loading...</Typography></Container>
  }

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Home
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Work in progress!
          </Typography>
        </Grid>
        <Grid item xs={12}>        
          <Autocomplete
            disablePortal
            id="pokemonFilter"
            sx={{ width: 300 }}
            options={allPokemon.results}
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
        </Grid>
        {error && 
          <Grid item xs={12}>
            <Typography>Error!</Typography>
          </Grid>
        }
        {!isLoading && pokemon && pokemon.sprites &&
          <Grid item xs={12}>
            <Paper>
              <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
            </Paper>
          </Grid>
        }
      </Grid>
    </Container>
  )
}

export default Home
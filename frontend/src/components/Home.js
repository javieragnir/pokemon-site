import { useState } from 'react'
import useApi from '../hooks/useApi'
import PokemonPicker from './PokemonPicker'

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

  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon-form/${pokemonToSearch}`)

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
          <PokemonPicker onChange={changeFilter} />
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
            <Paper sx={{ padding: 2, width: 'max-content' }}>
              <img src={pokemon.sprites.front_default} alt={pokemon.pokemon.name} />
            </Paper>
          </Grid>
        }
      </Grid>
    </Container>
  )
}

export default Home
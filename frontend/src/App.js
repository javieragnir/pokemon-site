import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Paper,
  Autocomplete,
  TextField,
} from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme } from './theme'

import useApi from './hooks/useApi'

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

  console.log('pokemon', pokemon)

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

const About = () => {
  return (
    <Container>
      <Typography variant="h2">
        About
      </Typography>
      <Typography variant="body1">
        This is the about page.
      </Typography>
    </Container>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
      <Container sx={{ bgcolor: 'background' }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>

          <Container sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Paper sx={{
              position: 'fixed',
              bottom: 0,
              width: '50%',
              textAlign: 'center',
              padding: '0.1em'
            }}>
                <Typography><i>Pokemon app, Javier Agnir 2022</i></Typography>
            </Paper>
          </Container>
      </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App;

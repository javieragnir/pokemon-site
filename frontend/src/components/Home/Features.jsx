import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import SkillSection from './Feature';

function Features() {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h3">
        <strong>Features</strong>
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <SkillSection
          iconComponent={<CatchingPokemonIcon />}
          title="Title"
          content="Some words in a sentence. Some words in a sentence. Some words in a sentence."
        />
        <SkillSection
          iconComponent={<CatchingPokemonIcon />}
          title="Title"
          content="Some words in a sentence. Some words in a sentence. Some words in a sentence."
        />
        <SkillSection
          iconComponent={<CatchingPokemonIcon />}
          title="Title"
          content="Some words in a sentence. Some words in a sentence. Some words in a sentence."
        />
      </Box>
    </Container>
  );
}

export default Features;

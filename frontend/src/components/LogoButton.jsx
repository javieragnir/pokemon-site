import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function LogoButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')}>
      <CatchingPokemonIcon sx={{
        marginRight: 0.5,
      }}
      />
      <Typography variant="body2"><strong>POKEMONTRADES</strong></Typography>
    </Button>
  );
}

export default LogoButton;

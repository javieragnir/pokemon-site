import Trade from './Trade'
import {
  Container,
} from '@mui/material';

function TradeView({ trade }) {
  return (
    <Container>
      <Trade trade={trade} />
      <Typography>Placeholder stuff!</Typography>
    </Container>
  );
}

export default TradeView;

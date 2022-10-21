import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trade from './Trade'
import {
  Container,
  Typography,
  Backdrop,
  CircularProgress
} from '@mui/material';
import tradeService from '../services/trade'

function TradePage() {
  const [trade, setTrade] = useState(null)
  const [loadingOpen, setLoadingOpen] = useState(true);
  const { tradeId } = useParams();

  const handleLoadingOpen = () => setLoadingOpen(true);
  const handleLoadingClose = () => setLoadingOpen(false);

  useEffect(() => {
    handleLoadingOpen()
    tradeService.getByTradeId(tradeId)
      .then((foundTrade) => {
        setTrade(foundTrade);
        return foundTrade;
      })
      .catch((error) => console.log(error))
      .finally(() => handleLoadingClose());
  }, []);

    // View while loading
    if (!trade) {
      if (loadingOpen) {
        return (
          <Container>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
              open={loadingOpen}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Container>
        );
      }
  
      // View if no user is found.
      return (
        <Container>
          <Typography>User not found.</Typography>
        </Container>
      );
    }

  return (
    <Container>
      <Trade trade={trade} />
      <Typography variant="h4">Comments</Typography>
    </Container>
  );
}

export default TradePage;

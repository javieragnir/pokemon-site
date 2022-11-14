import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import Feature from './Feature';

function Features() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Typography variant="h3" sx={{ paddingBottom: 3 }}>
        <strong>Features</strong>
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: 4,
      }}
      >
        <Feature
          iconComponent={<ConnectWithoutContactIcon fontSize="large" />}
          title="Connect"
          content="Search through trades posted by other users to find exactly what you want."
        />
        <Feature
          iconComponent={<ChatBubbleIcon fontSize="large" />}
          title="Interact"
          content="Comment and like other users' posts to show what you think."
        />
        <Feature
          iconComponent={<PersonIcon fontSize="large" />}
          title="Personalize"
          content="Customize your personal page with a profile picture and bio!"
        />
      </Box>
    </Container>
  );
}

export default Features;

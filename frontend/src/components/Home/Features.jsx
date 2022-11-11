import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import SkillSection from './Feature';

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
        <SkillSection
          iconComponent={<ConnectWithoutContactIcon fontSize="large" />}
          title="Title"
          content="Some words in a sentence. Some words in a sentence. Some words in a sentence."
        />
        <SkillSection
          iconComponent={<ChatBubbleIcon fontSize="large" />}
          title="Title"
          content="Some words in a sentence. Some words in a sentence. Some words in a sentence."
        />
        <SkillSection
          iconComponent={<PersonIcon fontSize="large" />}
          title="Title"
          content="Some words in a sentence. Some words in a sentence. Some words in a sentence."
        />
      </Box>
    </Container>
  );
}

export default Features;

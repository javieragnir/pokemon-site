import {
  Box,
  Typography,
  Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 3,
      paddingBottom: 3,
    }}
    >
      <Box sx={{
        width: '50%',
        textAlign: 'center',
        padding: '0.1em',
      }}
      >
        <Typography variant="body2"><strong>Created by Javier Agnir</strong></Typography>
        <Box sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
        }}
        >
          <Link href="https://github.com/javieragnir/pokemon-site">
            <GitHubIcon
              sx={{ color: 'white' }}
              fontSize="large"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/javier-agnir/">
            <LinkedInIcon
              sx={{ color: 'white' }}
              fontSize="large"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

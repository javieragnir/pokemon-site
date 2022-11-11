import {
  Box,
  Typography,
} from '@mui/material';

function SkillSection({ iconComponent, title, content }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {iconComponent}
      <Typography variant="h4">
        {title}
      </Typography>
      <Typography>
        {content}
      </Typography>

    </Box>
  );
}

export default SkillSection;

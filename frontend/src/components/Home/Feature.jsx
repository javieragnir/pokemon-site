import {
  Box,
  Typography,
} from '@mui/material';

function SkillSection({ iconComponent, title, content }) {
  return (
    <Box
      sx={{
        flex: '1 1 0',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 2,
      }}
    >
      {iconComponent}
      <Typography variant="h4">
        <strong>{title}</strong>
      </Typography>
      <Typography>
        {content}
      </Typography>

    </Box>
  );
}

export default SkillSection;

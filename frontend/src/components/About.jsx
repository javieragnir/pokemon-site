import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h2">
        <strong>About</strong>
      </Typography>
      <Typography variant="body1">
        This is a website built by me, Javier Agnir. Once you are signed in, you can
        add trades and make comments on existing trades, as well as like posts. I
        hope you enjoy exploring the site!
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        If you want to reach out, you can contact me at
        {' '}
        <a href="mailto:jjr.agnir@gmail.com">jjr.agnir@gmail.com</a>
        {' '}
        or visit my personal site.
      </Typography>
    </Container>
  );
}

export default About;

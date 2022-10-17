import { Container, Typography, Grid, Box, Paper } from '@mui/material'

const UserPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper>
            <Typography>Lololololol</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography>
              lololololololololol
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UserPage
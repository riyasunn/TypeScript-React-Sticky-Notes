import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';



function App() {
  return (
    <Container>
      <Typography textAlign='center' variant='h3' mt={3} mb={5}>
        Sticky Notes
      </Typography>
      <Button>Add note...</Button>
      <Button>Generate chart</Button>

      <Grid>

      </Grid>
    </Container>
  );
}

export default App;

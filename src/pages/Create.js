import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

export default function Create() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
        Create New Note
        </Typography>

        <Button 
          type="submit"
          color="secondary"
          variant="contained"
          onClick={ () => console.log('you clicked me!') }
        >
          Submit
        </Button>

        {/* Icons */}
        <br />
        <AcUnitOutlinedIcon />
        <AcUnitOutlinedIcon color="secondary" />

        {/* 
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
        <hr />
        <ButtonGroup color="secondary" variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        */}
      </Container>
    </React.Fragment>
    
      
  )
}

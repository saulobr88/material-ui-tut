import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Notes() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Create New Note
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
      </Box>
    </div>
  )
}

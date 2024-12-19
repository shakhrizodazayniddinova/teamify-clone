import React from 'react';
import { Box, Typography } from '@mui/material';

export default function title({children}) {
  return (
    <Box>
        <Typography variant='h5'>{children}</Typography>
    </Box>
  )
}

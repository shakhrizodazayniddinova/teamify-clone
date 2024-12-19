import React from 'react';
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Layout>
        <Typography variant='h6' color='error' sx={{marginInline: 'auto'}}>Page that doesn't exist</Typography>
    </Layout>
  )
}

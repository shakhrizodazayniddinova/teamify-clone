import React from 'react';
import { Box } from '@mui/material';
import TeamsChart from './Charts/teamschart';
import Employees from './Charts/employeeschart';
import ProjectChart from './Charts/projectchart';

export default function dashboard() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '40px', paddingBottom: 6}}>
      <Box sx={{display: 'flex', alignItems: 'center', gap: '25px'}}>
        <TeamsChart/>
        <Employees/>
      </Box>

      <Box sx={{width: '100%'}}>
        <ProjectChart/>
      </Box>
    </Box>
  )
}

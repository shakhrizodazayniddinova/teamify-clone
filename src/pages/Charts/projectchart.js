"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { useThemeMode } from "@/context/themeContext";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ProjectChart() {
  const { mode } = useThemeMode();

  const labels = ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022']; 
  
  const data = {
      labels: labels,
  
      datasets: [
          {
              label: 'Archived',
              data: labels.map(() => faker.number.int({ min: 4, max: 8 })),
              backgroundColor: '#FB896B',
              borderColor: '#FB896B',
              tension: 0.3,
              pointStyle: 'circle',
          },
          {
              label: 'Target',
              data: labels.map(() => faker.number.int({ min: 4, max: 8 })),
              backgroundColor: '#6956E5',
              borderColor: '#6956E5',
              tension: 0.3,
              pointStyle: 'circle',
          }
      ]
  }
  
  const option = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: mode === "dark" ? "white" : "gray", 
          },
        },
      },
      scales: {
          y: {
              beginAtZero: true,
              max: 12,

              ticks: {
                color: mode === "dark" ? "white" : "gray", 
              },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: mode === 'dark' ? 'white' : 'gray',
            }
          }
      },
  };

  return (
    <Box sx={{width: '100%', height: 'auto', bgcolor: mode === 'dark' ? '#4d4d4d' : '#fff', p: 3, borderRadius: 2, boxShadow: '0px 4px 39px 9px #51459F17'}}>
      {/* Title */}
      <Typography variant="h6" fontWeight="bold" textAlign="left" mb={2}>
        Project Deliveries
      </Typography>

      {/* Chart */}
      <Line data={data} options={option}/>
    </Box>
  )
}

"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Bar } from 'react-chartjs-2';
import { useThemeMode } from "@/context/themeContext";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function teamschart() {
  const { mode } = useThemeMode();

  // Data and Colors
  const teams = [
    { label: "a", value: 1, color: "#FBCB81", name: "Marketing" },
    { label: "b", value: 5, color: "#FF8C7E", name: "HR" },
    { label: "c", value: 3, color: "#6EE7F3", name: "Developers" },
    { label: "d", value: 10, color: "#8C72F6", name: "Design" },
  ];

  // Chart.js datas
  const data = {
    labels: teams.map((team) => team.label),
    
    datasets: [
      {
        label: 'Teams Strength',
        data: teams.map((team) => team.value),
        backgroundColor: teams.map((team) => team.color),
        borderRadius: 5,
      },
    ],
  };

  // Chart configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: mode === "dark" ? "white" : "gray", 
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: mode === "dark" ? "white" : "gray", 
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: mode === "dark" ? "white" : "gray", 
        },
      },
    },
  };

  return (
    <Box sx={{width: '360px', height: '330px', bgcolor: mode === 'dark' ? '#4d4d4d' : '#fff', p: 3, borderRadius: 2, maxWidth: 400, textAlign: "center", border: mode === 'dark' ? 'none' : '1px solid #E6E8EC'}}>
      {/* Title */}
      <Typography variant="h6" fontWeight="bold" textAlign="left" mb={2}>
        Teams Strength
      </Typography>

      {/* Chart */}
      <Bar data={data} options={options} />

      {/* Legend */}
      <Grid container columnGap={2} rowGap={2} mt={3} ml={4}>
        {teams.map((team) => (
          <Grid item key={team.label} display="flex" alignItems="center" gap={1} xs={12} sm={6} md={5}>
            <Box sx={{ width: 16, height: 16, backgroundColor: team.color, borderRadius: "3px" }}></Box>
            <Typography variant="body2" sx={{color: mode === "dark" ? "white" : "gray"}}>
              {team.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
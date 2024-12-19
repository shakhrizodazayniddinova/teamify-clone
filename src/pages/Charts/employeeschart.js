"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useThemeMode } from "@/context/themeContext";

const employeesData = [
    {color: '6956E5', label: 'Inactive', num: '254'},
    {color: 'FB896B', label: 'Active', num: '3000'},
    {color: 'F8C07F', label: 'Total', num: '3254'},
]

export default function Employees() {
  const { mode } = useThemeMode();
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '36px', width: '360px', height: '330px', bgcolor: mode === 'dark' ? '#4d4d4d' : '#fff', p: 3, borderRadius: 2, maxWidth: 400, textAlign: "center", border: mode === 'dark' ? 'none' : '1px solid #E6E8EC'}}>
      {/* Title */}
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h6" fontWeight="bold" textAlign="left">
            Employees
        </Typography>
        <Typography variant="body2" sx={{color: mode === 'dark' ? '#c0c0c0' : "#787486"}}>
            Aug 25-Sept 25
        </Typography>
      </Box>

      <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{width: '62px', display: 'flex', flexDirection: 'column', gap: '36px'}}>
            {employeesData.map((item, index) => (
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}} key={index}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <span style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: `#${item.color}`}}></span>
                        <Typography>{item.label}</Typography>
                    </Box>
                    <Typography>{item.num}</Typography>
                </Box>
            ))}
        </Box>
        <Box>
            <img src="/employeesChartImg.png" />
        </Box>
      </Box>
    </Box>
  );
};
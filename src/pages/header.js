"use client"
import React from "react";
import { Box, Typography, Avatar, IconButton, Button } from "@mui/material";
import { useThemeMode } from "@/context/themeContext";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AccountCircle } from "@mui/icons-material";

const Header = () => {
  const { mode, toggleTheme } = useThemeMode();
  
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" pt={'30px'} sx={{backgroundColor: mode === "dark" ? "#121212" : "#ffffff", color: mode === "dark" ? "#ffffff" : "#000000"}}>
      <Box>
        <Typography fontSize={'26px'} fontWeight="bold">
          Good Morning Anima
        </Typography>
        <Typography fontSize={'14px'} color="gray">
          Hope you have a good day
        </Typography>
      </Box>

      {/* O'ng tomondagi icon va avatar */}
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton sx={{color: mode === "dark" && "gray"}}>
          <SearchIcon />
        </IconButton>
        <IconButton sx={{color: mode === "dark" && "gray"}}>
          <NotificationsNoneIcon />
        </IconButton>
        <Button onClick={toggleTheme} sx={{minWidth: '20px'}} >
          {mode === "dark" ? <LightModeIcon sx={{color: '#fff'}}/> : <DarkModeIcon sx={{color: 'gray'}}/>}
        </Button>
        <IconButton sx={{ width: 40, fontSize: 40 }}>
            <AccountCircle fontSize="40px" sx={{color: "#6956E5"}}/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;

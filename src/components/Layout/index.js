import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../pages/header';
import { useThemeMode } from "@/context/themeContext";
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box, CssBaseline } from "@mui/material";
import { sidebarData } from './sidebardata';

export default function index({children}) {
  const router = useRouter();
  const { mode } = useThemeMode();

  return (
    <Box sx={{display: 'flex', width: '100%', height: '100vh'}}>
      <CssBaseline/>

      <Box sx={{flex: 1}}>
        <Box sx={{padding: '44px 30px 0px 30px', bgcolor: mode === 'dark' ? '#0e0e0e' : '#F9F9F9', height: '100vh', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {/* Sidebar Header */}
          <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>
            <img src='/setting.png' alt="logo"/>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6956E5" }}>
              Teamify
            </Typography>
          </Box>

          {/* Menu Items */}
          <List sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px', mt: '20px'}}>
            {sidebarData.map((item) => {
              const isActive = item.path === '/' ? router.pathname === item.path : router.pathname.startsWith(item.path);

              return (
                <Box sx={{width: '100%'}} onClick={() => router.push(item.path)}>
                  <ListItem button key={item.path} sx={{display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', p: 0, height: '45px', 
                    color: isActive ? '#6956E5' : '',
                    
                    "&:hover": { 
                      bgcolor: "transparent", 
                      "& .MuiListItemIcon-root": { color: "#6956E5" }, 
                      "& .MuiTypography-root": { color: "#6956E5" } 
                    }}}>
                    <ListItemIcon sx={{ color: isActive ? '#6956E5' : "gray", minWidth: '24px' }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    {isActive && (
                        <Typography
                          sx={{
                            display: 'block',
                            color: '#6956E5',
                            fontSize: '30px',
                          }}
                        >
                          •
                        </Typography>
                      )}
                  </ListItem>
                </Box>
              )
            })}
          </List>
        </Box>
      </Box>

      <Box sx={{width: 'calc(100% - 291px)', px: '40px', display: 'flex', flexDirection: 'column', gap: '40px', overflowY: 'scroll',}}>
        <header>
          <Header/>
        </header>

        <main style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          {children}
        </main>
      </Box>
    </Box>
  )
}

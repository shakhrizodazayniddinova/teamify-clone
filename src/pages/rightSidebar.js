import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useThemeMode } from "@/context/themeContext";

const topData = [
  {bgColor: 'FFF0E6', label: 'Top 10', title: 'Position in dribbble', description: '20% Increase from Last Week'},
  {bgColor: 'ECEAFE', label: '26', title: 'New employees onboarded', description: '15% Increase from Last Month'},
  {bgColor: 'E5F7FF', label: '500', title: 'New Clients Approached', description: '5% Increase from Last Week'},
];

const noficationData = [
  {img: '/avatar1.png', title: 'Ellie joined team developers', date: '04 April, 2021 | 04:00 PM'},
  {img: '/avatar2.png', title: 'Jenny joined team HR', date: '04 April, 2021 | 04:00 PM'},
  {img: '/avatar3.png', title: 'Adam got employee of the month', date: '03 April, 2021 | 02:00 PM'},
  {img: '/avatar4.png', title: 'Robert joined team design', date: '02 April, 2021 | 02:00 PM'},
  {img: '/avatar5.png', title: 'Jack joined team design', date: '01 April, 2021 | 03:00 PM'},
]

export default function Rightsidebar() {
  const { mode } = useThemeMode();

  return (
    <Box sx={{width: '330px', display: 'flex', flexDirection: 'column', gap: '40px'}}>
      <Box sx={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '18px'}}>
        {topData.map((item, index) => (
          <Box sx={{width: '100%', height: '103px', color: mode === 'dark' && 'black', backgroundColor: `#${item.bgColor}`, borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} key={index}> 
            <Typography variant='h5' fontWeight={'600'}>{item.label}</Typography>
            <Typography variant='body1'>{item.title}</Typography>
            <Typography variant='caption' color='#787486'>{item.description}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '18px'}}>
          <Typography variant='h6'>Notifications</Typography>
          <Button sx={{textTransform: 'none', color: '#6956E5'}}>View All</Button>
        </Box>

        <Box sx={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '16px'}}>
          {noficationData.map((item, index) => (
            <Box key={index} sx={{width: '100%', height: '56px', bgcolor: mode === 'dark' ? '#a3a3a3' : '#F9F9F9', borderRadius: '10px', paddingLeft: '10px', display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer', transition: '0.3s', "&:hover": {transition: '0.3s', boxShadow: '0px 2px 10px 1px #51459F17'}}}>
              <Box sx={{height: '36px'}}>
                <img src={item.img} alt="avatar" />
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <Typography variant='body2' fontSize={'12px'} sx={{color: mode === 'dark' && 'black'}}>{item.title}</Typography>
                <Typography variant='caption' fontSize={'10px'} sx={{color: mode === 'dark' ? '#656a72' : '#708099'}}>{item.date}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

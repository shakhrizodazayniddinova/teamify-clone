import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Card, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import { useThemeMode } from '@/context/themeContext';
import Title from './title';
import { getTeams } from '../../api/api';
import { iconMap } from '@/datas/teamsData/teamsdata';

export default function teams({teamsData}) {
  const router = useRouter();
  const {mode} = useThemeMode();

  console.log(teamsData);
  

  // const [teamsData, setTeamsData] = useState([]);

  // useEffect(() => {
  //   const fetchTeams = async () => {
  //     try {
  //       const res = await getTeams();
  //       setTeamsData(res)
  //     } catch (error) {
  //       console.log("Error fetching teams data:", error);
  //     }
  //   }

  //   fetchTeams();
  // }, []);

  return (
    <Layout>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '50px', width: '100%'}}>
        <Title variant='h5'>Teams</Title>
        
        <Grid container spacing={3}>
          {teamsData.map((item) => (
            <Grid item key={item.path} xs={12} sm={8} md={2}>
              <Card onClick={() => router.push(`/teams/${item.path}`)} 
                sx={{bgcolor: item.bgcolor, height: '200px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px', boxShadow: 'none', borderRadius: '15px', 
                "&:hover":{boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}}>

                <Box sx={{width: '70px', height: '70px', bgcolor: item.iconBg, justifyContent: 'center', display: 'flex', alignItems: 'center', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', borderRadius: '15px'}}>
                  <Typography sx={{fontSize: '25px', height: '30px', color: 'white'}}>
                    {item.icon}
                  </Typography>
                </Box>

                <Typography fontWeight={'500'} color={mode === 'dark' && 'black'}>{item.label}</Typography>
                <Typography fontWeight={'600'} color={mode === 'dark' && 'black'}>{item.usernum}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const res = await getTeams();
  
  return {
    props: { teamsData: res }, 
  };
}
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, List, ListItem, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import totalStudents from '../../totalDatas/total-students';
import totalTeacher from '../../totalDatas/total-teacher';
import totalCourses from '../../totalDatas/total-courses';
import totalRoom from '../../totalDatas/total-room';

export default function Home() {
  const router = useRouter();
  const { team } = router.query;  
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    
    console.log('team:', team);

    if (team === 'total-students') setMembers(totalStudents);
    else if(team === 'total-teacher') setMembers(totalTeacher);
    else if(team === 'total-courses') setMembers(totalCourses);
    else if(team === 'total-room') setMembers(totalRoom);
    else setError(true);
    
  }, [router.isReady, team]);

  return (
    <Layout>
      <Box>
        {error ? (
          <Typography color='error'>No data available for team: {team}</Typography>
        ) : (
          <List sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px'}}>
            {members.map((item, index) => (
              <ListItem key={index} sx={{minWidth: '180px', display: 'flex', alignItems: 'center', gap: '15px', px: 3, py: 1, bgcolor: '#6956E5', color: 'white', borderRadius: '10px'}}>
                <li>{index+1}</li>
                <li>{item.name}</li>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Layout>
  );
}

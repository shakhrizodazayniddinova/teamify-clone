import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Box, List, Typography } from '@mui/material';

export default function Home() {
  const router = useRouter();
  const { team } = router.query;
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (team) {
      import(`./data/${team}`)
        .then((module) => {
          setMembers(module.teamMembers || []);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [team]);

  return (
    <Layout>
      <Box>
        {error ? (
          <Typography color='error'>No data available for team: {team}</Typography>
        ) : (
          <List sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px'}}>
            {members.map((item, index) => (
              <List item sx={{minWidth: '180px', display: 'flex', alignItems: 'center', gap: '15px', px: 3, py: 1, bgcolor: '#6956E5', color: 'white', borderRadius: '10px'}}>
                <li key={index}>{index+1}</li>
                <li key={index}>{item.name}</li>
              </List>
            ))}
          </List>
        )}
      </Box>
    </Layout>
  );
}

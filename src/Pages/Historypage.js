import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HistoryDialog from '../Components/HistoryDialog';
import './Historypage.css';

export default function Historypage() {
  const [open, setOpen] = useState(false);  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={9} md={2.5} position={{xs:"fixed",md:'relative'}}>
          <><Sidebar open={open} setOpen={setOpen} /></>          
        </Grid>
        <Grid item xs={12} md={9.5}>
          <HistoryDialog setOpen={setOpen} />
        </Grid>
      </Grid>
    </Box>   
  )
}

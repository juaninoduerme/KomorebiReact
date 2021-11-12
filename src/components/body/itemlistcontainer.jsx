import * as React from 'react';
import Box from '@mui/material/Box';

//imports propios
import CardVelaSoja from './cardvelasoja';
import CardSpray from './cardspray';
import CardBombonSoja from './cardbombonsoja';
import CardTagSoja from './cardtagsoja';

export default function ItemListContainer() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <CardVelaSoja/>
        <CardSpray/>
        <CardBombonSoja/>
        <CardTagSoja/>
    </Box>
  );
}
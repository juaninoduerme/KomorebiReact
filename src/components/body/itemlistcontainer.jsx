import * as React from 'react';
import Box from '@mui/material/Box';

//imports propios
import CardVelaSoja from './cardvelasoja';
import CardSpray from './cardspray';
import CardBombonSoja from './cardbombonsoja';

export default function ItemListContainer() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <CardVelaSoja/>
        <CardSpray/>
        <CardBombonSoja/>
    </Box>
  );
}
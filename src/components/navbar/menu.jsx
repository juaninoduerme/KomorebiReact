import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function MenuKomorebi() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Todo" />
        <Tab value="two" label="Aromaterapia" />
        <Tab value="three" label="Baños Divertidos" />
        <Tab value="four" label="Higiene" />
      </Tabs>
    </Box>
  );
}



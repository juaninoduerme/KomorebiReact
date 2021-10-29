import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function MenuKomorebi() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}>
        <LinkTab label="Todo" href="#" />
        <LinkTab label="Aromaterapia" href="#" />
        <LinkTab label="Higiene" href="#" />
        <LinkTab label="Baños Divertidos" href="#" />
      </Tabs>
    </Box>
  );
}


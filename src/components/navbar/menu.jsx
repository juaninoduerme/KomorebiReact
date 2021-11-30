import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

//imports propios
import '../../index.css';

export default function MenuKomorebi() {

  return (
    <Box sx={{ width: '100%', textColor: 'secondary', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <Link className="links" to="/">Home</Link>
      <Link className="links" to="/category/1">Aromaterapia</Link>
      <Link className="links" to="/category/2">Baños Divertidos</Link>
      <Link className="links" to="/category/3">Higiene</Link>
    </Box>
  );
}



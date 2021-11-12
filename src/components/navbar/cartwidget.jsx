import * as React from 'react';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {
  return (
    <Box sx={{ width: '100%' }}>
      <ShoppingCartIcon/>
    </Box>
  );
}
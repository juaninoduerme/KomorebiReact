import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {
  return (
    <Box sx={{ width: '100%' }}>
      <Badge badgeContent={17} color="secondary">
        <ShoppingCartIcon/>
      </Badge>
    </Box>
  );
}
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

//imports propios
import { useCart } from '../../contexts/cartcontext';

export default function CartWidget() {

  //context
  const { countItemsCart } = useCart();

  return (
    <Box sx={{ width: '100%' }}>
      <Badge badgeContent={countItemsCart()} color="secondary">
        <Link to={`/cart`}>
          <ShoppingCartIcon/>
        </Link>        
      </Badge>
    </Box>
  );
}
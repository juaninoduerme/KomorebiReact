import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//imports propios
import imagenVela from '../../images/imgVela.jpg'
import ItemCount from './itemcount';

export default function CardVelaSoja() {

  const [stock, setStock] = React.useState(10); 
  const [cartItems, setcartItems] = React.useState(0); 

  const handleAddToCart = (event, orderedItems, stock) => {
    
    if(orderedItems <= stock)
    {
      setStock = stock - orderedItems;
      setcartItems = orderedItems;
    }
  };  

  return (
    <Card sx={{ width: 300, margin: '5%' }}>
      <CardMedia
        component="img"
        alt="Imagen con una vela de soja dentro de un frasco de vidrio trasparente, con lavanda arriba sobre un lienzo."
        height="300"
        image={imagenVela}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vela de Soja Aromaterapia
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <ItemCount stock={stock} initial="1" onAdd={handleAddToCart}/>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>            
            <Button size="small">Info</Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}

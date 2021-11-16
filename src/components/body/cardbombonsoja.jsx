import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//imports propios
import imagenBombon from '../../images/imgBombon.jpg'
import ItemCount from './itemcount';

export default function CardBombonSoja() {

  const [stock, setStock] = React.useState(5); 
  const [initial, setInitial] = React.useState(1);

  return (
    <Card sx={{ width: 300, maxWidth: 300, margin: '5%' }}>
      <CardMedia
        component="img"
        alt="Bombones en formas de flor de cera de soja apoyados entre si sobre un lienzo."
        height="300"
        image={imagenBombon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bombones de Soja Aromaterapia
        </Typography>
      </CardContent>
       <CardActions>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <ItemCount stock={stock} initial={initial}/>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>            
            <Button size="small">Info</Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
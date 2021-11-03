import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//imports propios
import imagenVela from '../../images/imgVela.jpg'

export default function CardVelaSoja() {
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
        <Button size="small">Comprar</Button>
        <Button size="small">Info</Button>
      </CardActions>
    </Card>
  );
}

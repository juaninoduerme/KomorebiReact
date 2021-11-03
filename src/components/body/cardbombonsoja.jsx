import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//imports propios
import imagenBombon from '../../images/imgBombon.jpg'

export default function CardBombonSoja() {
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
        <Button size="small">Comprar</Button>
        <Button size="small">Info</Button>
      </CardActions>
    </Card>
  );
}
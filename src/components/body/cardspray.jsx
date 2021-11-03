import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardSpray() {
  return (
    <Card sx={{ maxWidth: 400, margin: '5%' }}>
      <CardMedia
        component="img"
        alt="Imagen con un frasco tipo spray color ámbar sobre un lienzo."
        height="200"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Spray Aromaterapia
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Info</Button>
      </CardActions>
    </Card>
  );
}
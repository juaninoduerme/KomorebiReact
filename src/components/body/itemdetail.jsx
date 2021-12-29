import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//imports propios
import ItemCount from './itemcount';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

    //hooks
    const [initial, setInitial] = useState(1);

    return (
        <Card sx={{ width: 400, maxWidth: 500, margin: '5%' }}>
            <CardMedia
                component="img"
                alt={producto.alt}
                height="300"
                image={producto.imagen}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    ${producto.precio}
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    {producto.descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <ItemCount initial={initial} producto={producto}/>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Link to="/">Volver</Link>           
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}

export default ItemDetail;
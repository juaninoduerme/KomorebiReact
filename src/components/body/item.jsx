import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//imports propios
import ItemCount from './itemcount';

const Item = ({id, nombre, imagen, alt, precio, descripcion, stock}) => {

    const [initial, setInitial] = useState(1);

    return (
        <Card sx={{ width: 400, maxWidth: 500, margin: '5%' }}>
            <CardMedia
                component="img"
                alt={alt}
                height="300"
                image={imagen}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    ${precio}
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <ItemCount stock={stock} initial={initial}/>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>            
                        <Button size="small">+ Info</Button>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}

export default Item;
import * as React from 'react';
import Box from '@mui/material/Box';

//imports propios
import Item from './item';

const ItemList = ({products}) => {

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {products.map(product => {
                return(
                    <Item
                        id={product.id}
                        nombre={product.nombre}
                        imagen={product.imagen}
                        alt={product.alt}
                        precio={product.precio}
                        descripcion={product.descripcion}
                        stock={product.stock}
                    />)
                ;
            })}
        </Box>
    );
}

export default ItemList;
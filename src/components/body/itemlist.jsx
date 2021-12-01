import * as React from 'react';
import Box from '@mui/material/Box';

//imports propios
import Item from './item';

const ItemList = ({products}) => {

    return (
        <Box sx={{ width: '80%', display: 'flex', justifyContent: 'center'}}>
            {products.map(product => {
                return(
                    <Item
                        key={product.id}
                        producto={product}
                    />)
                ;
            })}
        </Box>
    );
}

export default ItemList;
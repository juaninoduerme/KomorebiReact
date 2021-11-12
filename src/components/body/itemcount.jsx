import * as React from 'react';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function ItemCount(stock, initial, onAdd) {

    const [orderedItems, setOrderedItems] = React.useState(1);

    const handleAddToCart = (event, orderedItems, stock) => {    
        if(orderedItems <= stock)
        {
          stock = stock - orderedItems;
        }
    };

    const handleAdd = (event, initial, stock) => {
        console.log("Agrega");
        if(orderedItems > stock)
        {            
            setOrderedItems = initial + 1;
        }
    };
      
    const handleRemove = (event, initial, stock) => {        
        if(orderedItems < stock && orderedItems !== 1)
        {            
            setOrderedItems = initial - 1;
        }
        console.log("Resta");
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ height: '30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <RemoveCircleIcon onClick={handleRemove}/>
                <Input defaultValue="1" value={orderedItems} inputProps={orderedItems}></Input>      
                <AddCircleIcon onClick={handleAdd}/>        
            </Box>
            <Button size="small" onAdd={handleAddToCart}>Añadir al Carrito</Button>
        </Box>
    );
}
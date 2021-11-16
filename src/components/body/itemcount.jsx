import * as React from 'react';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial}) => {

    const [cartItems, setCartItems] = React.useState(initial);

    const AddItem = () => {    

        const newCartItems = cartItems + 1;

        console.log(newCartItems);

        if(newCartItems <= stock)
        {
            setCartItems(newCartItems);
        }
    };
      
    const RemoveItem = () => {   

        const newCartItems = cartItems - 1;

        if(newCartItems >= initial)
        {            
            setCartItems(newCartItems);
        }
    };

    const onAdd = () => {
        if(cartItems === 1)
        {
            alert(`Se agregó ${cartItems} producto al carrito.`);
        }
        else
        {
            alert(`Se agregó ${cartItems} productos al carrito.`);
        }
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ height: '30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <RemoveCircleIcon onClick={RemoveItem}/>
                <Input value={cartItems}></Input>
                <AddCircleIcon onClick={AddItem}/>        
            </Box>
            <Button size="small" onClick={onAdd}>Añadir al Carrito</Button>
        </Box>
    );
}

export default ItemCount;
import { useState } from 'react';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import swal from '@sweetalert/with-react';

//imports propiois
import { useCart } from '../../contexts/cartcontext';
import { Container } from '@mui/material';

const ItemCount = ({initial, producto}) => {

    const [stockDinamico, setStockDinamico] = useState(producto.stock);
    const [countItems, setCountItems] = useState(initial);
    
    const {cart, setCart, isInCart, addItemInCart, removeItemInCart, clearCart, countItemsInCart} = useCart();

    const AddItem = () => {    

        const newCountItems = countItems + 1;

        if(newCountItems <= stockDinamico)
        {
            setCountItems(newCountItems);
        }
    };
      
    const RemoveItem = () => {   

        const newCountItems = countItems - 1;

        if(newCountItems >= initial)
        {            
            setCountItems(newCountItems);
        }
    };

    const onAdd = () => {

        if(countItems === 1)
        {
            swal({
                icon: 'success',
                text: `Se agregó ${countItems} unidad del producto ${producto.nombre} al carrito.`,
                buttons: true,
            });
            addItemInCart({item: producto, quantity: countItems});
            setStockDinamico(stockDinamico - countItems);
            setCountItems(initial);
        }
        else
        {
            swal({
                icon: 'success',
                text: `Se agregó ${countItems} unidades del producto ${producto.nombre} al carrito.`,
                buttons: true,
            });
            addItemInCart({item: producto, quantity: countItems});            
            setStockDinamico(stockDinamico - countItems);
            setCountItems(initial);            
        }     
    };

    return (
        <Container cart={cart}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{ height: '30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <RemoveCircleIcon onClick={RemoveItem}/>
                    <Input value={countItems}></Input>
                    <AddCircleIcon onClick={AddItem}/>        
                </Box>
                <Typography gutterBottom variant="caption" component="div">Stock: {stockDinamico}</Typography>
                <Button size="small" onClick={onAdd}>Añadir al Carrito</Button>
                <Link to="/cart">Ir al Carrito</Link>
            </Box>
        </Container>
    );
}

export default ItemCount;
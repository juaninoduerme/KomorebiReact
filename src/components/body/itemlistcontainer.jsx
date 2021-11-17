import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

//imports propios
import getProducts from '../../services/promesaitems'
import ItemList from './itemlist';

export default function ItemListContainer() {  

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts 
    .then(response => setProducts(response))
    .catch(error => console.log(error))
  }, []);  

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ItemList products={products}/>
    </Box>
  );
}
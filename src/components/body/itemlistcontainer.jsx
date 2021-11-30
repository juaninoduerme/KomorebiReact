import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

//imports propios
import getProducts from '../../services/promesaitems'
import ItemList from './itemlist';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {  

  const {id} = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts 
    .then((response) => {
      (id === undefined) ? setProducts(response) :
      setProducts(response.filter((prod) => prod.categoria == parseInt(id)))})
  }, [id]);  

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <ItemList products={products}/>
    </Box>
  );
}
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

//imports propios
import ItemDetail from './itemdetail';
import getProducts from '../../services/promesaitems';

export default function ItemDetailContainer() {  

  const {id} = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProducts 
    .then((response) => {setItem(response.find((prod) => prod.id == parseInt(id)))})
  }, [id]);  

  console.log(item);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>        
      <ItemDetail
          producto={item}
      />
    </Box>
);
}
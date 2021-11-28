import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

//imports propios
import getItem from '../../services/promesadetailitems'
import ItemDetail from './itemdetail';

export default function ItemDetailContainer() {  

  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem 
    .then(response => setItem(response))
    .catch(error => console.log(error))
  }, []);  

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>        
      <ItemDetail
          id={item.id}
          nombre={item.nombre}
          imagen={item.imagen}
          alt={item.alt}
          precio={item.precio}
          descripcion={item.descripcion}
          stock={item.stock}
      />
    </Box>
);
}
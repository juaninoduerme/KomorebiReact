import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

//imports propios
import ItemDetail from './itemdetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {  

  const {id} = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {

    if(id !== undefined || id !== null)
    {
      const db = getFirestore();

      const prodKomorebiRef = doc(db, "items", id);
      getDoc(prodKomorebiRef).then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ ...snapshot.data(), id: snapshot.id });
        }
      });
    }
  }, [id]);  

  console.log(item);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>        
      <ItemDetail
        key={item.id}
        producto={item}
      />
    </Box>
);
}
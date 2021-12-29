import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

//imports propios
import ItemList from "./itemlist";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  
  //variables
  const { id } = useParams();

  //hooks
  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productosRef = collection(db, "items");
    let queryAux;

    if(id === undefined || id === null)
    {
      queryAux = query(
        productosRef
      );
    }
    else
    {
      queryAux = query(
        productosRef,
        where("categoria", "==", parseInt(id))
      );      
    }   
    
    getDocs(queryAux).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })
    .catch((error) => {
      console.log("Oops! I did it again D:", error);
    })
    .finally(() => {
      setLoading(false);
    });

  }, [id]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {loading ? <div>Loading....</div> : <ItemList products={products} />}
    </Box>
  );
}
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

//imports propios
import getProducts from "../../services/promesaitems";
import ItemList from "./itemlist";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  
  const { id } = useParams();
  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
      .then((response) => {
        id === undefined || id === null
          ? setProducts(response)
          : setProducts(
              response.filter((prod) => prod.categoria == parseInt(id))
            );
      })
      .catch((error) => {
        console.log("Pasaron cosas....", error);
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
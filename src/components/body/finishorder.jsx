import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//imports propiois
import { useCart } from '../../contexts/cartcontext';
import '../../index.css';
import { collection, doc, getFirestore, addDoc, writeBatch } from "firebase/firestore";

export default function FinishOrder() {

    //context
    const { cart, totalPriceCart, clearCart } = useCart();

    //hooks
    const [idOrder, setIdOrder] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefono, setTelefono] = useState(null);

    const finishOrder = () => {
        const order = {
            buyer: {
              name: nombre,
              lastname: apellido,
              email: email,
              phone: telefono
            },
            items: cart,
            total: totalPriceCart()
        };
      
        const db = getFirestore();
    
        const ordersCollection = collection(db, "orders");
    
        addDoc(ordersCollection, order).then(({ id }) => {
            setIdOrder(id);
        });

        updateStock();
        clearCart();
    };

    const updateStock = () => {

        const db = getFirestore();    
        const batch = writeBatch(db);
    
        cart.forEach((item) => {
          const itemRef = doc(db, "items", item.id);
          batch.update(itemRef, { stock: item.stock - item.cantidad });
        });
    
        batch.commit();
      };

    return (
        <div>
            { idOrder == null ?

                (<Box sx={{ margin: '3% auto', width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    
                    <Box sx={{ width: '100%'}}>
                        <Typography className="titulos" variant="h3" gutterBottom component="div">
                            Completa tus datos para terminar la compra
                        </Typography>              
                    </Box>
                    
                    <Box
                    component="form"
                    sx={{
                        margin: '3%',
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    >      
                        <TextField
                        id="name"
                        label="Nombre"
                        value={nombre}
                        color= "primary"
                        onChange={(e) => setNombre(e.target.value)} 
                        />
                        <TextField
                        id="lastname"
                        label="Apellido"
                        value={apellido}
                        color= "primary"
                        onChange={(e) => setApellido(e.target.value)} 
                        />   
                        <TextField
                        id="email"
                        label="E-mail"
                        value={email}
                        color= "primary"
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                        <TextField
                        id="phone"
                        label="Número de teléfono"
                        value={telefono}
                        color= "primary"
                        onChange={(e) => setTelefono(e.target.value)} 
                        />
                    </Box>
                    <Box>
                        <Button variant="contained" size="large" onClick={() => finishOrder()}>
                            Finalizar Compra
                        </Button>      
                    </Box>
                </Box>)
            :
                (<Box sx={{ width: "50%", margin: "5% auto"}}>
                    <Typography variant="h3" component="div">
                        Tu orden ha sido cargada exitosamente.
                    </Typography>
                    <Typography variant="h3" component="div">
                        El código de tu orden es: {idOrder}
                    </Typography>
                    <Typography variant="h3" component="div">
                        <Link to="/" underline="none">                            
                            Volvé a la tienda para conocer otros productos ♥
                        </Link> 
                    </Typography>                   
                </Box>)
            }
        </div>
    );
}
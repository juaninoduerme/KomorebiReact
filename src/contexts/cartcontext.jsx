import { createContext, useContext, useState } from 'react';

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (idItem) => {
        // está el item en el carrito ? true : false
        const producto = cart.find(item => item.id === idItem);

        if(producto != null)
            return true;
        else
            return false;
    };

    const addItemCart = ({item, quantity}) => {
        // busca item en el carrito ? actualiza la cantidad : agrega el item y su cantidad al carrito

        if (isInCart(item.id)) 
        {
            const newCart = cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, cantidad: cartItem.cantidad + quantity } : cartItem);
            setCart(newCart);
        } 
        else 
        {
            item.cantidad = quantity;
            const newCart = [...cart, item];
            setCart(newCart);         
        }
    };

    const removeItemCart = (idItem) => {
        // sacar item del carrito
        if (isInCart(idItem)) 
        {
            const newCart = cart.filter(cartItem => cartItem.id !== idItem);
            setCart(newCart);
        }
    };

    const clearCart = () => {
        //limpiar carrito
        setCart([]);
    };

    const countItemsCart = () => {
        // cuenta la cantidad de items que hay en el carrito
        const count = 0;

        cart.reduce((count, prod) => count + prod.cantidad, 0);

        return count;
    };

    const totalPriceCart = () => {
        // da el valor total del carrito
        const precioTotal = 0;

        precioTotal = cart.reduce((precioTotal, prod) => precioTotal + prod.cantidad * prod.precio, 0);

        return precioTotal;
    };

    return (
        <cartContext.Provider
            value={{ cart, setCart, isInCart, addItemCart, removeItemCart, clearCart, countItemsCart, totalPriceCart }}
        >
            {children}
        </cartContext.Provider>
    );
};
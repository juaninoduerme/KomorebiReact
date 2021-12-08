import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (idItem) => {
    // está el item en el carrito ? true : false

    return cart.some((prod) => prod.id == idItem);
  };

  const addItemCart = ({ item, quantity }) => {
    // busca item en el carrito ? actualiza la cantidad : agrega el item y su cantidad al carrito
    const newCart = {
      ...item,
      cantidad: quantity,
    };

    if (!isInCart(item.id)) {

      setCart([...cart, newCart]);
    } 
    else {
      
        const newCarts = cart.map((cartItem) => {

            const sumTotal = cartItem.cantidad + quantity;
            
            if (cartItem.id === item.id) {
                return { ...cartItem, cantidad: sumTotal };
            } 
            else {
                return cartItem;
            }
        });

        setCart(newCarts);
    }

    console.log(`cart`, cart);
  };

  const removeItemCart = (idItem) => {
    // sacar item del carrito
    if (isInCart(idItem)) {
      const newCart = cart.filter((cartItem) => cartItem.id !== idItem);
      setCart(newCart);
    }
  };

  const clearCart = () => {
    //limpiar carrito
    setCart([]);
  };

  const countItemsCart = () => {
    // cuenta la cantidad de items que hay en el carrito
    const cantidadItems = cart.reduce((count, prod) => count + prod.cantidad, 0);
    return cantidadItems;
  };

  const itemPriceCart = (idItem) => {
    // da el valor total de un item del carrito

    const item = cart.find(prod => prod.id === idItem);

    return item.precio * item.cantidad;
  };

  const totalPriceCart = () => {
    // da el valor total del carrito

    return cart.reduce(
      (precioTotal, prod) => precioTotal + prod.cantidad * prod.precio,
      0
    );
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        isInCart,
        addItemCart,
        removeItemCart,
        clearCart,
        countItemsCart,
        itemPriceCart,
        totalPriceCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
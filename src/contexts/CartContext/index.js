import { createContext } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    // const showCart = children.show;
    // return <CartContext.Provider value={{ showCart }}>{children}</CartContext.Provider>;
}
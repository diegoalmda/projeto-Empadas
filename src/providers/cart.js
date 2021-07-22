import React, { useState } from 'react';

const CartContext = React.createContext({});

export const CartProvider = (props) => {
    const [user, setUser] = useState({
        name: "Diego",
    })

    return (
        <CartContext.Provider value={{ user, setUser }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;
import React, { useEffect, useState } from 'react';

const initialState = {
    cart: [],
    display: false,
    total: 0,
}

export const CartContext = React.createContext(initialState);

const Store = props => {

    const [state, setState] = useState(initialState);

    function updateState(attribute, value) {
        setState({
            ...state,
            [attribute]: value
        });
    }

    return (
        <CartContext.Provider value={{
            display: state.display,
            cart: state.cart,
            setDisplay: d => updateState('display', d),
            setCart: c => updateState('cart', c),
            setTotal: t => updateState('total', t),
        }}>
            <div>
                {props.children}
            </div>
        </CartContext.Provider>
    )
}

export default Store;
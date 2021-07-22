import React, { useContext } from 'react';
import Cart from '../Cart';
import { CartContext } from '../../component-provider/Store';
import { useEffect } from 'react/cjs/react.development';

function SideBar() {
    const {display, setDisplay} = useContext(CartContext);

    useEffect(() => {
        
    }, display);

    return (
        <div>
            {display &&
                <Cart />
            }            
        </div>   
        
    )
}

export default SideBar;
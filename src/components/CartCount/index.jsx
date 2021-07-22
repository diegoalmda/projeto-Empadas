import sacola from '../../assets/img/sacola.png';
import React, { useContext } from 'react';
import { CartContext } from '../../component-provider/Store';

function CartCount() {
    const { cart, setDisplay } = useContext(CartContext);

    const handleOpen = () => {
        setDisplay(true);
    }
    
    return (
        <li className="nav-item">            
              <div className="selected-items">
                <p onClick={handleOpen} id="navButton">Minha Sacola</p>
                <div>
                    <img src={sacola} alt="Sacola" />
                    {cart.length > 0 ?
                        <span id="count">{cart.length}</span>
                    :<span></span>
                    }             
                </div>
              </div>    
        </li>
    )
}

export default CartCount;
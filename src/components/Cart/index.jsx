import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../component-provider/Store';

const Cart = (props) => {
    const { 
        display, 
        setDisplay,
        cart,
        total,
        setCart,
    } = useContext(CartContext);

    const handleClose = () => {
        setDisplay(false);
    }

    const [totalValue, setTotalValue] = useState(0);
    const [individualQt, setIndividualQt] = useState(0);


    useEffect(() => {
        setTotalValue(
            cart.reduce((accumulator, value) => {
                return accumulator + value.price;
            }, 0)
        );  

    }, [cart.length]);

    const [newCart, setNewCart] = useState(cart);

    function removeItem(item) {
        //setNewCart(newCart.splice(item, 1));
        newCart.splice(item, 1);
        setCart(newCart);
    }

    useEffect(() => {        
        setNewCart(newCart);
    }, [newCart]);

    const handleRemove = (id) => {
        cart.filter((item) => {
            if(item.id === id) {   
                removeItem(item);
                setCart(newCart);             
                return item;                
            }
            return;
        })
    }

    return (
        <div className="sidebar">
           <div className="header">
               <span>
                   <h3>Itens selecionados</h3>
                   <button onClick={handleClose} >X</button>
               </span>
           </div>
            
           {cart.length > 0 ?
                
                cart.map((item, key = new Date.now()) => {
                                     
                    return (
                        <div className="cart" key={key}>
                            <p>{item.title}</p>
                            <p>R$ {item.price}</p>
                            <div>
                                <button className="btn" onClick={() => handleRemove(item.id)}>-</button>
                            </div>
                        </div>
                    )
                })          
            
            
            : <div></div>
           }
            <div className="total">
                <div>Valor total: R$ {totalValue.toFixed(2)}</div>
                <button>Finalizar Compra</button>
            </div>
           
            
        </div>
    )
}

export default Cart
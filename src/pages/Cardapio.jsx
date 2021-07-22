import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/SectionTitle';
import empadas from '../constants/data';
import imagem from '../assets/img/frango.png';
import { CartContext } from '../component-provider/Store';

function Cardapio() {
    const {
        text, 
        setText, 
        display, 
        setDisplay,
        cart,
        setCart,
    } = useContext(CartContext);

    const [newCart, setNewCart] = useState([]);

    function addItem(item) {
        newCart.push(item);
    }

    useEffect(() => {        
        setNewCart(newCart);
    }, [newCart]);

    const handleShop = (id) => {
        setDisplay(true);
        empadas.filter((item) => {
            if(item.id === id) {   
                addItem(item);
                setCart(newCart);             
                return item;                
            }
            return;
        })
    }

    
    return (
        <>
            <div className="title">
                <Title title={'Cardápio'} />
            </div>
            <div className="Cardapio">
                <div className="items">
                    {empadas.map(({id, title, image, description, price}) => {
                            
                        return(
                            <div className="item" key={id}>
                                <h2>{title}</h2>                                
                                <div className="item-section">
                                    <img src={imagem} alt="Empada" />
                                    <div className="description">
                                        <p><span>Descrição: </span>{description}</p>
                                        <p><span>Valor unitário: </span>R$ {price.toFixed(2)}</p> 
                                        <button id="btn" onClick={() => handleShop(id)}>Comprar</button>
                                    </div>                                                                       
                                </div>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </>
    );
}

export default Cardapio;
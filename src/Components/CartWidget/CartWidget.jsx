import React from "react";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useState } from "react";
import { useEffect } from "react";
import {FaShoppingCart} from "react-icons/fa"


export default function CartWidget(){

    const { cart } = useContext(CartContext)

    const [total, setTotal] = useState(0)


    useEffect(() => {
        setTotal(cart.reduce((acumulador, obj) => acumulador + obj.quantity, 0))
    }, [cart])
    
    
    return(
        <article className="navbarIconDec">
            <FaShoppingCart className="imageIcon"/>
            {
                cart == 0 ?
                    null
                :
                    <span className="navbarCounter">{`${total}`}</span>
            
            }
        </article>
    );
}
import React from "react";
import "./Cart.css"
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { useEffect } from "react";
import CartCounter from "./CartCounter";
import {FaTrashAlt} from "react-icons/fa"
import { Link } from "react-router-dom";

export default function CartItem( {id, title, quantity, price, imageUrl}){

    const {cart, deleteItem} = useContext(CartContext)

    const [empty, setEmpty] = useState(false)
    const [subtotal, setSubtotal] = useState(price)

    useEffect(()=>{
        if(cart.length == 0){
            setEmpty(true)
        }

    }, [])

    useEffect(()=>{
        setSubtotal(price*quantity)
    }, [cart])


    return(
        <>
            {
            empty?
                console.log("xd")
            :
                <section className="cartItem">
                    <img src={imageUrl}/>

                    <Link to={`../../item/${id}`}> {title} </Link>
                    <p>Precio: ${price} </p>
                    <span>Unidades: {quantity} </span>
                    <div>Subtotal: ${subtotal}</div>
                    <FaTrashAlt onClick={() => deleteItem(id)} className={"deleteButton"}/>
                    <CartCounter id={id}/>


                    
                </section>
            }
        </>
    );
}


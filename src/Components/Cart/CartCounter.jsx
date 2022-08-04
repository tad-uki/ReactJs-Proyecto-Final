import React from "react";
import "./Cart.css"
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CartCounter({id}){
    const {cart, onAddCart, isInCart} = useContext(CartContext)
    const [counter, setCounter] = useState()
    const cartIndex = cart.map(object => object.id).indexOf(id);

    useEffect(()=>{
        
        if(isInCart(id)){
            setCounter(cart[cartIndex].quantity)
        }
    }, [])

    useEffect(()=>{
        onAddCart(cart[cartIndex], counter)
    }, [counter])

    function additionCart(){
        setCounter(counter + 1)
    }

    function subtractionCart(){
        setCounter(counter - 1)
    }

    return(
        <section className="cartCounter">
            <button onClick={()=> additionCart()} disabled={counter === cart[cartIndex].stock}> + </button>
            <div> {counter} </div>
            <button onClick={()=> subtractionCart()} disabled={counter == 1}> - </button>
        </section>
    )
}
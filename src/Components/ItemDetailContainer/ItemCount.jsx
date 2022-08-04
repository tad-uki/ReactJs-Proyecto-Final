import React from "react";
import { useState } from "react";
import "./ItemDetail.css"
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function ItemCount({ stock, initial, onAdd, id}){
    const { isInCart } = useContext(CartContext)
    const { cart } = useContext(CartContext)

    const [count, setCount] = useState(initial)
    

    function add(){
        setCount(count + 1)
    }

    function subtract(){
        setCount(count - 1)
    }

    function onClicked(){
        onAdd(count)
    }

    useEffect(()=>{
        if(isInCart(id)){
            let cartIndex = cart.map(object => object.id).indexOf(id);
            setCount(cart[cartIndex].quantity)
            console.log(initial)
        }
    }, [cart])

    return(
        <main className="counter">
            <section className="stockSection">
                <div> Stock Disponible: {stock} </div>
            </section>

            <section className="counterSection">
                <button className="buttonGen" onClick={add} disabled={count === stock}> + </button>
                <p> {count} </p>
                <button className="buttonGen" onClick={subtract} disabled={count === initial}> - </button>
            </section>

            <section className="finishSection">
                <button className="buttonFinish" onClick={onClicked}> Agregar al Carrito </button>
            </section>
            
        </main>
    );
}
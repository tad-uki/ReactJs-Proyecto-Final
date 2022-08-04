import React from "react";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    useEffect(()=>{
        console.log(cart)
    }, [cart])

    function isInCart(id){
        return cart.some((item) => item.id === id)
    }

    function onAddCart(product, count){
        if(isInCart(product.id)){
            setCart(cart.map(item => {
                return item.id === product.id ? {...item, quantity: count} : item
            }))
        }else{
            setCart([...cart, {...product, quantity: count}])
        }
    }

    function deleteItem(id){
        setCart(current => current.filter(item => {
            return item.id !== id
        }))
    }


    return(
        <CartContext.Provider value={{cart, setCart, onAddCart, deleteItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
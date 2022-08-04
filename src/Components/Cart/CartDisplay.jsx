import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import { useState } from "react";
import { useEffect } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import LoadingComp from "../LoadingComp/LoadingComp";


export default function CartDisplay(){
    const {cart} = useContext(CartContext)

    const [open, setOpen] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [loading, setLoading] = useState(true)
    
    const [total, setTotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [emptyImg, setEmptyImg] = useState("")

    useEffect(() => {
        const database = getFirestore()

        const dbIva = doc(database, "data", "iva")
        const dbEmpty = doc(database, "data", "images")

        if(cart.length == 0){
            getDoc(dbEmpty).then((res)=>{
                setEmptyImg({...res.data()}.emptyCart)
                setLoading(false)
            })
            setEmpty(true)
        }
        else{
            getDoc(dbIva).then((res)=>{
                setIva({...res.data()}.percentage)
                setLoading(false)
            })
        }

        let subtotal = 0
        setTotal(0)
        cart.map((item)=>{
            let balance = item.price
            let amount = item.quantity
            

            let subtotalItem = (balance * amount)
            subtotal += subtotalItem
            setTotal(subtotal)
        })
    }, [ , cart])




    return(
        <>
            {
                loading?
                    <LoadingComp/>
                :
                    <div>
                        {
                            empty?
                                <section className="cartEmpty">
                                    <img src={emptyImg}/>
                                    <p>Oops! Parece que tu carrito está vacío.</p>
                                    <Link to={"../items"}> <FaArrowLeft/> Volver a la tienda</Link>
                                </section>
                            :
                                <main className="cartBody">
                                    <section className="cartList">
                                        {cart.map((item) => {
                                        return <CartItem key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price} imageUrl={item.imageUrl}/>
                                        })}
                                    </section>

                                    <section className="cartCheckout">
                                        <h2>Tu pedido</h2>
                                        <div>
                                            <p> Subtotal:</p>
                                            <span> ${total}</span>
                                        </div>
                                        <hr />
                                        <div>
                                            <p>+ IVA - {iva}%: </p>
                                            <span>${(iva/100)*total}</span>
                                        </div>
                                        <hr />
                                        <div>
                                            <p>Saldo Total:</p>
                                            <span>${total + ((iva/100)*total)} </span>
                                        </div>
                                        <hr />
                                        <button onClick={()=> setOpen(true)}>Finalizar Compra</button>
                                        <Link to={"../items"}> Seguir Comprando </Link>
                                    </section>
                                </main>          
                        }

                        {
                            open?
                                <section className="popupContainer">
                                    <div className="popupBox">
                                        <CartCheckout subtotal={total} iva={iva} close={()=> setOpen(false)}/>
                                    </div>
                                </section>
                            :
                                null
                        }
                    </div>   
            }

            
           
        </>
    )
}
import React from "react";
import { useState } from "react";
import "./Cart.css"
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import {collection, getFirestore, addDoc} from "firebase/firestore"
import swal from 'sweetalert';

export default function CartCheckout({subtotal, iva, close}){
    const {cart, setCart} = useContext(CartContext)

    const [error, setError] = useState(false)

    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    const database = getFirestore()
    const collectionItem = collection(database, "pedidos")
    const newPedido = {
        buyer: {nombre: nombre, direccion: direccion, telefono: telefono, email: email},
        cart: cart,
        total: (subtotal + ((iva/100)*subtotal)),
    }

    function handleSubmit(){
        if(!nombre || !direccion || !telefono || !email){
            setError(true)
        }
        else{
            addDoc(collectionItem, newPedido)
            setCart([])
            close()
            swal({
                position: "top-end",
                title: "Todo Listo!",
                text: `Tu compra ya está registrada! Que lo disfrutes!`,
                icon: "success",
                showConfirmationButton: true,
                timer: 6000
            });
        }
    }


    return(
        <section className="popupContent">
            <h1>Terminar La Compra</h1>
            <form>
                <input type="text" placeholder="Nombre y Apellido" onChange={(e)=>setNombre(e.target.value)}/>
                <input type="text" placeholder="Tu Direccion" onChange={(e)=>setDireccion(e.target.value)}/>
                <input type="number" placeholder="Número de Teléfono" onChange={(e)=>setTelefono(e.target.value)}/>
                <input type="mail" placeholder="Tu E-Mail" onChange={(e)=>setEmail(e.target.value)}/>
            </form>

            <section className="popupCheckout">
                    <h2>Tu pedido</h2>
                    <div>
                        <p> Subtotal:</p>
                        <span> ${subtotal}</span>
                    </div>

                    <div>
                        <p>IVA - {iva}% </p>
                        <span>${(iva/100)*subtotal}</span>
                    </div>

                    <div>
                        <p>Saldo Total:</p>
                        <span> ${subtotal + ((iva/100)*subtotal)} </span>
                    </div>
            </section>
            
            {
                    error?
                        <p className="popupError"> Por favor, complete todos los campos. </p>
                    :
                        null
            }

            <section className="popupButton">
                <button className="cancelButton" onClick={()=> close()}> Cancelar </button>
                <button className="checkoutButton"  onClick={()=> handleSubmit()}> Confirmar </button>
            </section>
            
        </section>
    )
}

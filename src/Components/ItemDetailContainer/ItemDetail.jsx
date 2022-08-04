import React from "react";
import "./ItemDetail.css"
import "./ItemCount"
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {useState} from "react"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ItemDetail({id, title, description, price, imageUrl, stock}){
    const { onAddCart } = useContext(CartContext)

    const [clicked, setClicked] = useState(false)

    const toastMessage = () => toast("Tu item se añadió al Carrito!", {
        position: "top-left",
        autoClose: 2000,
        closeOnClick: true
    });


    function onAdd(count){
        const product = {id, title, description, price, imageUrl, stock}
        onAddCart(product, count)
        setClicked(true)
        toastMessage()
    }

    return(
        <>
          <h2 className="detailTitle"> {title} </h2>
          <div id="itemDetail">
                <section>
                    <img src={imageUrl} alt={title} className="imgDetail"/>
                </section>



                <section id="itemArticle">
                    <div className="price">
                        <p> ${price} </p>
                        <hr/>
                    </div>
                    <article> {description} </article>
                    <div>
                        {clicked?
                            <section className="cartAdd">
                                <div>
                                    <ItemCount stock={stock} initial={1} onAdd={onAdd} id={id}/>
                                </div>
                                <div className="cartFinish">
                                    <button> <Link to={"/cart"}> Terminar mi Compra </Link> </button>
                                </div>
                            </section>
                        :
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} id={id}/>}
                    </div>
                </section>
                <ToastContainer />

            </div>

        </>
    )   
}
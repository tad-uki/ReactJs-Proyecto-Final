
import React from "react";
import "./ItemListContainer.css"
import {Link} from "react-router-dom"

export default function Item( {id, title, price, imageUrl}){
    return(
        <Link to={`../../item/${id}`} className="itemEach">
            <div>
                <img src={imageUrl}/>
            </div>

            <div to={`../../item/${id}`}>
                <h3> {title} </h3>
                <button>  Ver más... </button>
                <p> ${price} </p>
            </div>
        </Link>
    );
}
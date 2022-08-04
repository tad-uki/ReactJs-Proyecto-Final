import React from "react";
import "./Main.css"
import { Link } from "react-router-dom";

export default function MainAdvertising({item}){

    return(
        <article className="adItem">
            <img src={item.imageUrl}/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/item/${item.id}`}> <button> Checkear Item </button> </Link>
        </article>
    )
}
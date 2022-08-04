//@ts-check
import React from "react";
import Item from "./Item.jsx";
import "./ItemListContainer.css"

export default function ItemList({items}){
    return(

        <article className="itemList">
            {
                items.map((item) => {
                    return <Item key={item.id} id={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
                })
            }   
        </article>
    );
}
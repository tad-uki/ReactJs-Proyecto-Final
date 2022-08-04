
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import "../ItemListContainer/ItemListContainer.css"
import LoadingComp from "../LoadingComp/LoadingComp";
import {doc, getDoc, getFirestore} from "firebase/firestore"

export default function ItemDetailContainer(){
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(()=>{
        const database = getFirestore()
        const item = doc(database, "productos", `${itemId}`)
        getDoc(item).then((res)=>{
            setProduct({...res.data(), id: res.id})
            setLoading(false)
        })
    }, [itemId])

    return(
        <div>
            {
                loading?
                    <LoadingComp/>
                :
                    <ItemDetail {...product} />
            }
        </div>
    );
}
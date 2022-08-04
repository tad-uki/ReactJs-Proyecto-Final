import React from "react";
import "./Main.css"
import MainInfo from "./MainInfo";
import MainCarousel from "./MainCarousel"
import MainAdvertising from "./MainAdvertising"
import { useState } from "react";
import { useEffect } from "react";
import {collection, getDocs, getFirestore, doc, getDoc} from "firebase/firestore"
import LoadingComp from "../LoadingComp/LoadingComp";

export default function Main(){
    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])
    const [titleImage, setTitleImage] = useState("")

    useEffect(()=>{
        const database = getFirestore();

        const collectionItems = collection(database, "destacados");
        const dbImg = doc(database, "data", "images")

        getDocs(collectionItems).then((res)=>{
            setProducts(res.docs.map((item)=> ({...item.data(), id: item.id})))
        });

        getDoc(dbImg).then((res)=>{
            setTitleImage({...res.data()}.frontpage)
            setLoading(false)
        })
        
    }, []);

    return(
        <>
            {
                loading?
                    <LoadingComp/>
                :
                <main>
                    <MainCarousel titleImage={titleImage}/>
                    <MainInfo/>
                    <section className="mainAdvertising">
                        {products.map((product) => {
                        return <MainAdvertising key={product.id} item={product}/>
                        })}
                    </section>
                </main>
            }   


        </>
    )
}
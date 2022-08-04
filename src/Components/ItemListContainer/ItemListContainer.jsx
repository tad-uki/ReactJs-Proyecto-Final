
import React from "react";
import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import LoadingComp from "../LoadingComp/LoadingComp";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


export default function ItemListContainer(){
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])
    
    const {categoryId} = useParams()

    useEffect(()=>{
        const database = getFirestore();

        let collectionItems
        categoryId?
            collectionItems = query(collection(database, "productos"), where("category", "==", `${categoryId}`))
        :
            collectionItems = collection(database, "productos");

        getDocs(collectionItems).then((res)=>{
            setProducts(res.docs.map((item)=> ({...item.data(), id: item.id})))
            setLoading(false)
        });
        
        
    }, [categoryId]);

    return(
        <section>
            {
                loading?
                    <LoadingComp/>
                :
                    <main>
                        <header className="itemTitle">
                            <p>
                            {
                                categoryId?
                                    `Lista de ${categoryId}`
                                :
                                    "Lista de Productos"
                            }
                            </p>
                            <hr/>
                        </header>
                        <ItemList items={products}/>
                    </main>
            }
            
        </section>  
        
    );
}
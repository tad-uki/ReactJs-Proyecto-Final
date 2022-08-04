import React from "react";
import "./LoadingComp.css"
import { DotLoader } from "react-spinners";

export default function LoadingComp(){
    return(
        <section className="loading">
            <h2 className="loadingTitle"> Las Mejores Galletas y Tortas </h2>
                
            <div className="loadingAnimation"> 
                <DotLoader size={150} color={"#e5881b"}/> 
                <p> Cargando...</p>
            </div>   
        </section>
    )
}

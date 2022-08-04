import React from "react";
import "./Main.css"
import {Link} from "react-router-dom"

export default function MainInfo(){
    return(
        <>
            <section className="mainInfo">
                <h1> La mejor pastelería a la puerta de tu casa </h1>
                <p>
                    Nos especializamos en cocinar los mejores postres y aperitivos de la zona, con nuestros cocineros experimentados.
                    Lo mejor? Lo podés recibir todo en la puerta de tu casa mediante nuestro servicio de Delivery. O si lo preferís, podés ordenar un Take-Away
                    y pasarlo a buscar. De todas formas, siempre sos bienvenido en nuestros locales!!
                </p>
                <Link to={"/items"} >
                    <button className="mainButton"> Ir a la tienda! </button>
                </Link>
            </section>
        </>
    )
}
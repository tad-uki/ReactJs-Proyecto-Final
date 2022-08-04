import React from "react";
import "./Footer.css"
import {FaCookieBite, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcAmazonPay} from "react-icons/fa"

export default function Footer(){
    return(
    <footer>
        <div className="footerDiv footer1">
            <h3>Contactanos</h3>
            <p>mgteau@emomo.com</p>
            <p>Tel.: +562-3568-5432</p>
            <p>Consultas Vía Redes Sociales</p>
        </div>

      <div className="footerDiv footer2">
        <h3>Institucional</h3>
        <p>¿Quienes Somos?</p>
        <p>Términos de Condición</p>
        <p>Garantía</p>
        <p>Seguridad</p>
        <p>Pago</p>
      </div>

      <div className="footerDiv footer3">
        <h3>Mi Cuenta</h3>
        <p>Mis Pedidos</p>
        <p>Atención Al Consumidor</p>
        <p>Registrarse</p>
      </div>

      <div className="footerDiv footer4">
        <h3> Redes Sociales</h3>
        <span>
          <FaFacebookSquare className="imgFooter"/>
          <FaInstagramSquare className="imgFooter"/>
          <FaYoutubeSquare className="imgFooter"/>
          <FaTwitterSquare className="imgFooter"/>
        </span>
        
      </div>

      <div className="footerDiv footer5">
        <h3> Formas De Pago </h3>
        <span>
          <FaCcVisa className="imgFooter"/>
          <FaCcMastercard className="imgFooter"/>
          <FaCcPaypal className="imgFooter"/>
          <FaCcAmex className="imgFooter"/>
          <FaCcAmazonPay className="imgFooter"/>
        </span>
      </div>

      <hr className="footerb"/>

      <div className="footer6">
        <span>
          <FaCookieBite className="imgFooter"/>
          <p>Momo Gateu</p>
        </span>

        <p> Privacidad </p>
        <p> Legal </p>
        <p> Cookies </p>
      </div>
    </footer>
    )
}
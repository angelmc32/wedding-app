import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slideshow from '../components/Slideshow'
import Map from '../components/Map'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="slideshow" className="uk-section">

      <div className="sixty-percent">
        <Slideshow />
      </div>

      <div className="forty-percent">
        <div className="uk-container uk-margin">
          <h1>Paula & Angel</h1>
          <p>Los invitamos a celebrar nuestra boda el dia 15 de marzo de 2020</p>
          <button className="uk-button uk-button-primary uk-border-pill">
            Confirma tu asistencia
          </button>
        </div>
      </div>
    
    </div>

    <div id="details" className="uk-section">
      
      <div className="sixty-percent">

        <div className="uk-container uk-margin">
          <div className="background-h2">
            <h2>Cuando</h2>
          </div>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae?
          Libero debitis repudiandae aspernatur, blanditiis dolore praesentium expedita voluptas nihil.</p>
        </div>
        <div className="uk-container uk-margin">
          <div className="background-h2">
            <h2>Donde</h2>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae?
          Libero debitis repudiandae aspernatur, blanditiis dolore praesentium expedita voluptas nihil.</p>
        </div>

      </div>
      
      <div className="forty-percent">
          <Map />
      </div>

    </div>

    <div id="additional" className="uk-section uk-margin">
      <div className="uk-container">
        <div className="thirty-percent">
          <h2>Informacion Adicional</h2>
        </div>
        <div className="seventy-percent">
          <ul>
            <li>Vestimenta: No tengo idea</li>
            <li>No ninos</li>
          </ul>
        </div>
      </div>

      <div className="uk-container">
        <div className="thirty-percent">
          <h2>Opciones de hospedaje</h2>
        </div>
        <div className="seventy-percent">
          <ul>
            <li>Hotel 1 <a href="">Ver ubicacion</a></li>
            <li>Hotel 2 <a href="">Ver ubicacion</a></li>
            <li>Hotel 3 <a href="">Ver ubicacion</a></li>
          </ul>
        </div>
      </div>
      
        
        
      
    </div>

    <div id="messages" className="uk-section uk-margin">
      <div className="uk-container uk-margin">
        <h2>Mesa de regalos</h2>
        <p>Mensaje importante:</p>
        <p>Debido a nuestros planes a corto plazo, no registramos ninguna mesa de regalos. Si quieres conocer como apoyarnos, por favor <a href="">haz click aqui</a>.</p>
      </div>
      <div className="uk-container uk-margin">
        <h2>R.S.V.P.</h2>
        <h3><a href="">Contacto/Dudas</a></h3>
      </div>

    </div>

    <footer className="uk-text-center uk-margin-bottom">
      © {new Date().getFullYear()} Hecho con ♡ por Paula & Angel
    </footer>
    
  </Layout>
)

export default IndexPage

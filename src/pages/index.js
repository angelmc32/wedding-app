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
          <h1>Paula & Ángel</h1>
          <p>Nos vamos, pero antes...</p>
          <h3>¡Nos casamos!</h3>
          <a href="#messages">
            <button className="uk-button uk-button-primary uk-border-pill">
              Confirma tu asistencia
            </button>
          </a>
          
        </div>
      </div>
    
    </div>

    <div id="details" className="uk-section">
      
      <div className="sixty-percent">

        <div className="uk-container">
          <h2>Cuándo</h2>
          <h4>Fecha: 15 de marzo de 2020</h4>
          <p>Hora: 14:00h a 20:00h</p>
        </div>
        <div className="uk-container">
          <h2>Dónde</h2>
          <h4>Lugar: Hacienda Triana</h4>
          <p>Dirección: Prolongación Cosío Sur 904, Col. Barrio de la Salud, C.P. 20240</p>
          <h4>Aguascalientes, Aguascalientes</h4>
        </div>

      </div>
      
      <div className="forty-percent">
          <Map />
      </div>

    </div>

    <div id="additional" className="uk-section">
      <div className="uk-container">
        <div className="thirty-percent">
          <h2>Información Adicional</h2>
        </div>
        <div className="seventy-percent">
          <p>Código de Vestimenta: Cocktail</p>
          <p>Queremos que disfruten y bailen sin parar, es por ello que la invitación es solo para adultos</p>
          <a href="#messages" id="alert">
            <p>Agradecemos su confirmación antes del:</p>
            <h4>15 de febrero de 2020. </h4>
          </a>
          <p>En caso de no contar con su confirmación, entenderemos que no les será posible asistir.</p>
        </div>
      </div>

      <div className="uk-container">
        <div className="thirty-percent">
          <h2>Opciones de hospedaje</h2>
        </div>
        <div className="seventy-percent">
          <ul>
            <li className="uk-margin-small">Fiesta Americana Aguascalientes <br/><a href="https://goo.gl/maps/opdfDeRtfQovmfwA8">Ver ubicación</a></li>
            <li className="uk-margin-small">Gran Hotel Hacienda de la Noria <br/><a href="https://goo.gl/maps/KydpNFrmBrERsGLr5">Ver ubicación</a></li>
            <li className="uk-margin-small">Quality Inn Aguascalientes <br/><a href="https://goo.gl/maps/EmQZj7oofiX4MxN69">Ver ubicación</a></li>
            <li className="uk-margin-small">Hotel Francia Aguascalientes <br/><a href="https://goo.gl/maps/tMDKan4c1JeeAqMV9">Ver ubicación</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="messages" className="uk-section">
      <div className="uk-container">
        <h2>Mesa de regalos</h2>
        <p>Mensaje importante:</p>
        <p>Debido a nuestros planes a corto plazo, no registramos ninguna mesa de regalos. Si quieres conocer más, por favor <button id="modal-button" uk-toggle="target: #modal-center">haz click aqui</button></p>
        <div id="modal-center" className="uk-flex-top" uk-modal="true">
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

              <button className="uk-modal-close-default" type="button" uk-close="true"></button>

              <p>Como algunos de ustedes saben, para mediados de este año estaremos migrando a Canadá.</p>
              <p>Es un plan para el cual llevamos ahorrando desde principios de 2019, y para el cual tenemos contemplado llevarnos solo lo indispensable.</p>
              <p>Pensando en esto, decidimos no solicitar regalos ya que complica nuestra movilidad. Agradecemos mucho la intención, y si gustan apoyarnos, cualquier aportación económica nos será mucho más benéfica que un regalo físico.</p>

          </div>
        </div>
      </div>
      <div className="uk-container">
        <h2>R.S.V.P.</h2>
        <form action="">
          <label htmlFor="code"></label>
          <input id="code" className="uk-input" type="text" placeholder="Introduce tu código"></input>
          <div className="uk-margin">
            <label htmlFor="email"></label>
            <input id="email" className="uk-input" type="email" placeholder="Correo registrado"></input>
          </div>
          <button className="uk-button uk-button-primary uk-border-pill">
            Confirma tu asistencia
          </button>
        </form>
        <h3>Contacto</h3>
        <p>Cualquier duda, puedes contactarnos por teléfono o al siguiente correo: paulayangel2020@gmail.com</p>
        <footer className="uk-text-center">
          © {new Date().getFullYear()} Hecho con ♡ por Paula & Ángel
        </footer>
      </div>      

    </div>

    
    
  </Layout>
)

export default IndexPage

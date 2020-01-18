import React, { useState, useEffect, useContext } from "react"
import { Link, graphql, navigate } from "gatsby"
import { FirebaseContext, useAuth } from '../components/Firebase'
import SEO from "../components/seo"
import Slideshow from '../components/Slideshow'
import Map from '../components/Map'
import { array } from "prop-types"

const IndexPage = (props) => {

  const { user, firebase, loading } = useContext(FirebaseContext);
  const [ guests, setGuests ] = useState([]);
  const [ guestInfo, setGuestInfo ] = useState(null);
  const [ isConfirmed, setIsConfirmed ] = useState(false);
  const [ guestTemp, setGuestTemp ] = useState({});
  const [ formValues, setFormValues ] = useState({code: '', email: ''});

  async function special() {

    let data = {}; 

    await firebase.getGuestInfo({code: formValues.code})
      .then( querySnapshot => {

        querySnapshot.forEach( doc => {
          data = doc.data()
        });
      });

    return data;

  }

  const handleSubmit = (event) => {

    event.preventDefault();
    
    let codeExists = false, arrayIndex = 0, data = {};

    for (const [index, guest] of guests.entries()) {
      if ( formValues.code === guest.node.code ) {
        codeExists = true;
        arrayIndex = index;
        setIsConfirmed(guest.node.confirmed);
      }
    }

    if ( codeExists ) {

      try {
        data = special();
        data.then( res => {

          if ( formValues.email === res.email ) {
            setGuestInfo(res);
          } else {
            setGuestInfo(null);
          }

        })

        

      }
      catch(error) {
        console.log(error);
      }

    } else {
      resetGuestInfo();
    }

  }

  const handleInputChange = (event) => {
    event.persist();
    setFormValues( currentValues => ({
      ...currentValues,
      [event.target.name]: event.target.value
    }))
  }

  const resetGuestInfo = () => setGuestInfo(null);

  const preventDefault = (event) => event.preventDefault();

  const submitGuestConfirmation = (code) => {
    firebase.getGuestInfo({code: formValues.code})
      .then( querySnapshot => {

        querySnapshot.forEach( doc => {
          firebase.db.collection('guests').doc(doc.id).update({confirmed: true})
          setGuestInfo(doc.data())
          navigate('/confirmation', {state: guestInfo});
        })

      });
  }

  useEffect( () => {
    setGuests(props.data.allGuest.edges);
  }, [guestInfo, guestTemp]);

  return (
    <div>
      <SEO title="Paula y Ángel" />
      <div id="slideshow" className="uk-section">

        <div className="sixty-percent">
          <Slideshow />
        </div>

        <div className="forty-percent">
          <div className="uk-container uk-margin">
            <h1>Paula & Ángel</h1>
            <p>Nos vamos, pero antes...</p>
            <h3>¡Nos casamos!</h3>
            <Link to="/#messages">
              <button className="uk-button uk-button-primary uk-border-pill">
                Confirma tu asistencia
              </button>
            </Link>
            
          </div>
        </div>
      
      </div>

      <div id="details" className="uk-section">
        
        <div className="sixty-percent">

          <div className="uk-container">
            <h2>Cuándo</h2>
            <h4>Fecha: 15 de marzo de 2020</h4>
            <p>Hora: 15:00h a 21:00h</p>
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
            <Link to="/#messages" id="alert">
              <p>Agradecemos su confirmación antes del:</p>
              <h4>15 de febrero de 2020. </h4>
            </Link>
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="code"></label>
            <input id="code" name="code" className="uk-input" type="text" placeholder="Introduce tu código" onChange={handleInputChange} required></input>
            <div className="uk-margin">
              <label htmlFor="email"></label>
              <input id="email" name="email" className="uk-input" type="email" placeholder="Correo registrado" onChange={handleInputChange} required></input>
            </div>
            <button id="modal-button-2" uk-toggle="target: #modal-center-2" className="uk-button uk-button-primary uk-border-pill" type="submit">
              Confirma tu asistencia
            </button>
            <div id="modal-center-2" className="uk-flex-top" uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                <button className="uk-modal-close-default" type="button" uk-close="true" onClick={resetGuestInfo}></button>

                {guestInfo ? (
                    guestInfo.confirmed ? (
                      <div>
                        <h3>Estimado {`${guestInfo.first_name} ${guestInfo.last_name}`}</h3>
                        <p>De acuerdo a nuestro registro, ya habías confirmado anteriormente.</p>
                        <p>Si tienes alguna duda, por favor mándanos un correo a paulayangel2020@gmail.com</p>
                      </div>
                    ) : (
                      <div className="uk-text-center">
                        <h3>Estimado {`${guestInfo.first_name} ${guestInfo.last_name}`}</h3>
                        <p>¡Estamos muy contentos de que nos acompañes!</p>
                        <p>Para registrar la confirmación, haz click en confirmar.</p>
                        <h5>Recuerda que tienes hasta el 15 de febrero de 2020 para confirmar...</h5>
                        <button className="uk-button uk-button-primary uk-border-pill uk-modal-close" onClick={event => submitGuestConfirmation()} >Confirmar</button>
                      </div>
                    )
                  ) : (
                    <h3>Lo sentimos, el código o el correo electrónico introducido es incorrecto</h3>
                  )
                }

            </div>
          </div>
          </form>
          <h3>Contacto</h3>
          <p>Cualquier duda, puedes contactarnos por teléfono o al siguiente correo: paulayangel2020@gmail.com</p>
          <footer className="uk-text-center">
            © {new Date().getFullYear()} Hecho con ♡ por Paula & Ángel
          </footer>
        </div>      

      </div>

    </div>
  )

}

export default IndexPage

export const query = graphql`
  {
    allGuest {
      edges {
        node {
          code
          confirmed
        }
      }
    }
  }
`
import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'gatsby'
import { FirebaseContext } from '../components/Firebase'

const Confirmation = (props) => {

  const [ guest, setGuest ] = useState(props.location.state);
  const { firebase } = useContext(FirebaseContext);

  useEffect( () => {

    if ( firebase ) {

      firebase.getGuestInfo({code: guest.code})
      .then( querySnapshot => {

        querySnapshot.forEach( doc => {
          setGuest(doc.data());
        })

      });
    }
  }, [firebase] )

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-column uk-padding-large">
        <h2>Listo {guest ? `${guest.first_name} ${guest.last_name}` : "Invitado"}</h2>
        <h4>¡Muchas gracias por confirmar!</h4>
        { guest ? (
            guest.plus_guests > 0 ? (
              <div className="uk-margin">
                <p>De acuerdo a tu selección, recibirás <span className="uk-text-bold uk-text-danger">tu boleto</span> más <span className="uk-text-bold uk-text-danger">{guest.confirmed_guests}</span> {guest.confirmed_guests > 1 ? "boletos adicionales" : "boleto adicional" } a la siguiente dirección de correo electrónico:</p>
              </div>
            ) : <div className="uk-margin"><p>Tu boleto electrónico será enviado a la siguiente dirección de correo:</p></div>
          ) : <p>Cargando...</p>
        }
        <h3>{guest ? guest.email : "Correo no registrado"}</h3>
        <p>Si tienes alguna duda, por favor mándanos un correo a paulayangel2020@gmail.com</p>
        <Link to="/" className="uk-margin">
          <button className="uk-button uk-button-primary uk-border-pill">Regresar</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Confirmation
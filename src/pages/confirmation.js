import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'

import { FirebaseContext } from "../components/Firebase"

const Confirmation = (props) => {
  const guest = props.location.state;

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-column uk-padding-large">
        <h2>Listo {`${guest.first_name} ${guest.last_name}`}</h2>
        <p>Tus boletos electrónicos serán enviados a la siguiente dirección de correo:</p>
        <h3>{guest.email}</h3>
        <p>Si tienes alguna duda, por favor mándanos un correo a paulayangel2020@gmail.com</p>
        <Link to="/" className="uk-margin">
          <button className="uk-button uk-button-primary uk-border-pill">Regresar</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Confirmation
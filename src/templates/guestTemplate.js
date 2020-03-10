import React, { Fragment, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
const QRCode = require('qrcode.react');

const guestTemplate = (props) => {

  const { id, first_name, last_name, confirmed, confirmed_guests, table } = props.pageContext;

  return (
    <div className="uk-section">

      <div className="uk-container uk-padding">
        <h1 className="uk-margin-large-top">
          Verificación de boletos
        </h1>
        <div className="uk-height-small uk-flex uk-flex-column uk-flex-middle uk-flex-center">
          <h4 className="uk-margin">Nombre: {first_name} {last_name}</h4>
          { parseInt(confirmed_guests) > 0 ?
              <h4>Invitados adicionales: {confirmed_guests}</h4>
            : <h4>Sin invitados adicionales</h4>
          }
          <h4 className="uk-margin">Mesa: {table ? table : "Por asignar"}</h4>
        </div>
        {
          confirmed ? 
          <div className="uk-height-small uk-flex uk-flex-middle uk-flex-center">
            <h1 className="uk-text-success">Acceso autorizado</h1>
          </div>
            
          : <h1 className="uk-text-danger">Acceso denegado</h1>
        }
      </div>

    </div>
  )
}

export default guestTemplate;
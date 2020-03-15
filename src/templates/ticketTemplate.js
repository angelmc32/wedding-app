import React, { Fragment, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import upset from '../images/upset.svg'
const QRCode = require('qrcode.react');

const tickettTemplate = (props) => {

  const { id, first_name, last_name, confirmed, confirmed_guests, table } = props.pageContext;

  return (
    <div className="uk-section">

      <div className="uk-container uk-padding">
        <h1 className="uk-margin-large-top">
          ¡Hola {first_name}!
        </h1>

        { confirmed ? (
            parseInt(confirmed_guests) > 0 ? 
              <h4>Estos son tus boletos, por favor muéstralos a la entrada</h4> 
            : <h4>Este es tu boleto, por favor muéstralo a la entrada</h4>
          ) : null }

        { confirmed ? (
            <div className="uk-height-medium uk-flex uk-flex-middle uk-flex-center">
              <QRCode value={`http://paulayangel.com/guest/${id}`} size={196} />
            </div>
          ) : (
            <div className="uk-height-medium uk-flex uk-flex-middle uk-flex-center">
              <img src={upset} width="196" alt=""/>
            </div>
          )
        }


        { confirmed ? (
            parseInt(confirmed_guests) > 0 ? 
              <div>
                <h4>Cantidad de boletos: {1+parseInt(confirmed_guests)}</h4>
                <h4>Mesa: {table}</h4> 
                <h4 className="uk-margin-top">¡Pásenla genial, {first_name}!</h4>
                <h4 className="uk-margin-top">Gracias por acompañarnos</h4>
              </div>
            : 
              <div>
                <h4>Cantidad de boletos: {1+parseInt(confirmed_guests)}</h4>
                <h4>Mesa: {table}</h4>
                <h4 className="uk-margin-top">¡Pásala genial, {first_name}!</h4>
                <h4 className="uk-margin-top">Gracias por acompañarnos</h4>
              </div>
          ) : <h4>No confirmaste, en caso de asistir por favor contacta a alguno de los novios</h4> }
      </div>

    </div>
  )
}

export default tickettTemplate;
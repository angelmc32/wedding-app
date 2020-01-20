import React, { useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'

import { FirebaseContext } from "../components/Firebase"

const Login = () => {

  const [ formValues, setFormValues ] = useState({email: '', password: ''});
  const [ errorMessage, setErrorMessage ] = useState('');
  const { user, setUser, firebase } = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.login({email: formValues.email, password: formValues.password})
    .then( res => {
      console.log(res)
      setUser(res.user);
      navigate('/guests');
    })
    .catch( error => {
      setErrorMessage(error.message)
    });
  }

  const handleInputChange = (event) => {
    event.persist();
    setErrorMessage('');
    setFormValues( currentValues => ({
      ...currentValues,
      [event.target.name]: event.target.value
    }))
  }
  
  return (
      <div id="login" className="uk-section">
        
        <div className="uk-container uk-height-1-1 uk-padding-large">
        <h2>Inicia sesión</h2>
        <form className="uk-form-stacked uk-margin" onSubmit={handleSubmit}>

          <div className="uk-margin">
            <label className="uk-form-label">Correo Electrónico:</label>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input required className="uk-input" value={formValues.email} name="email" placeholder="Correo Electrónico" type="email" onChange={handleInputChange}/>
            </div>
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Contraseña:</label>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input required className="uk-input" value={formValues.password} name="password" placeholder="Contraseña" type="password" onChange={handleInputChange}/>
            </div>
          </div>

          { !!errorMessage && 
            <p className="uk-margin uk-text-danger">{errorMessage}</p>
          }

          <div className="uk-margin-large">
            <button className="uk-button uk-button-primary uk-border-pill" type="submit">
              Iniciar Sesión
            </button>
          </div>
          
        </form>
        </div>
      </div>
  )
}

export default Login
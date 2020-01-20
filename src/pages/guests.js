import React, { useState, useEffect, useContext } from "react"
import { Link, graphql, navigate } from "gatsby"
import { FirebaseContext, useAuth } from '../components/Firebase'
import UIkit from 'uikit'; 

const Guests = (props) => {

  const { user, firebase, loading } = useContext(FirebaseContext);
  const [ guests, setGuests ] = useState([]);
  const [ showGuestForm, setShowGuestForm] = useState(false);
  const [ formValues, setFormValues ] = useState({first_name: '', last_name: '', email: '', plus_guests: '', table: '', code: 'testcode', confirmed: false});
  let guestArray = [];

  useEffect( () => {

    if (!user) navigate('/login'); 
    props.data.allGuest.edges.forEach( node => guestArray.push(node.node))
    setGuests(guestArray);

  }, []);

  const toggleGuestForm = () => {setShowGuestForm(!showGuestForm); console.log(showGuestForm)}

  const randomString = (length, chars) => {
    let mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    let result = '';
    for (let i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
  }

  const handleSubmit = (event) => {

    let guestQuery = [];
    let code = randomString(8, '#aA');
    event.preventDefault();

    firebase.db.collection('guests').doc().set({
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      plus_guests: formValues.plus_guests,
      table: formValues.table,
      code: code,
      confirmed: formValues.confirmed
    })
    .then( res => {

      firebase.db.collection('guests').get()
      .then( querySnapshot => {

        querySnapshot.forEach( doc => {
          guestQuery.push(doc.data())
          console.log(guestQuery);
        })

        setGuests(guestQuery);

      })

      UIkit.notification({
        message: `<span uk-icon='close'></span> Invitado creado exitosamente`,
        pos: 'bottom-center',
        status: 'success'
      });

    })
    .catch( error => {

      UIkit.notification({
        message: `<span uk-icon='close'></span> ${error.message}`,
        pos: 'bottom-center',
        status: 'danger'
      });

    });

    toggleGuestForm();
  }

  const handleInputChange = (event) => {
    event.persist();
    if(event.target.type === 'number') event.target.value = parseInt(event.target.value);
    setFormValues( currentValues => ({
      ...currentValues,
      [event.target.name]: event.target.value
    }))
  }


  return (
    <div className="uk-section">

      <div className="uk-container uk-padding">

        <h2>Invitados</h2>

        <button className="uk-button uk-button-default uk-border-pill" onClick={toggleGuestForm}>
          + Agregar Invitados
        </button>

        { showGuestForm ? 
          (
            <form className="uk-margin uk-flex uk-flex-wrap uk-flex-middle uk-child-width-1-5@m" onSubmit={handleSubmit}>
              <div>
                  <input className="uk-input" name="first_name" type="text" placeholder="Nombre" onChange={handleInputChange} required />
              </div>
              <div>
                  <input className="uk-input" name="last_name" type="text" placeholder="Apellido" onChange={handleInputChange} required />
              </div>
              <div>
                  <input className="uk-input" name="email" type="email" placeholder="E-mail" onChange={handleInputChange} required />
              </div>
              <div>
                  <input className="uk-input" name="plus_guests" type="number" placeholder="Adicionales" onChange={handleInputChange} />
              </div>
              <div>
                  <input className="uk-input" name="table" type="number" placeholder="Mesa" onChange={handleInputChange} />
              </div>
              <div className="uk-width-1-1 uk-margin">
                <button className="uk-button uk-button-primary uk-border-pill">
                  Agregar invitado
                </button>
              </div>
            </form>

          ) : null
        }

        <table className="uk-table uk-table-striped uk-table-hover">
          <thead>
            <tr>
              <th className="uk-text-center">Nombre</th>
              <th className="uk-text-center uk-visible@s">E-mail</th>
              <th className="uk-text-center uk-visible@s">Adicionales</th>
              <th className="uk-text-center uk-visible@s">Código</th>
              <th className="uk-text-center uk-visible@s">Mesa</th>
              <th className="uk-text-center">Confirmado</th>
            </tr>
          </thead>
          <tbody>
            { guests ? 
                guests.map( (guest, index) => 
                  <tr key={index}>
                    
                    <td className="uk-text-center">{guest.first_name} {guest.last_name}</td>
                    <td className="uk-text-center uk-visible@s">{guest.email}</td>
                    <td className="uk-text-center uk-visible@s">{guest.plus_guests}</td>
                    <td className="uk-text-center uk-visible@s">{guest.code}</td>
                    <td className="uk-text-center uk-visible@s">{guest.table}</td>
                    <td className="uk-text-center">{guest.confirmed ? <span className="uk-text-success">Sí</span> : <span className="uk-text-danger">No</span>}</td>
                    <td><button className="uk-button-primary uk-border-pill uk-button-small uk-visible@s">editar</button></td>
                  </tr>
                )
              : <tr>
                  <td>Cargando</td>
                  <td>Cargando</td>
                  <td>Cargando</td>
                  <td>Cargando</td>
                  <td>Cargando</td>
                  <td>Cargando</td>
                </tr>
            }
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default Guests

export const query = graphql`
{
  allGuest {
    edges {
      node {
        first_name
        last_name
        email
        confirmed
        code
      }
    }
  }
}
`
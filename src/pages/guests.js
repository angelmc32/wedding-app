import React, { useState, useEffect, useContext } from "react"
import { Link, graphql, navigate } from "gatsby"
import { FirebaseContext, useAuth } from '../components/Firebase'
import Searchbar from '../components/Searchbar'
import UIkit from 'uikit'; 

const Guests = (props) => {

  const { user, firebase, loading } = useContext(FirebaseContext);
  const [ guests, setGuests ] = useState([]);
  const [ showGuestForm, setShowGuestForm] = useState(false);
  const [ formValues, setFormValues ] = useState({first_name: '', last_name: '', email: '', plus_guests: '', table: '', code: 'testcode', confirmed: false, confirmed_guests: ''});
  const [ searchResults, setSearchResults ] = useState([]);
  let friendConfirmed = 0;
  let plusConfirmed = 0;
  let guestArray = [];

  useEffect( () => {

    if (!user) navigate('/login'); 

    props.data.allGuest.edges.forEach( node => guestArray.push(node.node))
    setGuests(guestArray);

    if ( firebase ) {

      let guestQuery = [];

      firebase.db.collection('guests').get()
      .then( querySnapshot => {

        querySnapshot.forEach( doc => {

          let data = doc.data();
          data.id = doc.id;

          guestQuery.push(data)

        })

        setGuests(guestQuery);
        setSearchResults(guestQuery);
        console.log(guests)
        console.log(guestQuery)

      })

    }

    if ( friendConfirmed == 0 ) {

      for( let i = 0 ; i < guests.length ; i++ ) {
        if (guests[i].confirmed) {
          friendConfirmed += 1;
          plusConfirmed += parseInt(guests[i].confirmed_guests);
        }
      }

    }
    
  }, [firebase]);

  const toggleGuestForm = () => {setShowGuestForm(!showGuestForm)}

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
      confirmed: formValues.confirmed,
      confirmed_guests: '0'
    })
    .then( res => {

      firebase.db.collection('guests').get()
      .then( querySnapshot => {

        querySnapshot.forEach( doc => {

          let data = doc.data();
          data.id = doc.id;

          guestQuery.push(data)

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

  const sendInvitation = (guest) => {
    
    firebase.sendInvitation({
      first_name: guest.first_name,
      last_name: guest.last_name,
      code: guest.code,
      plus_guests: guest.plus_guests,
      email: guest.email
    })
    .then( res => console.log(res) )
    .catch( error => console.log(error) )

  }

  const sendTickets = (guest) => {

    console.log(guest)
    
    firebase.sendTickets({
      first_name: guest.first_name,
      last_name: guest.last_name,
      id: guest.id,
      email: guest.email
    })
    .then( res => console.log(res) )
    .catch( error => console.log(error) )

  }

  return (
    <div className="uk-section">

      <div className="uk-container uk-padding-remove">

        <h2 className="uk-margin-large-top">Invitados</h2>

        <button className="uk-button uk-button-default uk-border-pill uk-width-4-5 uk-width-1-3@m" onClick={toggleGuestForm}>
          + Agregar Invitados
        </button>

        { showGuestForm ? 
          (
            <form className="uk-margin uk-flex uk-flex-wrap uk-flex-center uk-width-1-1@s uk-child-width-4-5 uk-child-width-1-5@m uk-padding" onSubmit={handleSubmit}>

                  <input className="uk-input" name="first_name" type="text" placeholder="Nombre" onChange={handleInputChange} required />
                
              
                  <input className="uk-input" name="last_name" type="text" placeholder="Apellido" onChange={handleInputChange} required />
              
                  <input className="uk-input" name="email" type="email" placeholder="E-mail" onChange={handleInputChange} />
              
                  <input className="uk-input" name="plus_guests" type="number" placeholder="Adicionales" onChange={handleInputChange} />
              
                  <input className="uk-input" name="table" type="number" placeholder="Mesa" onChange={handleInputChange} />
              
              <div className="uk-width-1-1 uk-margin">
                <button className="uk-button uk-button-primary uk-border-pill">
                  Agregar invitado
                </button>
              </div>
            </form>

          ) : null
        }

        <div className="uk-padding">
          <Searchbar searchResults={searchResults} setSearchResults={setSearchResults} guests={guests} />
        </div>

        <table className="uk-table uk-table-striped uk-table-hover uk-width-4-5">
          <thead className="uk-width-1-1">
            <tr>
              <th className="uk-text-center">Nombre</th>
              <th className="uk-text-center uk-visible@s">E-mail</th>
              <th className="uk-text-center uk-visible@s">Adicionales</th>
              <th className="uk-text-center uk-visible@s">Código</th>
              <th className="uk-text-center uk-visible@s">Mesa</th>
              <th className="uk-text-center">Confirmado</th>
              <th className="uk-text-center">Invitados confirmados</th>
            </tr>
          </thead>
          <tbody>
            { guests ? 
                searchResults.map( (guest, index) => 
                  <tr key={index}>
                    
                    <td className="uk-text-center">{guest.first_name} {guest.last_name}</td>
                    <td className="uk-text-center uk-visible@s">{guest.email}</td>
                    <td className="uk-text-center uk-visible@s">{guest.plus_guests}</td>
                    <td className="uk-text-center uk-visible@s">{guest.code}</td>
                    <td className="uk-text-center uk-visible@s">{guest.table}</td>
                    <td className="uk-text-center">{guest.confirmed ? <span className="uk-text-success">Sí</span> : <span className="uk-text-danger">No</span>}</td>
                    <td className="uk-text-center uk-visible@s">{guest.confirmed ? <span className="uk-text-success">{guest.confirmed_guests}</span> : <span className="uk-text-danger">0</span>}</td>
                    <td><button className="uk-button-primary uk-border-pill uk-button-small uk-visible uk-margin-right" onClick={(event) => sendTickets(guest)}>Enviar boletos</button></td>
                  </tr>
                )
              : <tr>
                  <td>Cargando</td>
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
        id
      }
    }
  }
}
`
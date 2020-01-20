import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import bulldog from '../images/bulldogs.svg'
import { FirebaseContext, useAuth } from './Firebase'

const Navbar = () => {

  const { firebase, user } = useContext(FirebaseContext);

  const handleLogoutClick = () => {
    firebase.logout()
    .then( () => navigate('/login'))
  }

  const closeMenu = () => {
    const toggle = document.getElementById('toggle');
    toggle.checked = !toggle.checked;
  }

  return (
    <nav className="uk-navbar uk-navbar-container uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
      
      <ul className="uk-navbar-nav uk-height-1-1">
          <li className="uk-active uk-flex uk-flex-middle">
            <Link to="/#slideshow">
              <div className="uk-margin-left">
                  <img src={bulldog} width="64px" height="64px" alt="" className="uk-img" />
              </div>
            </Link>
          </li>
          <li className="uk-active uk-flex uk-flex-middle uk-height-1-1">
              <Link id="PA" to="/#slideshow"><h3><span style={{color: "#000000"}}>P</span> & <span style={{color: "#000000"}}>Á</span></h3></Link>
          </li>
      </ul>

      <label htmlFor="toggle" className="uk-margin-right uk-height-1-1"><span uk-icon="menu"></span></label>
      <input type="checkbox" id="toggle"/>
      
      <ul className="menu uk-navbar-nav">
          <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle" onClick={closeMenu} ><Link to="/#details">Fecha/Lugar</Link></li>
          <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle" onClick={closeMenu} ><Link to="/#additional">Información</Link></li>
          <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle" onClick={closeMenu} ><Link to="/#messages">Confirma</Link></li>
          { user ? 
            <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><button className="uk-button uk-button-primary uk-border-pill" onClick={handleLogoutClick} >Logout</button></li>
            :
            <div></div>
          }
      </ul>

    </nav>
  )
}

export default Navbar
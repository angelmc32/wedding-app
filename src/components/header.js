import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import bulldog from '../images/bulldogs.svg'
import { FirebaseContext, useAuth } from './Firebase'

const Header = ({ siteTitle }) => {

  const { firebase, user } = useContext(FirebaseContext);

  const handleLogoutClick = () => {
    firebase.logout()
    .then( () => navigate('/login'))
  }

  return (
    <nav className="uk-navbar uk-navbar-container uk-flex uk-flex-between uk-flex-middle uk-flex-wrap" uk-sticky="bottom: #offset">
      
      <ul className="uk-navbar-nav">
          <li className="uk-active uk-flex uk-flex-middle">
            <Link to="/">
              <div className="uk-margin-left">
                  <img src={bulldog} width="64px" height="64px" alt="" className="uk-img" />
              </div>
            </Link>
          </li>
          <li className="uk-active uk-flex uk-flex-middle uk-height-1-1">
              <Link id="PA" to="/"><h3><span style={{color: "#000000"}}>P</span> & <span style={{color: "#000000"}}>Á</span></h3></Link>
          </li>
      </ul>

      <label htmlFor="toggle" className="uk-margin-right uk-height-1-1"><span uk-icon="menu"></span></label>
      <input type="checkbox" id="toggle"/>
      
      <ul className="menu uk-navbar-nav">
          <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><Link to="/#details">Fecha/Lugar</Link></li>
          <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><Link to="/#additional">Información</Link></li>
          <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><Link to="/#messages">Confirma</Link></li>
          { user ? 
            <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><button className="uk-button uk-button-primary uk-border-pill" onClick={handleLogoutClick} >Logout</button></li>
            :
            <div></div>
          }
      </ul>

    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bulldog from '../images/bulldogs.svg'

const Header = ({ siteTitle }) => (
  <nav className="uk-navbar uk-navbar-container uk-flex uk-flex-between uk-flex-middle uk-flex-wrap" uk-sticky="bottom: #offset">
    
    <ul className="uk-navbar-nav">
        <li className="uk-active uk-flex uk-flex-middle">
            <div className="uk-margin-left">
                <img src={bulldog} width="64px" height="64px" alt="" className="uk-img" />
            </div>
        </li>
        <li className="uk-active uk-flex uk-flex-middle uk-height-1-1">
            <a id="PA" href="#slideshow"><h3><span style={{color: "#000000"}}>P</span> & <span style={{color: "#000000"}}>Á</span></h3></a>
        </li>
    </ul>

    <label htmlFor="toggle" className="uk-margin-right uk-height-1-1"><span uk-icon="menu"></span></label>
    <input type="checkbox" id="toggle"/>
    
    <ul className="menu uk-navbar-nav">
        <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><a href="#details">Fecha/Lugar</a></li>
        <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><a href="#additional">Información</a></li>
        <li className="uk-active uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"><a href="#messages">Confirma</a></li>
    </ul>

  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

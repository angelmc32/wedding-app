import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bulldog from '../images/bulldog.svg'

const Header = ({ siteTitle }) => (
  <nav className="uk-navbar uk-navbar-container">

    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li className="uk-active uk-flex uk-flex-middle">
                <div className="uk-margin-left">
                    <img src={bulldog} width="40px" height="40px" alt="" className="uk-img" />
                </div>
                <a href="#">P&A</a>
            </li>
        </ul>

    </div>

    <div className="uk-navbar-right">

        <label htmlFor="toggle"><span uk-icon="menu"></span></label>
        <input type="checkbox" id="toggle"/>

        <div className="menu">
            <a href="#">Detalles</a>
            <a href="#">Donde</a>
            <a href="#">Contacto</a>
        </div>

        {/* <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Detalles</a></li>
            <li className="uk-active"><a href="#">Donde</a></li>
            <li className="uk-active"><a href="#">Contacto</a></li>            
            &#9776;
        </ul> */}

    </div>

</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="uk-navbar uk-navbar-container">

    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Paula y Angel</a></li>
        </ul>

    </div>

    <div className="uk-navbar-right">

        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

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

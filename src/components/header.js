import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import bulldog from '../images/bulldogs.svg'
import { FirebaseContext, useAuth } from './Firebase'

const Header = ({ siteTitle }) => {

  return (
    <div></div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

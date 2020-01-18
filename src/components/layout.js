import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FirebaseContext, useAuth } from './Firebase'
// import FirebaseContext from './Firebase/context'
// import useAuth from './Firebase/useAuth'


import UIkit from "uikit"
import icons from "uikit/dist/js/uikit-icons"
import "uikit/dist/css/uikit.min.css"

import Header from "./header"
import "./layout.css"
import firebaseConfig from "./Firebase/config"

const Layout = ({ children, props }) => {
  const { user, firebase, loading } = useAuth();

  useEffect(() => {
    UIkit.use(icons)
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <FirebaseContext.Provider value={{user, firebase, loading}}>
      
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      
    </FirebaseContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

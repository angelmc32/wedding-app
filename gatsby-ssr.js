const React = require("react");
const Layout = require("./src/components/layout").default

exports.wrapPageElement  = ({element, props}) => {
  
  React.useEffect( () => {
    try {
      this.UIkit = require("uikit/dist/js/uikit");
      this.Icons = require("uikit/dist/js/uikit-icons");
      this.UIkit.use(this.Icons);
    } catch (e) {
      console.error(e);
    }
  }
  )

  return <Layout {...props} >{element}</Layout>
}
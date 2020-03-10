const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  const guestTemplate = path.resolve('src/templates/guestTemplate.js')
  const ticketTemplate = path.resolve('src/templates/ticketTemplate.js')

  return graphql(`
    {
      allGuest {
        edges {
          node {
            confirmed
            first_name
            last_name
            plus_guests
            table
            confirmed_guests
            id
          }
        }
      }
    }
  `)
  .then( (result) => {

    console.log(result)

    if ( result.errors ) throw result.errors;

    result.data.allGuest.edges.forEach( guest => {
      createPage({
        path: `/guest/${guest.node.id}`,
        component: guestTemplate,
        context: guest.node
      })
    });

    result.data.allGuest.edges.forEach( guest => {
      createPage({
        path: `/ticket/${guest.node.id}`,
        component: ticketTemplate,
        context: guest.node
      })
    });
    
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /uikit/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
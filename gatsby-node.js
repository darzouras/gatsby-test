const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/components/blogpost.js`)

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date,
              title
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: "blog/" + node.frontmatter.title.replace(/\s+/g, '-'),
                component: blogPostTemplate,
                context: {}, // additional data can be passed via context
            })
        })
    })
}
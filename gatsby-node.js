const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/components/blogpost.js`)

    return graphql(`
    {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//blog//"}}) {
            edges {
                node {
                    frontmatter {
                        date
                        description
                        title
                    }
                    html
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
                context: {
                    node
                }, // additional data can be passed via context
            })
        })
    })
}
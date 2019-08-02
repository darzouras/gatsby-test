import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default ({ data }) => {
    const { edges } = data.allMarkdownRemark
    console.log(edges)
    return (
        <Layout>

            <Header headerText="Blog" />

            {edges.map(edge => {
                const slug = "/blog/" + edge.node.frontmatter.title.replace(/\s+/g, '-')
                console.log(slug)
                return (
                    <div className="blog-post">
                        <h2><Link to={slug}>{edge.node.frontmatter.title}</Link></h2>
                        <div dangerouslySetInnerHTML={{ __html: edge.node.html }}>
                        </div>
                    </div>
                )
            })}

        </Layout>
    )
}

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//blog//"}}, sort: {fields: frontmatter___date}) {
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
`
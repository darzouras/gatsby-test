import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default ({ data }) => {
    const { edges } = data.allMarkdownRemark
    console.log(edges)
    return (
        <Layout>

            <Header headerText="Blog" />

            {edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <div className="blog-post">
                        <h2>{frontmatter.title}</h2>
                        <p>
                            {edge.node.html}
                        </p>
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
import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default ({ data }) => {
    const { edges } = data.allMarkdownRemark

    return (
        <Layout>

            <Header headerText="Blog" />

            {edges.map((edge, i) => {
                const slug = "/blog/" + edge.node.frontmatter.title.replace(/\s+/g, '-')

                return (
                    <div className="blog-post" key={i}>
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
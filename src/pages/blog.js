import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const BlogLink = styled.h2`
    a {
        color: #ce0e2d;
        font-size: 2em;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
`

const BlogListing = styled.article`
    margin-bottom: 50px;
`

export default ({ data }) => {
    const { edges } = data.allMarkdownRemark

    return (
        <Layout>

            <Header headerText="Blog" />

            {edges.map((edge, i) => {
                const slug = "/blog/" + edge.node.frontmatter.title.replace(/\s+/g, '-')

                return (
                    <BlogListing key={i}>
                        <BlogLink><Link to={slug}>{edge.node.frontmatter.title}</Link></BlogLink>
                        <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
                    </BlogListing>
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
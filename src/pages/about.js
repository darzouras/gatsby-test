import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default ({ data }) => {
    const about = data.allMarkdownRemark.edges[0].node
    console.log(about)

    return (
        < Layout >

            <Header headerText={about.frontmatter.title} />

            <p>{about.frontmatter.description}</p>

            <div dangerouslySetInnerHTML={{ __html: about.html }}></div>

            <p>{about.frontmatter.testfield}</p>

            <ul>
                {about.frontmatter.testlist.map(edge => {
                    return (
                        <li>{edge}</li>
                    )
                })}
            </ul>

        </Layout >
    )
}

export const query = graphql`
    query AboutQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about/"}}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        testfield
                        testlist
                    }
                    html
                }
            }
        }
    }
`
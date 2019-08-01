import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

const Template = (props) => {

  const data = props.data.markdownRemark
  console.log(data)

  return (
    <Layout>
      <Header headerText={data.frontmatter.title} />

      <div className="blogpost"
        dangerouslySetInnerHTML={{ __html: data.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($date: Date) {
        markdownRemark(frontmatter: {date: {eq: $date}}) {
        html
      frontmatter {
        title
        date
      }
    }
  }
`

export default Template
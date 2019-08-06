import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default (props) => {
  const data = props.pageContext.node
  // console.log(data)

  return (
    <Layout>
      <Header headerText={data.frontmatter.title} />

      <div dangerouslySetInnerHTML={{ __html: data.html }}>
      </div>
    </Layout>
  )
}
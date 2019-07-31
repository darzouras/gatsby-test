import React from "react"
import styles from "./blogpost.module.css"

export default ({ data }) => (
    <div className={styles.blogWrapper} >
        <h1>title?</h1>
    </div>
)

export const query = graphql`
    query {
        
    }
`
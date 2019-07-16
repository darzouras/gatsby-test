import React from "react"
import styles from "./header.module.css"

export default (props) => (
    < div className={styles.header} >
        <h1>{props.headerText}</h1>
    </div >
)
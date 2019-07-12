import React from "react"
import containerStyles from "./links.module.css"

export default ({ children }) => (
    <div className={containerStyles.container}>{children}</div>
)
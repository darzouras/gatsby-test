import React from "react"
import styles from "./window.module.css"

export default ({ children }) => (
    <div id="window" className={styles.window}>
        <div className={styles.window_inner}>
            {children}
        </div>
    </div>
)
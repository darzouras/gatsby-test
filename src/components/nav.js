import React from "react"
/* import Links from "../components/links" */
import { Link } from "gatsby"
import styles from "./nav.module.css"

export default () => (
    <nav id="nav" className={styles.nav}>
        <div className={styles.nav_pull_mobile}>
            ^
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
        </ul>

        <div id="nav-pull" className={styles.nav_pull}>
            v
        </div>
    </nav>
)
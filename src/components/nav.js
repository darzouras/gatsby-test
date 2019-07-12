import React from "react"
/* import Links from "../components/links" */
import { Link } from "gatsby"
import styles from "./nav.module.css"

export default () => (
    <nav id="nav" className={styles.nav}>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/about-css-modules/">CSS Modules</Link>
            </li>
        </ul>

        <div id="nav-pull" className={styles.nav_pull}>
            v
        </div>
    </nav>
)
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
                <Link to="/blog/">Blog</Link>
            </li>
        </ul>
    </nav>
)
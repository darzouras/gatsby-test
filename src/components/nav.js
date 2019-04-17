import React from "react"
import { Link } from "gatsby"

export default() => (
    <nav>
        <h2>Pages</h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
        </ul>
    </nav>
)
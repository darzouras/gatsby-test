import React from "react"
import Nav from "../components/nav"

export default ({ children }) => (
    <div class="main">
        <Nav />

        <div class="content">
            {children}
        </div>
    </div>
)
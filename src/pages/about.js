import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"

export default() => (
    <div style={{ color: `teal` }}>
        <Header headerText="Gatsby stuff" />
        <p>Such wow. Very React.</p>

        <Nav />
    </div>
)
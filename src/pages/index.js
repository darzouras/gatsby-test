import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"

export default () => (
    <div style={{ color: `purple` }}>
        <Header headerText="Hello Header!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />

        <Nav />
    </div>
)
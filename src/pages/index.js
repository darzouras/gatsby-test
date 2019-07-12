import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"

export default () => (
    <div style={{ color: `purple` }}>
        <Header headerText="Hello Header!" />
        <p>What a world.</p>
        <img src="https://placekitten.com/400/200" alt="" />

        <Nav />
    </div>
)
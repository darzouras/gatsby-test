import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"

export default () => (
    <div class="main">

        <Nav />

        <Header headerText="Hello test!" />

        <p>What a world.</p>
        <img src="https://placekitten.com/400/200" alt="" />
    </div>
)
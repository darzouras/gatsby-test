import React from "react"
import Nav from "../components/nav"
import Window from "../components/window"


export default ({ children }) => (
    <div>

        <Nav />

        <Window>
            <div class="content">

                {children}

            </div>
        </Window>

    </div>
)
import React from "react"
import Nav from "../components/nav"
import Window from "../components/window"
import { css } from "@emotion/core"

const contentStyle = css`
    margin: 25px auto;
    width: 90%;
`

const gridStyle = css`
    @media (min-width: 768px) {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template-columns: calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5);
        grid-template-rows: calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5);
        align-items: center;
        justify-items: center;
    }
`

export default ({ children }) => {

    return (
        <div css={gridStyle}>

            <Nav />

            <Window>
                <div id="content" css={contentStyle}>

                    {children}

                </div>
            </Window>
        </div>
    )
}
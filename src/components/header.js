import React from "react"
import { css } from "@emotion/core"

const headerStyle = css`
    width: 100%;
`

export default (props) => (
    < div css={headerStyle} >
        <h1>{props.headerText}</h1>
    </div >
)
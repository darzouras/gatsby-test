import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"

const headerStyle = styled.div`
    width: 100%;
`

export default (props) => (
    < div css={headerStyle} >
        <h1>{props.headerText}</h1>
    </div >
)
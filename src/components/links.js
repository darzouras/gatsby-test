import React from "react"
import styled from "@emotion/styled"

const linkStyle = styled.div`
    margin: 3rem auto;
    max-width: 600px;
`

export default ({ children }) => (
    <div css={linkStyle}>{children}</div>
)
import React from "react"
import styled from "@emotion/styled"

const Window = styled.main`
    position: relative;
    width: 90%;
    margin: 25px auto;
    background: #e0e0ce;
    color: #111;
    border-radius: 10px;
    border: 3px solid #111;
    scrollbar-color: #ce0e2d transparent;
    scrollbar-3dlight-color: transparent;
    scrollbar-arrow-color: transparent;
    scrollbar-base-color: transparent;
    scrollbar-darkshadow-color: transparent;
    scrollbar-face-color: #ce0e2d;
    scrollbar-highlight-color: transparent;
    scrollbar-shadow-color: transparent;

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #ce0e2d;
    }
    
    @media (min-width:768px) {
        grid-column: 2/6;
        grid-row: 1/5;
        height: 60vh;
        overflow-y: auto;
        z-index: 1;
    }
`


export default ({ children }) => (
    <Window>
        {children}
    </Window>
)
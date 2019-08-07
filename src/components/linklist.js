import React from "react"
import styled from "@emotion/styled"

const LinkWrapper = styled.aside`
    position: relative;
    width: 90%;
    margin: 25px auto;
    color:  #e0e0ce;
    background: #3d2c49;
    border-radius: 10px;
    border: 3px solid #3d2c49;
    min-height: 110px;
    font-size: 1.2em;

    @media (min-width: 768px) {
        grid-column: 1/3;
        grid-row: 3/6;
    }
`

const LinkList = styled.ul`
    margin: 25px auto;
    width: 90%;
    list-style: none;
`

const LinkListItem = styled.li`
    margin-bottom: 5px;

    a {
        color: #e0e0ce;
        text-decoration: none;
    }
`

export default () => (
    <LinkWrapper>
        <LinkList>
            <LinkListItem>
                <a href="https://darzouras.com" target="_blank">DarZouras.com</a>
            </LinkListItem>
            <LinkListItem>
                <a href="https://github.com/darzouras" target="_blank">Github</a>
            </LinkListItem>
            <LinkListItem>
                <a href="http://linkedin.com/in/darlenezouras" target="_blank">LinkedIn</a>
            </LinkListItem>
            <LinkListItem>
                <a href="https://twitter.com/darzouras" target="_blank">Twitter</a>
            </LinkListItem>
            <LinkListItem>
                <a href="https://www.instagram.com/darzouras/" target="_blank">Instagram</a>
            </LinkListItem>
        </LinkList>
    </LinkWrapper>
)
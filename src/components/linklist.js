import React from "react"
import styled from "@emotion/styled"
import { FaHandPeace, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const LinkWrapper = styled.aside`
    position: relative;
    margin: 25px;
    color:  #e0e0ce;
    background: #3d2c49;
    border-radius: 10px;
    font-size: 1.7em;

    @media (min-width: 768px) {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        border-radius: 0px;
        margin: 0;
    }
`

const LinkList = styled.ul`
    padding: 25px;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
`

const LinkListItem = styled.li`
    margin-right: 25px;

    a {
        color: #e0e0ce;
        text-decoration: none;
    }
`

export default () => (
    <LinkWrapper>
        <LinkList>
            <LinkListItem>
                <a href="https://darzouras.com" target="_blank" rel="noopener noreferrer">< FaHandPeace /></a>
            </LinkListItem>
            <LinkListItem>
                <a href="https://github.com/darzouras" target="_blank" rel="noopener noreferrer">< FaGithub /></a>
            </LinkListItem>
            <LinkListItem>
                <a href="http://linkedin.com/in/darlenezouras" target="_blank" rel="noopener noreferrer">< FaLinkedin /></a>
            </LinkListItem>
            <LinkListItem>
                <a href="https://twitter.com/darzouras" target="_blank" rel="noopener noreferrer">< FaTwitter /></a>
            </LinkListItem>
            <LinkListItem>
                <a href="https://www.instagram.com/darzouras/" target="_blank" rel="noopener noreferrer">< FaInstagram /></a>
            </LinkListItem>
        </LinkList>
    </LinkWrapper>
)
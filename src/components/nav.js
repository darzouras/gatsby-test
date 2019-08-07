import React from "react"
/* import Links from "../components/links" */
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Navbar = styled.nav`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 99;
`

const Navlist = styled.ul`
    list-style: none;
    margin: 0;
    padding: 15px 25px;
    background: #ce0e2d;
    border-radius: 10px 0px 0px 0px;
`

const Navlink = styled.li`
    padding: 0;
    margin: 5px 0;
    font-family: 'VT323';
    font-size: 1.7em;
    letter-spacing: 3px;
    text-align: right;

    a {
        color: #e0e0ce;
        text-decoration: none;
    }
`

export default () => (
    <Navbar>
        <Navlist>
            <Navlink>
                <Link to="/">Home</Link>
            </Navlink>
            <Navlink>
                <Link to="/about/">About</Link>
            </Navlink>
            <Navlink>
                <Link to="/blog/">Blog</Link>
            </Navlink>
        </Navlist>
    </Navbar>
)
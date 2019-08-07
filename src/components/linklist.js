import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { FaHandPeace, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const LinkWrapper = styled.aside`
    position: relative;
    width: 90%;
    margin: 0 auto 25px;
    color:  #e0e0ce;
    background: #111;
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

    @media (min-width:768px) {
        padding: 15px;
    }
`

const LinkListItem = styled.li`
    margin-right: 25px;

    a {
        color: #e0e0ce;
        text-decoration: none;
    }
`

const LinkComponent = ({ data }) => {
    const links = data.allMarkdownRemark.nodes[0].frontmatter
    return (
        < LinkWrapper >
            <LinkList>
                {links.homepage &&
                    <LinkListItem>
                        <a href={links.homepage} target="_blank" rel="noopener noreferrer">< FaHandPeace /></a>
                    </LinkListItem>
                }

                {links.github &&
                    <LinkListItem>
                        <a href={links.github} target="_blank" rel="noopener noreferrer">< FaGithub /></a>
                    </LinkListItem>
                }

                {links.linkedin &&
                    <LinkListItem>
                        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">< FaLinkedin /></a>
                    </LinkListItem>
                }

                {links.twitter &&
                    <LinkListItem>
                        <a href={links.twitter} target="_blank" rel="noopener noreferrer">< FaTwitter /></a>
                    </LinkListItem>
                }

                {links.instagram &&
                    <LinkListItem>
                        <a href={links.instagram} target="_blank" rel="noopener noreferrer">< FaInstagram /></a>
                    </LinkListItem>
                }

            </LinkList>
        </ LinkWrapper >
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/links/"}}, limit: 1) {
                    nodes {
                        frontmatter {
                            homepage
                            github
                            linkedin
                            twitter
                            instagram
                        }
                    }
                }
            }
        `}

        render={data => <LinkComponent data={data} />}
    />
)

import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {container, heading, navLinkItem, navLinks, navLinkText} from "../styles/layout.css";
import {PropsWithChildren} from "react";

interface Props {
    pageTitle: string
}

const Layout = ({pageTitle, children}: PropsWithChildren<Props>) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div className={container}>
            <header className={heading}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                </ul>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>
                        About
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkText}>
                        Blog
                    </Link>
                </li>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
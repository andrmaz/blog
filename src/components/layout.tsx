import * as React from 'react'
import {Link} from 'gatsby'
import {container, heading, navLinkItem, navLinks, navLinkText} from "../styles/layout.css";
import {PropsWithChildren} from "react";

interface Props {
    pageTitle: string
}
const Layout = ({pageTitle, children}: PropsWithChildren<Props>) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
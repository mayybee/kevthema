import React from "react"
import { Link } from "gatsby"
import '../global.css'

const HeaderLogo = ({title}) => (
        <Link className="hovercolor" to={`/`}>
          {title}
        </Link>
)

const HeaderLinks = () => (
    <div className="grid justify-end items-center gap-8 grid-cols-2">
        <Link className="hovercolor"
          to="/blog">
          Blog
        </Link>
        <Link className="hovercolor"
          to="/about">
          About
        </Link>
    </div>
)

const Header = ({title}) => (
  <header className="flex justify-between">
    <HeaderLogo title={title}/>
    <HeaderLinks/>
  </header>
)

export default Header
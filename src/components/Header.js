import React from "react"
import { Link } from "gatsby"
import '../global.css'

const HeaderLogo = ({title}) => (
        <Link className="hover:text-indigo-500" to={`/`}>
          {title}
        </Link>
)

const HeaderLinks = () => (
    <div className="grid justify-end items-center gap-8 grid-cols-2">
        <Link className="hover:text-indigo-500"
          to="/writing">
          Writing
        </Link>
        <Link className="hover:text-indigo-500"
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
import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as s from './Navbar.module.sass'
import logo from "../img/logo.svg"


const dumb = ({ burger_active_class, toggle_burger_active }) =>
<nav
  className={s.navbar}
  role="navigation"
  aria-label="main-navigation"
>
  <div>
    <Link to='/' title="Home">
      <img src={logo} alt="Meet D Experts" style={{ width: "60px" }} />
    </Link>
  </div>
  <div className={s.title}>Meet D Experts</div>
  <div>
    <button onClick={toggle_burger_active} className={`hamburger hamburger--3dxy ${burger_active_class}`} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
    <div className={s.links}>
      <Link to='/about' title="About">About</Link>
      <Link to='/faqs' title="FAQs">FAQs</Link>
      <Link to='/contact-us' title="Contact Us">Contact Us</Link>
    </div>
  </div>
</nav>

export default () => {
  const [is_open, set_is_open] = useState(false)
  return dumb({
    burger_active_class: is_open ? 'is-active' : '',
    toggle_burger_active: () => set_is_open(!is_open) })
}

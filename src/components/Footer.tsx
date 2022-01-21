import * as React from 'react'
import { Link } from 'gatsby'
import * as s from './Footer.module.sass'


const Footer = () =>
<footer className={s.footer}>
  <ul>
    <li>
      <Link to="/sessions">Sessions</Link>
      <div></div>
    </li>
    <li>
      <Link to="/directory">Directory</Link>
      <div></div>
    </li>
    <li>
      <Link to="/question">Submit a Question</Link>
      <div></div>
    </li>
    <li>
      <Link to="/meet-d-team">Meet D Team</Link>
      <div></div>
    </li>
    <li>
      <Link to="/archives">Archives</Link>
      <div></div>
    </li>
  </ul>
</footer>

export default Footer

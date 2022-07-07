import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import './Header.scss'

function Header() {
  return (
    <main className="header">
      <Link to="/">
        <div className="title">Movie App</div>
      </Link>
      <div className="logo-image">
        <img src={logo} alt="logo" />
      </div>
    </main>
  )
}

export default Header
import React from 'react'
import './Header.scss'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <main className="header">
      <section className="header-logo">
        <img src={logo} alt="movie-logo" />
      </section>
      <Link to="/">
      <div className="title">
          WatchFlix
          <hr className="line" />
      </div>
      </Link>
    </main>
  )
}

export default Header
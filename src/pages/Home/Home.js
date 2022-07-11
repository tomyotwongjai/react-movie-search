import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <a href="/movies">
        <span>Search Movies</span>
      </a>
      <a href="/shows">
        <span>Search Shows</span>
      </a>
    </div>
  )
}

export default Home
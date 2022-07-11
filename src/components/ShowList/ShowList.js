import React from 'react'
import { useSelector } from 'react-redux'
import { getAllShows } from '../../features/ShowSlice/ShowSlice'
import ShowCard from '../ShowCard/ShowCard'
import { useNavigate } from 'react-router-dom'
import './ShowList.scss'

function ShowList() {
  const navigate = useNavigate()
  const shows = useSelector(getAllShows)
  let renderShows = ""

   renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) =>(
      <ShowCard data={show} key={index} />
    ))
   ) : (
    <div className="show-error">
      <h3>{shows.Error}</h3>
    </div>
   )

   const toMovies = () => {
     navigate('/movies')
   }

  return (
    <main className="show-wrapper">
      <button className="to-movies" onClick={toMovies}>Search Movies</button>
      <div className="show-list">
        <h2>Shows</h2>
        <section className="show-container">
          {renderShows}
        </section>
      </div>
    </main>
  )
}

export default ShowList

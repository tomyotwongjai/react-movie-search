import {useEffect} from 'react'
import MovieList from '../MovieList/MovieList'
import { MovieApi } from '../../common/apis/MovieApi'
import BaseApi from '../../common/apis/BaseApi'
import {useDispatch} from 'react-redux'
import { addMovies } from '../../features/MovieSlice/MovieSlice'

function Home() {
  const movieKey = "Harry"
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () =>{
      const response = await BaseApi
      .get(`?apiKey=${MovieApi}&s=${movieKey}&type=movie`)
      .catch((err) =>{
        console.log("Error: ", err)
      })
      dispatch(addMovies(response.data))
    }
    fetchMovies()
  }, [])

  return (
    <div className="home">
      <MovieList />
    </div>
  )
}

export default Home
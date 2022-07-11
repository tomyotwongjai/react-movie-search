import {useEffect} from 'react'
import { ShowList } from '../../components'
import { MovieApi } from '../../common/apis/MovieApi'
import BaseApi from '../../common/apis/BaseApi'
import { useDispatch } from 'react-redux'
import {addShows} from '../../features/ShowSlice/ShowSlice'


function Show() {
    const ShowText = "Friends"
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchShows = async () => {
            const response = await BaseApi
            .get(`?apiKey=${MovieApi}&s=${ShowText}&type=series`)
            .catch((err) => {
                console.log("Error :", err)
            })
            dispatch(addShows(response.data))
        }
        fetchShows()
    }, [])
  return (
    <div>
        <ShowList />
    </div>
  )
}

export default Show
import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './MovieSlice/MovieSlice'
import showreducer from './ShowSlice/ShowSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        shows: showreducer,
    }
})
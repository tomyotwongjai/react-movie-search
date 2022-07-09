import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './MovieSlice/MovieSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
})
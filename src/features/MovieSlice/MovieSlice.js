import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieApi } from "../../common/apis/MovieApi";
import BaseApi from "../../common/apis/BaseApi";


export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",
async () => {
    const movieKey = "Harry"
    const response = await BaseApi.get(`?apiKey=${MovieApi}&s=${movieKey}&type=movie`);
       return response.data
    }
)


const initialState = {
    movies: {}
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
            console.log("Fetch Successfully!");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log("Rejected!");
        }
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;
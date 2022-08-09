/** @format */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieApi } from "../../common/apis/MovieApi";
import BaseApi from "../../common/apis/BaseApi";

// Convert sychronus action creator to asynchronus action creator
export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async () => {
		const movieText = "Harry";
		const response = await BaseApi.get(
			`?apiKey=${MovieApi}&s=${movieText}&type=movie`
		);
		return response.data;
	}
);

// Fetch Movies details Details

export const fetchAsyncMovieDetail = createAsyncThunk(
	"movies/fetchAsyncMoviesDetail",
	async (id) => {
		const response = await BaseApi.get(`?apiKey=${MovieApi}&i=${id}&Plot=full`);
		return response.data;
	}
);

const initialState = {
	movies: {},
	selectMovie: {},
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log("pending");
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("Fulfilled!");
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log("rejected");
		},
		[fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
			console.log("Fetched Successfully!");
			return { ...state, selectMovie: payload };
		},
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectMovie;
export default movieSlice.reducer;

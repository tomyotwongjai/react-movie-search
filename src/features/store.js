/** @format */

import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MovieSlice/MovieSlice";
import showReducer from "./ShowSlice/ShowSlice";

export const store = configureStore({
	reducer: {
		movies: movieReducer,
		shows: showReducer,
	},
});

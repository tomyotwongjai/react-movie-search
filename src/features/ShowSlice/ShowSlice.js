/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieApi } from "../../common/apis/MovieApi";
import BaseApi from "../../common/apis/BaseApi";

export const fetchAsyncShows = createAsyncThunk(
	"shows/fetchAsyncShows",
	async (term) => {
		const response = await BaseApi.get(
			`?apiKey=${MovieApi}&s=${term}&type=series`
		);
		return response.data;
	}
);

// fetch Show details
export const fetchAsyncShowDetail = createAsyncThunk(
	"shows/fetchAsyncShowDetail",
	async (id) => {
		const response = await BaseApi.get(`?apiKey=${MovieApi}&i=${id}&Plot=full`);
		return response.data;
	}
);

const initialState = {
	shows: {},
	selectShow: {},
};

const showSlice = createSlice({
	name: "shows",
	initialState,
	reducers: {
		removeSelectedShow: (state) => {
			state.selectShow = {};
		},
	},
	extraReducers: {
		[fetchAsyncShows.pending]: () => {
			console.log("pending");
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log("Fetch Successfully");
			return { ...state, shows: payload };
		},
		[fetchAsyncShows.rejected]: () => {
			console.log("Something went wrong");
		},
		[fetchAsyncShowDetail.fulfilled]: (state, { payload }) => {
			console.log("Fetched Successfully!");
			return { ...state, selectShow: payload };
		},
	},
});

export const { removeSelectedShow } = showSlice.actions;
export const getAllShows = (state) => state.shows.shows;
export const getSelectedShow = (state) => state.shows.selectShow;
export default showSlice.reducer;

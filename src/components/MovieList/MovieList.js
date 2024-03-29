/** @format */

import { useState } from "react";
import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";
import { settings } from "../../common/setting";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchAsyncMovies,
	getAllMovies,
} from "../../features/MovieSlice/MovieSlice";
import "./MovieList.scss";

function MovieList() {
	const navigate = useNavigate();
	const movies = useSelector(getAllMovies);
	let renderMovies = "";

	renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, index) => (
				<MovieCard key={index} data={movie} />
			))
		) : (
			<div className="movies-error">
				<h2>{movies.Error}</h2>
			</div>
		);

	const [term, setTerm] = useState("");
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		if (term === "") return alert("Please enter search term");
		dispatch(fetchAsyncMovies(term));
		setTerm("");
	};

	return (
		<div className="movie-wrapper">
			<button onClick={() => navigate("/shows")} className="to-movies">
				Search Shows
			</button>
			<div className="search-bar">
				<form onSubmit={submitHandler}>
					<input
						type="text"
						value={term}
						placeholder="search"
						onChange={(e) => setTerm(e.target.value)}
					/>
					<button type="submit">
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
			<div className="movie-list">
				<h2>Movies</h2>
				<div className="movie-container">
					<Slider {...settings}>{renderMovies}</Slider>
				</div>
			</div>
		</div>
	);
}

export default MovieList;

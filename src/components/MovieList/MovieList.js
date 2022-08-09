/** @format */

import React from "react";
import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";
import { settings } from "../../common/setting";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/MovieSlice/MovieSlice";
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

	return (
		<div className="movie-wrapper">
			<button onClick={() => navigate("/shows")} className="to-movies">
				Search Shows
			</button>
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

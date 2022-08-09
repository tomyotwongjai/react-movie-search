/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { getAllShows } from "../../features/ShowSlice/ShowSlice";
import ShowCard from "../ShowCard/ShowCard";
import { useNavigate } from "react-router-dom";
import "./ShowList.scss";

function ShowList() {
	const navigate = useNavigate();
	const shows = useSelector(getAllShows);
	let renderShows = "";

	renderShows =
		shows.Response === "True" ? (
			shows.Search.map((show, index) => <ShowCard key={index} data={show} />)
		) : (
			<div className="movies-error">
				<h2>{shows.Error}</h2>
			</div>
		);

	return (
		<main className="show-wrapper">
			<button onClick={() => navigate("/movies")} className="to-movies">
				Search Movies
			</button>
			<div className="show-list">
				<h2>Shows</h2>
				<div className="show-container">{renderShows}</div>
			</div>
		</main>
	);
}

export default ShowList;

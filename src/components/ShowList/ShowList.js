/** @format */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { settings } from "../../common/setting";
import { getAllShows } from "../../features/ShowSlice/ShowSlice";
import ShowCard from "../ShowCard/ShowCard";
import { fetchAsyncShows } from "../../features/ShowSlice/ShowSlice";
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

	const [term, setTerm] = useState("");
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		if (term === "") return alert("Please enter search term");
		dispatch(fetchAsyncShows(term));
		setTerm("");
	};

	return (
		<main className="show-wrapper">
			<button onClick={() => navigate("/movies")} className="to-movies">
				Search Movies
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
			<div className="show-list">
				<h2>Shows</h2>
				<div className="show-container">
					<Slider {...settings}>{renderShows}</Slider>
				</div>
			</div>
		</main>
	);
}

export default ShowList;

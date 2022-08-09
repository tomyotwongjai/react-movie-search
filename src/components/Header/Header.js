/** @format */

import { useState } from "react";
import "./Header.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
	const [term, setTerm] = useState("");

	const sybmitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<main className="header">
			<section className="header-logo">
				<img src={logo} alt="movie-logo" />
			</section>
			<Link to="/">
				<div className="title">
					WatchFlix
					<hr className="line" />
				</div>
			</Link>
			<div className="search-bar">
				<form onSubmit={sybmitHandler}>
					<input
						type="text"
						value={term}
						placeholder="search movies"
						onChange={(e) => setTerm(e.target.value)}
					/>
					<button type="submit">
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
		</main>
	);
}

export default Header;

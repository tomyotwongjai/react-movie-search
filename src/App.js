/** @format */

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	MovieDetail,
	PageNotFound,
	Footer,
	Header,
	ShowDetail,
} from "./components";
import { Home, Movie, Show } from "./pages";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/movies" element={<Movie />} />
						<Route exact path="/shows" element={<Show />} />
						<Route path="/movie/:imdbID" element={<MovieDetail />} />
						<Route path="/show/:imdbID" element={<ShowDetail />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

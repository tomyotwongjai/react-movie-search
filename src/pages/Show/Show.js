/** @format */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ShowList } from "../../components";
import { fetchAsyncShows } from "../../features/ShowSlice/ShowSlice";

function Show() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncShows());
	}, [dispatch]);
	return (
		<div>
			<ShowList />
		</div>
	);
}

export default Show;

import React, { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	//const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const parsedResposne = await response.json();
			setData(parsedResposne.content);
			setLoading(false);
		}
		fetchData();
	}, []);
	return { loading, data };
};

export default useFetch;

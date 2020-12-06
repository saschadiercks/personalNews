import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import FeedItem from "../components/FeedItem";
import Spinner from "../components/Spinner";
import "../App.css";

const PersonalNews = () => {
	const { data, loading } = useFetch(
		"http://127.0.0.1:8080/api/?channel=nachrichten"
	);

	if (loading) {
		return <Spinner text="Loading" />;
	}

	return (
		<>
			<div>{data && data.map(FeedItem)}</div>
		</>
	);
};

export default PersonalNews;

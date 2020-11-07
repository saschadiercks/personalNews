import React from "react";

const Spinner = (props) => {
	return (
		<div className="spinner">
			<div className="spinner__icon"></div>
			<div className="spinner__text">{props.text}</div>
		</div>
	);
};

export default Spinner;

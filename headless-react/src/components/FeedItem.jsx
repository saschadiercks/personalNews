import React from "react";
const FeedItem = (props) => {
	return (
		<div key={props.itemTimestamp} className="feedItem">
			<div>
				<a href={props.itemAuthorLink} rel="noopener" target="pn-blank">
					<img
						src={props.itemAuthorIcon}
						alt={props.itemAuthorDescription}
						className="feedItem__icon"
						height="128"
						width="128"
					/>
				</a>
			</div>
			<div>
				<header>
					<h2 className="feedItem__title">
						<a href={props.itemLink} rel="noopener" target="pn-blank">
							{props.itemTitle}
						</a>
					</h2>
					<p className="feedItem__meta">
						<span className="feedItem__date">{props.itemDate}</span> /{" "}
						<a href={props.itemAuthorLink} className="feedItem__author">
							{props.itemAuthorDescription}
						</a>
					</p>
				</header>
				<p className="feedItem__description">
					<a href={props.itemLink} rel="noopener" target="pn-blank">
						{props.itemDescription}
					</a>
				</p>
			</div>
		</div>
	);
};

export default FeedItem;

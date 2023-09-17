import React, { useEffect, useState } from "react";

export const Lates = () => {
	const [count, setCount] = useState(1);
	useEffect(() => {
		const interval = setInterval(() => {
			if (count < 6) setCount(count + 1);
			else setCount(1);
		}, 1800);
		return () => {
			clearInterval(interval);
		};
	});
	return (
		<div className="lates">
			<h3>The Lates</h3>
			<div className="lates_container">
				<div className="late">
					<img src={require("../assets/late1.webp")} className="late_img" />

					<div className="late_absolute">
						<p className="late_info">Available on the Nike app from: 14 Sep</p>
						<div className="late_button">
							<p className="late_button-p">Get It First</p>
						</div>
					</div>
				</div>
				<div className="late">
					<img
						src={require(`../assets/late1.${count}.png`)}
						className="late_img"
					/>
					<div className="late_absolute">
						<p className="late_info">Find Your Fast</p>
						<div className="late_button">
							<p className="late_button-p">Shop</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

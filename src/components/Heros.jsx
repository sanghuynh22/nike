import React from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";

export const Heros = () => {
	return (
		<div className="heros">
			<h2>MAKE YOUR STYLE</h2>
			<span></span>
			<div className="hero_container">
				<img src={hero1} className="hero" />
				<img src={hero2} className="hero" />
			</div>
		</div>
	);
};

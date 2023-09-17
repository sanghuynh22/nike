import React, { useState, useEffect, useRef } from "react";
import ReactSlider from "react-slider";

const dataSales = [
	{
		id: 1,
		content: "New Styles on Sale: Up to 40% Off",
	},
	{
		id: 2,
		content: "Black Friday 80% Sale Off incoming!",
	},
	{
		id: 3,
		content:
			"Don’t miss the chance to save big on 11/11, the world’s biggest online shopping festival",
	},
];

export const Sales = () => {
	const [index, setIndex] = useState(0);
	const sliderRef = useRef();

	const scrollToIndex = () => {
		if (index >= dataSales.length - 1) {
			return setIndex(0);
		}
		setIndex(Math.min(index + 1, dataSales.length - 1));
	};

	useEffect(() => {
		const interval = setInterval(scrollToIndex, 2500);

		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div className="sales">
			<div
				className="slider"
				ref={sliderRef}
				style={{ transform: `translateX(${-index * 100}%)` }}
			>
				{dataSales.map((d) => {
					return (
						<div key={d.id} className="slide">
							<p className="slide_p">{d.content}</p>
							<p>
								<a href="#" className="slide_info">
									For more Information
								</a>
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

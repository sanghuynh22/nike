import React, { useEffect, useRef } from "react";
import { useScript } from "../hooks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import Lenis from "lenis";
import { preloadImages, getGrid } from "../utils.js";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/7.webp";
import img8 from "../assets/8.webp";

export const Card3D = () => {
	gsap.registerPlugin(ScrollTrigger);
	const applyAnimation = (grid, animationType) => {
		// Child elements of grid
		const gridWrap = grid.querySelector(".grid-wrap");
		const gridItems = grid.querySelectorAll(".grid__item");
		const gridItemsInner = [...gridItems].map((item) =>
			item.querySelector(".grid__item-inner")
		);

		// Define GSAP timeline with ScrollTrigger
		const timeline = gsap.timeline({
			defaults: { ease: "none" },
			scrollTrigger: {
				trigger: gridWrap,
				start: "top bottom+=5%",
				end: "bottom top-=5%",
				scrub: true,
			},
		});

		// Apply different animations based on type
		switch (animationType) {
			case "type1":
				// Set some CSS related style values
				grid.style.setProperty("--perspective", "1000px");
				grid.style.setProperty("--grid-inner-scale", "0.5");

				timeline
					.set(gridWrap, {
						rotationY: 25,
					})
					.set(gridItems, {
						z: () => gsap.utils.random(-1600, 200),
					})
					.fromTo(
						gridItems,
						{
							xPercent: () => gsap.utils.random(-1000, -500),
						},
						{
							xPercent: () => gsap.utils.random(500, 1000),
						},
						0
					)
					.fromTo(
						gridItemsInner,
						{
							scale: 2,
						},
						{
							scale: 0.5,
						},
						0
					);

				break;

			default:
				console.error("Unknown animation type.");
				break;
		}
	};
	const ref = useRef(null);
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});
	useEffect(() => {
		if (lenis) {
			// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
			preloadImages(".grid__item-inner").then(() => {
				// Apply animations to each grid
				const grids = document.querySelectorAll(".grid");
				grids.forEach((grid, i) => {
					// Determine animation type
					let animationType;
					switch (i % 6) {
						case 0:
							animationType = "type1";
							break;
					}
					applyAnimation(grid, animationType);
				});
				document.body.classList.remove("loading");
			});
			function update(time) {
				lenis.raf(time * 1000);
			}
			gsap.ticker.add(update);
			return () => {
				gsap.ticker.remove(update);
			};
		}
	}, [lenis]);
	return (
		<ReactLenis
			root
			options={{ lerp: 0.1, smoothWheel: true }}
			ref={ref}
			className="loading"
		>
			<main>
				<div className="intro">
					{/* <h1 className="intro__title">
						<span className="intro__title-pre">FASTION WEEK</span>
					</h1> */}
				</div>
				<section className="content">
					<div className="grid grid--1">
						<div className="grid-wrap">
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img1}')` }}
								></div>
							</div>
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img2}')` }}
								></div>
							</div>
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img3}')` }}
								></div>
							</div>
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img4}')` }}
								></div>
							</div>
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img5}')` }}
								></div>
							</div>
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img6}')` }}
								></div>
							</div>
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img7}')` }}
								></div>
							</div>
							<div className="grid__item">
								<div
									className="grid__item-inner"
									style={{ backgroundImage: `url('${img8}')` }}
								></div>
							</div>
						</div>
					</div>
					<h3 className="content__title content__title--right content__title--top">
						THIS SEASON
					</h3>
				</section>
			</main>
		</ReactLenis>
	);
};

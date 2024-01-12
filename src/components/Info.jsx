import React from "react";
import men from "../assets/men.webp";
import woman from "../assets/women.jpeg";
import kid from "../assets/kids.webp";
export const Info = () => {
	return (
		<div className="info">
			<div href="https://www.fontspace.com/category/graffiti">
				<img
					src="https://see.fontimg.com/api/renderfont4/vm0JA/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/S29yZWE/drip-october.png"
					alt="Graffiti fonts"
				/>
			</div>
			<h3> The Essentials</h3>
			<div className="info_category">
				<div className="info_category_relative">
					<img src={men} className="info_category_img" />
					<div className="info_category_button">
						<p>Men's</p>
					</div>
				</div>
				<div className="info_category_relative">
					<img src={woman} className="info_category_img" />
					<div className="info_category_button">
						<p>Woman's</p>
					</div>
				</div>
				<div className="info_category_relative">
					<img src={kid} className="info_category_img" />
					<div className="info_category_button">
						<p>Kid's</p>
					</div>
				</div>
			</div>
			<div className="info_list">
				<div className="info_item">
					<h4 className="info_item_title">Icons</h4>
					<div className="info_options">
						<p>Air Force 1</p>
						<p>Huarache</p>
						<p>Air Max 90</p>
						<p>Air Max 95</p>
					</div>
				</div>
				<div className="info_item">
					<h4 className="info_item_title">Shoes</h4>
					<div className="info_options">
						<p>All Shoes</p>
						<p>Huarache</p>
						<p>Jordan Shoes</p>
						<p>Running Shoes</p>
					</div>
				</div>
				<div className="info_item">
					<h4 className="info_item_title">Clothing</h4>
					<div className="info_options">
						<p>All Clothing</p>
						<p>Modest Wear</p>
						<p>Hoodies & Pullovers</p>
						<p>Shirts & Tops</p>
					</div>
				</div>
				<div className="info_item">
					<h4 className="info_item_title">Kids'</h4>
					<div className="info_options">
						<p>Infant & Toddler Shoes</p>
						<p>Kids' Shoes</p>
						<p>Kids' Jordan Shoes</p>
						<p>Kids' Basketball Shoes</p>
					</div>
				</div>
			</div>
		</div>
	);
};

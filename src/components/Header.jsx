import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/favicon.jpeg";
import { BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import profile from "../assets/profile.png";
export const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const inputRef = useRef();
	const handleSearch = () => {
		setIsActive(!isActive);
		if (isActive) inputRef.current.focus();
	};
	const handleBlur = () => {
		if (inputRef.current.value.trim() === "") setIsActive(false);
	};
	const handleMenu = () => {
		setIsOpen(true);
	};
	const handleClickOutside = (e) => {
		if (e.target.closest(".header_modal_container")) {
			e.stopPropagation();
		} else {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			setIsOpen(false);
		});

		return () => {
			window.removeEventListener("resize", () => {
				setIsOpen(false);
			});
		};
	}, [window]);
	return (
		<div className="header">
			<div
				className={`header_modal ${isOpen ? "block" : "none"}`}
				onClick={(e) => handleClickOutside(e)}
			>
				<div className={`header_modal_container active`}>
					<div className="modal_header">
						<span onClick={() => setIsOpen(false)}>X</span>
					</div>
					<div className="modal_option">
						<span>Home</span>
					</div>
					<div className="modal_option">
						<span>About</span>
					</div>
					<div className="modal_option">
						<span>Shop</span>
					</div>
					<div className="modal_option">
						<span>Help</span>
					</div>
					<div className="modal_info">
						<p className="modal_p">
							Become a Nike Member for the best products, inspiration and
							stories in sport. <a href="/">Learn more</a>
						</p>
						<div className="modal_info_buttons">
							<div className="modal_button">
								<p>Join Us</p>
							</div>
							<div className="modal_button">
								<p>Sign In</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="header_left">
				<a href="/">
					<img src={logo} className="header_left_logo" />
				</a>
				<div className={`header_left_search ${isActive && "active"}`}>
					<div className="container_search" onClick={handleSearch}>
						<BsSearch className="search_icon" />
					</div>
					<input
						ref={inputRef}
						id="search"
						type="text"
						onBlur={handleBlur}
						className={`search_input ${isActive && "active"}`}
					/>
				</div>
			</div>
			<div className="header_right">
				<div className="header_right_option">
					<span className="header_right_option_span">Home</span>
				</div>
				<div className="header_right_option">
					<span className="header_right_option_span">About</span>
				</div>
				<div className="header_right_option">
					<span className="header_right_option_span">Shop</span>
				</div>
				<div className="header_right_option">
					<span className="header_right_option_span">Help</span>
				</div>
				<div className="header_right_option">
					<BsCart className="header_right_cart" />
					<img src={profile} className="profile" />
					<div className="container_menu" onClick={handleMenu}>
						<AiOutlineMenu />
					</div>
				</div>
			</div>
		</div>
	);
};

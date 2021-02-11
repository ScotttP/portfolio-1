import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
	const toggleMenuDisplay = () => {
		let mainNav = document.getElementById("menu");
		mainNav.classList.toggle("active");
	};

	return (
		<nav id="navbarContainer">
			<div id="logoAndToggleDiv">
				<h2 id="logo">SP</h2>
				<span
					className="navbarToggle"
					id="js-navbar-toggle"
					onClick={() => toggleMenuDisplay()}
				>
					<FontAwesomeIcon id="fontAwesomeIcon" icon={faBars}></FontAwesomeIcon>
				</span>
			</div>

			<ul className="mainNavbar" id="menu">
				{props.navbarData.map((element, index) => {
					return (
						<a href={`#${element}`} key={`${element}${index}`}>
							<li key={element.toString()}>{element}</li>
						</a>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

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
				{props.navbarData.map((element) => {
					return <li key={element.toString()}>{element}</li>;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

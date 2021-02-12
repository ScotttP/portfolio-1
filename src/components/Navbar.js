import React from "react";
import navbarLogo from "../IconsAndImages/navbarLogo-2.png";
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
				<a href="#Home">
					<img src={navbarLogo} id="logo"></img>
				</a>
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

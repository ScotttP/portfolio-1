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
					{""}
					<img alt="logo" src={navbarLogo} id="logo"></img>
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
						<li key={element.toString()}>
							<a href={`#${element}`} key={`${element}${index}`}>
								{element}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

import React from "react";
import linkedInIcon from "../IconsAndImages/linkedIn.svg";
import githubIcon from "../IconsAndImages/github.svg";
import resumeIcon from "../IconsAndImages/resume.svg";
import backgroundImage from "../IconsAndImages/navbarLogo-2.png";

const Home = (props) => {
	const {
		homepageData: { devName, devTitle, linkedIn, github, resume },
	} = props;

	return (
		<section id="Home">
			<div id="homeContent">
				<h1 id="devName">{devName}</h1>
				<h3 id="devTitle">{devTitle}</h3>
				<a href={`${linkedIn}`} target="_blank">
					<img src={linkedInIcon}></img>
				</a>
				<a href={`${github}`} target="_blank">
					<img src={githubIcon}></img>
				</a>
				{/* <a href={`${resume}`} target="_blank">
					<img src={resumeIcon}></img>
				</a> */}
			</div>

			<div id="bgImageDiv">
				<img id="backgroundImage" src={backgroundImage}></img>
			</div>
			<a href="#Skills" className="nextSectionLink" id="skillsSectionLink">
				<b>&#8595;</b>
			</a>
		</section>
	);
};

export default Home;

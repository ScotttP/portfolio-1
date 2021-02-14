import React from "react";
import SkillsCard from "./SkillsCard";
// import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Skills = (props) => {
	return (
		<section id="Skills">
			<h2>Skills</h2>

			<div id="skillsContent">
				{props.skillsData.map((element) => {
					return (
						<ScrollAnimation
							animateIn="fadeIn"
							animateOut="fadeOut"
							delay={500}
							duration={1000}
						>
							<SkillsCard skill={element}></SkillsCard>
						</ScrollAnimation>
					);
				})}
			</div>
		</section>
	);
};

export default Skills;

import React from "react";
import SkillsCard from "./SkillsCard";
const Skills = (props) => {
	return (
		<section id="Skills">
			<h2>Skills</h2>
			<div id="skillsContent">
				{props.skillsData.map((element) => {
					return <SkillsCard skill={element}></SkillsCard>;
				})}
			</div>
		</section>
	);
};

export default Skills;

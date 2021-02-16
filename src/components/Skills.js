import React from "react";
import SkillsCard from "./SkillsCard";
import uniqid from "uniqid";

const Skills = (props) => {
	return (
		<section id="Skills">
			<h2>Skills</h2>

			<div id="skillsContent">
				{props.skillsData.map((element) => {
					return <SkillsCard key={uniqid()} skill={element}></SkillsCard>;
				})}
			</div>
		</section>
	);
};

export default Skills;

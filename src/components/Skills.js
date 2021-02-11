import React from "react";
import SkillsCard from "./SkillsCard";
const Skills = (props) => {
	return (
		<section id="Skills">
			<div id="skillsContent">
				<h2>Skills</h2>
				{props.skillsData.map((element) => {
					return <SkillsCard skill={element}></SkillsCard>;
				})}
				<a href="#Projects">
					<button> Arrow to next section</button>
				</a>
			</div>
		</section>
	);
};

export default Skills;

import React from "react";
import "../SCSS/Skills.scss";
const SkillsCard = (props) => {
	const {
		skill: { skillName, skillImage },
	} = props;

	return (
		<div className="skillsCard">
			<div className="imageDiv">
				<img src={skillImage} alt={`${skillName} Logo`}></img>
			</div>

			<b>{skillName}</b>
		</div>
	);
};

export default SkillsCard;

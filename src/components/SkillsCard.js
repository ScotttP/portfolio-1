import React from "react";
const SkillsCard = (props) => {
	const {
		skill: { skillName, skillImage },
	} = props;

	return (
		<div className="skillsCard">
			<div className="imageDiv">
				<img src={skillImage} alt={skillName}></img>
			</div>

			<b>{skillName}</b>
		</div>
	);
};

export default SkillsCard;

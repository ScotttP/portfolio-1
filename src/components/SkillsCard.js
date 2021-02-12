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

			<p>{skillName}</p>
		</div>
	);
};

export default SkillsCard;

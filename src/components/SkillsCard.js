import React from "react";
const SkillsCard = (props) => {
	const {
		skill: { skillName, skillImage },
	} = props;

	return <div>{skillName}</div>;
};

export default SkillsCard;

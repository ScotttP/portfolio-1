import React from "react";
const ProjectCard = (props) => {
	const {
		project: {
			projectName,
			projectImage,
			projectDescription,
			demoLink,
			codeLink,
		},
	} = props;
	return (
		<div className="projectCard">
			<h3>{projectName}</h3>
			<div className="imageDiv">
				<img src={projectImage} alt={projectName}></img>
			</div>

			<p>{projectDescription}</p>
			<div className="buttonDiv">
				<a href={demoLink} target="_blank">
					<button>Live Demo</button>
				</a>
				<a href={codeLink} target="_blank">
					<button>Source Code</button>
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
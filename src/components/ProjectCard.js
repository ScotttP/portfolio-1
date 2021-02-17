import React from "react";
import uniqid from "uniqid";

const ProjectCard = (props) => {
	const {
		project: {
			projectName,
			projectImage,
			techStack,
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
			<h3>Tech Stack</h3>
			<ul className="techStackList">
				{techStack.map((skill) => (
					<li key={uniqid()}>{skill} </li>
				))}
			</ul>
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

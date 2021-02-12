import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = (props) => {
	return (
		<section id="Projects">
			<h2>Projects</h2>
			<div id="projectsContent">
				{props.projectsData.map((element) => {
					return <ProjectCard project={element}></ProjectCard>;
				})}
			</div>
		</section>
	);
};

export default Projects;

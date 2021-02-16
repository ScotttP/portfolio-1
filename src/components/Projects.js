import React from "react";
import ProjectCard from "./ProjectCard";
import uniqid from "uniqid";

const Projects = (props) => {
	return (
		<section id="Projects">
			<h2>Projects</h2>
			<div id="projectsContent">
				{props.projectsData.map((element) => {
					return <ProjectCard key={uniqid()} project={element}></ProjectCard>;
				})}
			</div>
			<div className=".calendar"></div>
		</section>
	);
};

export default Projects;

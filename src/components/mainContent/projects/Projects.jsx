import Project from "./Project";
import projectsCSS from "./projects.module.css";
import H3MainCreator from "../H3MainCreator";
import React from "react";

const Projects = ({mainContent}) => {
    let projects = mainContent.projects.map(project => <Project key={project.id}
                                                                href={project.href}
                                                                http={project.http}
                                                                technologies={project.technologies}
                                                                dots={project.dots}/>);
    return  <div className={projectsCSS.projects_container}>
                <H3MainCreator title={mainContent.titleProjects}/>
                <ol>{projects}</ol>
            </div>
};

export default Projects;

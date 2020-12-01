import React from "react";
import projectCSS from "./projects.module.css";

const Project = ({href, http, technologies, dots}) => {
    return  <li className={projectCSS.project_item}>
                <a href={href}>{http}</a>
                <span className={projectCSS.dots}>{dots}</span>
                [<span> {technologies} </span>]
            </li>
}

export default Project;

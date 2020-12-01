import React from "react";
import h3CSS from "../mainContent/projects/projects.module.css";

const H3MainCreator = (props) => {
    return  <span className={h3CSS.projects_container}>
                <h3>{props.title}</h3>
            </span>
}

export default H3MainCreator;

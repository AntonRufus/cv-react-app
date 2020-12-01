import React from "react";
import skillsCSS from "../skills/skills.module.css";

const H3SlidebarCreator = (props) => {
    return  <span className={skillsCSS.skills_container}>
                <h3>{props.title}</h3>
            </span>
};

export default H3SlidebarCreator;

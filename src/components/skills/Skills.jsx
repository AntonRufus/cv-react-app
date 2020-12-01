import React from "react";
import skillsCSS from "../skills/skills.module.css";

export const Skills = (props) => {
    return  <ul>
                <li className={skillsCSS.tech_skills_item}>{props.skill}</li>
            </ul>
};

export default Skills;

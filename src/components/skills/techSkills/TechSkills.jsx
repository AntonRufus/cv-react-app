import Skills from "../Skills";
import skillsCSS from "../skills.module.css";
import H3SlidebarCreator from "../../sidebar/H3SlidebarCreator";
import React from "react";

const TechSkills = ({sidebar}) => {
    let techSkillsComponents = sidebar.techSkills.map(tech => <Skills key={tech.id} skill={tech.skill}/>);

    return  <div className={skillsCSS.skills_container}>
                <H3SlidebarCreator title={sidebar.titleTech}/>
                {techSkillsComponents}
            </div>
}

export default TechSkills;

import Skills from "../Skills";
import skillsCSS from "../skills.module.css";
import H3SlidebarCreator from "../../sidebar/H3SlidebarCreator";
import React from "react";

const SoftSkills = ({sidebar}) => {
    let softSkillsComponents = sidebar.softSkills.map(soft => <Skills key={soft.id} skill={soft.skill}/>);

    return  <div className={skillsCSS.skills_container}>
                <H3SlidebarCreator title={sidebar.titleSoft}/>
                {softSkillsComponents}
            </div>
}

export default SoftSkills;

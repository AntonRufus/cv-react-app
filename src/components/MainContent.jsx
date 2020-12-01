import React from 'react';
import mainContentCSS from "../components/mainContent/mainContent.module.css";
import Header from "./mainContent/header/Header";
import Projects from "./mainContent/projects/Projects";
import WorkExp from "./mainContent/workExperience/WorkExperienceCont";
import EducationBlock from "./mainContent/education/education";

const MainContent = ({mainContent}) => {
    return <div className={mainContentCSS.about_me_container}>
        {/*about me main info*/}
        <Header mainContent={mainContent}/>
        {/*projects container*/}
        <Projects mainContent={mainContent}/>
        {/*work experience container*/}
        <WorkExp mainContent={mainContent}/>
        {/*Education container*/}
        <EducationBlock mainContent={mainContent}/>
    </div>
}

export default MainContent;

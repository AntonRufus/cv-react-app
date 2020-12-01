import Education from "../Education";
import educationCSS from "./education.module.css";
import H3MainCreator from "../H3MainCreator";
import React from "react";

const EducationBlock = ({mainContent}) => {
    const educationComponents = mainContent.education.map(ed => <Education university={ed.university}
                                                                           program={ed.universityProgram}
                                                                           date={ed.universityDate}
                                                                           country={ed.universityCountry}/>)
    return  <div className={educationCSS.education_container}>
                <H3MainCreator title={mainContent.titleEducation}/>
                {educationComponents}
            </div>
}

export default EducationBlock;

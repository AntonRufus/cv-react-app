import WorkExperience from "./WorkExperience";
import workCSS from "./workExperience.module.css";
import H3MainCreator from "../H3MainCreator";
import React from "react";

const WorkExp = ({mainContent}) => {
    let workExperience = mainContent.workExperience.map(workExp => <WorkExperience key={workExp.id}
                                                                                   position={workExp.position}
                                                                                   company={workExp.company}
                                                                                   date={workExp.date}
                                                                                   country={workExp.country}
                                                                                   responsibility={workExp.responsibility}/>);
    return  <div className={workCSS.work_experience_container}>
                <H3MainCreator title={mainContent.titleWork}/>
                {workExperience}
            </div>
};

export default WorkExp;

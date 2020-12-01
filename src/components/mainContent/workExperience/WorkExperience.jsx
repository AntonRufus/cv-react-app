import React from "react";
import workCSS from "./workExperience.module.css";

const WorkExperience = ({position, company, date, country, responsibility}) => {
    const Responsibility = ({text}) => <ul><li>{text}</li></ul>;

    const responsibilityBlock = responsibility.map(resp => <Responsibility key={resp.id}
                                                                           text={resp.text}/>)
    return  <span>
                <h4>{position}<span>{company}</span></h4>
                <span className={workCSS.date}>{date}<span
                    className={workCSS.separator}>|</span><span
                    className={workCSS.country}>{country}</span></span>
                {responsibilityBlock}
            </span>
}

export default WorkExperience;

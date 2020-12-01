import React from "react";
import educationCSS from "../mainContent/education/education.module.css";

const Education = ({university, program, date, country}) => {
    return  <>
                <h4 className={educationCSS.education_university}>{university}</h4>
                <p>{program}</p>
                <span className={educationCSS.date}>{date}<span
                    className={educationCSS.separator}>|</span><span
                    className={educationCSS.country}>{country}</span></span>
            </>
}

export default Education;

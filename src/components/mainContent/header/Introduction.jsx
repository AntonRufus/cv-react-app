import React from "react";
import introductionContentCSS from "../mainContent.module.css";

const Introduction = (props) => {
    return  <p className={introductionContentCSS.about_me_container}>
                {props.text}
            </p>
}

export default Introduction;

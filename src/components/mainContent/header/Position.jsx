import React from "react";
import mainContentCSS from "../mainContent.module.css";

const Position = (props) => {
    return  <span className={mainContentCSS.about_me_container}>
                <h4>{props.position}</h4>
            </span>
}

export default Position;

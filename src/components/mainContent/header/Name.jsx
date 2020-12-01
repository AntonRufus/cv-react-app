import React from "react";
import nameCSS from "../mainContent.module.css";

const Name = (props) => {
    return  <span className={nameCSS.about_me_container}>
                <h1>{props.name}</h1>
            </span>
}

export default Name;

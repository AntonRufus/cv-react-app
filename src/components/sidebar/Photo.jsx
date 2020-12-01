import React from "react";
import sidebarCSS from "../sidebar/sidebar.module.css";

const Photo = ({photo,bgcPhoto}) => {
    return  <div>
                <img className={sidebarCSS.bgcPhoto} src={bgcPhoto} alt=""/>
                <img className={sidebarCSS.photo} src={photo} alt=""/>
            </div>
}

export default Photo;

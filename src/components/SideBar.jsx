import React from 'react';
import sidebarCSS from "./sidebar/sidebar.module.css";
import Photo from "./sidebar/Photo";
import Contacts from "./contacts/Contacts";
import TechSkills from "./skills/techSkills/TechSkills";
import SoftSkills from "./skills/softSkills/SoftSkills";

const Sidebar = ({sidebar}) => {
    return <aside>
        <div className={sidebarCSS.aside_container}>
            {/*photo container*/}
            <Photo photo={sidebar.photo} bgcPhoto={sidebar.bgcPhoto}/>
            {/*info container*/}
            <div className={sidebarCSS.info_container}>
                {/*contacts container*/}
                <Contacts sidebar={sidebar}/>
                {/*Tech skills container*/}
                <TechSkills sidebar={sidebar}/>
                {/*Soft skills container*/}
                <SoftSkills sidebar={sidebar}/>
            </div>
        </div>
    </aside>
}

export default Sidebar;

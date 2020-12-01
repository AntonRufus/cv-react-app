import React from "react";
import appCSS from './css/App.module.css';
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App(props) {
    return (
        /*app*/
        <div className={appCSS.wrapper}>
            {/*main container*/}
            <div className={appCSS.main_container}>
                {/*sidebar container*/}
                <SideBar sidebar={props.store.sidebar}/>
                {/*about me container*/}
                <MainContent mainContent={props.store.mainContent}/>
            </div>
        </div>
    );
}

export default App;

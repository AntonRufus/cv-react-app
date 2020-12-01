import Position from "./Position";
import Name from "./Name";
import Introduction from "./Introduction";
import React from "react";

const Header = ({mainContent}) => {
    let position = mainContent.position.map(pos => <Position key={pos.id} position={pos.position}/>);
    let name = mainContent.name.map(n => <Name key={n.id} name={n.name}/>);
    let introduction = mainContent.text.map(intr => <Introduction key={intr.id} text={intr.text}/>);

    return  <>
                {position}
                {name}
                {introduction}
            </>
};

export default Header;

import React from "react";

import { ButtonGenerate } from "./MenuBarStyle";
import IMenuActions from "../Interfaces/IMenuActions";

const Menu = (props: IMenuActions) => {
    return(
        <nav>
            <ButtonGenerate onClick={props.CreateStore}>Generate hash</ButtonGenerate>
        </nav>
    );
}

export default Menu;
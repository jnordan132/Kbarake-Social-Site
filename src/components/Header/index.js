import React from "react";
import pfp from "../../assets/KB-PFP.png";

function Header() {

    return (
        <div id="header">
            <img id="pfp" src={pfp} />
        </div>
    )
}

export default Header;
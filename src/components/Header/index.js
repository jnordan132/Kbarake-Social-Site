import React from "react";
import pfp from "../../assets/KB-PFP.png";

function Header() {

    return (
        <div id="header">
            <img id="pfp" alt="kibarakes social media profile picture" src={pfp} />
        </div>
    )
}

export default Header;
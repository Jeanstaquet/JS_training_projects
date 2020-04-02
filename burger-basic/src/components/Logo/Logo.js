import React from "react";
import burgerLogo from "../../assets/images/original.png";
import "./Logo.css"

const logo = (props) => (
    <div className={"Logo"}>
        <img src={burgerLogo} alt="Myburger" />
    </div>
);

export default logo;
import React from "react";
import burgerLogo from "../../assets/images/original.png";
import "./Logo.css"

const logo = (props) => (
    <div className={"Logo"} style={{height: props.height}}>
        <img src={burgerLogo} alt="Myburger" />
    </div>
);

export default logo;
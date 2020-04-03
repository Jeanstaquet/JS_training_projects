import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary"

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return(
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <Logo height="11%"/>
                    <nav>
                        <NavigationItems /> 
                    </nav>
                </div>
        </Auxiliary>
    );
};

export default sideDrawer;
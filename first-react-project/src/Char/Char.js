import React from "react";
//display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black
const char = (props) => {
    const style = {
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    }
    return (
    //pas oublier de retourner enoutouré des div
    <div style={style} onClick={props.clicked}>
        {props.character}
    </div>
    )
}

export default char;
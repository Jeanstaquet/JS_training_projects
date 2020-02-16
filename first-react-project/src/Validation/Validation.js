import React from "react";

const validation = (props) => {
    let a = props.textLength
    let answer = ""
    if (a.length < 5) {
        answer = "Text too short"
    } else {
        answer = "Text long enough"
    }
    return (
    <p>{answer} : {a}</p>
    )
};

export default validation;
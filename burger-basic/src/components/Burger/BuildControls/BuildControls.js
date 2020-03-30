import React from "react";
import "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "chesse"},
    {label: "Meat", type: "meat"}
]


const buildControls = (props) => (
    <div className={"BuildControls"}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} lable={ctrl.label} />
        ))}
    </div>
);

export default buildControls;
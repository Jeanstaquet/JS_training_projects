import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary"
import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 2,
            meat: 2
        }
    };
    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxiliary>
        );
    };
};

export default BurgerBuilder;
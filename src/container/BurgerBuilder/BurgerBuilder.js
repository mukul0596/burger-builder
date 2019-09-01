import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Buregr from '../../component/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 30,
        purchasable: false,
        purchasing: false,
    }
    render() {
        return (
            <Aux>
                <Buregr ingredients={ this.state.ingredients } />
                {/* <BuildCOntrols /> */}
                <div>BuildCOntrols</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
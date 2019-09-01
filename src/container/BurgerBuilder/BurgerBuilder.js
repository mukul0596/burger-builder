import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Buregr from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';

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
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;
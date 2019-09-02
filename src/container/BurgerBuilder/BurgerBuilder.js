import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Buregr from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 5,
    meat: 15,
    cheese: 10,
    bacon: 10
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 30,
        purchaseable: false,
        purchasing: false
    }

    continuePurchaseHandler = () => {
        alert('Order continued!');
    }

    cancelPurchaseHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    updatedPurchaseState = (ingredient) => {
        const ingredients = {
            ...ingredient
        };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 ? true : false })
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

        this.updatedPurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        const newCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

        this.updatedPurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={ this.state.purchasing } modalClose={ this.cancelPurchaseHandler }>
                    <OrderSummary 
                        ingredients={ this.state.ingredients } 
                        cancelPurchase={ this.cancelPurchaseHandler } 
                        continuePurchase={ this.continuePurchaseHandler } 
                        totalPrice={ this.state.totalPrice } />
                </Modal>
                <Buregr ingredients={ this.state.ingredients } />
                <BuildControls 
                    addIngredient={ this.addIngredientHandler } 
                    removeIngredient={ this.removeIngredientHandler } 
                    disabled={ disabledInfo } 
                    totalPrice={ this.state.totalPrice } 
                    purchaseable={ this.state.purchaseable } 
                    purchasing={ this.purchaseHandler } />
            </Aux>
        )
    }
}

export default BurgerBuilder;
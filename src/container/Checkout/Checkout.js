import React, { Component } from 'react';
import OrderSummary from '../../component/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import DiliveryData from './DiliveryData/DiliveryData';

class checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        }
    }
    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/dilivery-data');
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ ingredients })
    }

    render () {
        return (
            <div>
                <OrderSummary 
                    ingredients={ this.state.ingredients } 
                    checkoutCancel={ this.checkoutCancelHandler } 
                    checkoutContinue={ this.checkoutContinueHandler } />
                <Route path={this.props.match.path + '/dilivery-data'} component={ DiliveryData } />
            </div>
        )
    }
}

export default checkout;
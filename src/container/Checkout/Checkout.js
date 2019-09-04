import React, { Component } from 'react';
import OrderSummary from '../../component/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import DiliveryData from './DiliveryData/DiliveryData';

class checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/dilivery-data');
    }

    componentWillMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice;
        for (let param of query.entries()) {
            if(param[0] === 'totalPrice') {
                totalPrice = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients, totalPrice })
    }

    render () {
        return (
            <div>
                <OrderSummary 
                    ingredients={ this.state.ingredients } 
                    checkoutCancel={ this.checkoutCancelHandler } 
                    checkoutContinue={ this.checkoutContinueHandler } />
                <Route path={ this.props.match.path + '/dilivery-data'}  render={(props) => <DiliveryData ingredients={ this.state.ingredients } totalPrice={ this.state.totalPrice } {...props} />} />
            </div>
        )
    }
}

export default checkout;
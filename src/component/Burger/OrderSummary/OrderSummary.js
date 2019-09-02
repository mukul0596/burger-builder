import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={ igKey }>
                    <span style={{textTransform: 'capitalize'}}>{ igKey }</span>: { props.ingredients[igKey] }
                </li>
            )
        });
    console.log(ingredients)
    return  (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                { ingredients }
            </ul>
            <strong>Total Price: &#8377;{ props.totalPrice }</strong>
            <p>Continue to checkout?</p>
            <Button type='Success' click={ props.continuePurchase }>CONTINUE</Button>
            <Button type='Danger' click={ props.cancelPurchase }>CANCEL</Button>
        </Aux>
    )
}

export default orderSummary;
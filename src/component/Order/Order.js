import React from 'react';
import './Order.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredient in props.ingredients) {
        ingredients.push(
            {
                name: ingredient,
                amount: props.ingredients[ingredient]
            }
        )
    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '4px 8px',
                border: '1px solid #cccccc',
                padding: '5px'
            }}
            key={ig.name}>{ ig.name } ({ ig.amount })</span>
    })

    return (
        <div className='Order'>
            <p>Ingredients: { ingredientsOutput }</p>
            <p>Price: &#8377;<strong>{ props.totalPrice }</strong></p>
        </div>
    )
}

export default order;
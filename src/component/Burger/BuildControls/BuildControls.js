import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
]

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: &#8377;<strong>{ props.totalPrice }</strong></p>
        { controls.map(ctrl => (
            <BuildControl 
                label={ ctrl.label } 
                key={ ctrl.label } 
                type={ ctrl.type } 
                addIngredient={ props.addIngredient } 
                removeIngredient={ props.removeIngredient } 
                disabled={ props.disabled[ctrl.type] } />
        )) }
        <button 
            className='OrderButton' 
            disabled={ !props.purchaseable }
            onClick={ props.purchasing }>ORDER NOW!</button>
    </div>
)

export default buildControls;
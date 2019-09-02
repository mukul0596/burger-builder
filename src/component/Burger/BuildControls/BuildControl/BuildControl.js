import React from 'react';
import './BuildControl.css'

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{ props.label }</div>
        <button className='Less' onClick={ () => props.removeIngredient(props.type) } disabled={ props.disabled }>-</button>
        <button className='More' onClick={ () => props.addIngredient(props.type) }>+</button>
    </div>
)

export default buildControl;
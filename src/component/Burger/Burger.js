import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let burgerIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={ igKey + i } type={ igKey } />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);


    if (burgerIngredients.length === 0) {
        burgerIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            { burgerIngredients }
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger;
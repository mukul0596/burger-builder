import React from 'react';
import './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <li className='NavigationItem'><NavLink to='/'>Burger Builder</NavLink></li>
        <li className='NavigationItem'><NavLink to='/orders'>Orders</NavLink></li>
    </ul>
)

export default navigationItems;
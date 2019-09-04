import React from 'react';
import './NavigationItems.css';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <li className='NavigationItem'><a href='/' className='active'>Burger Builder</a></li>
        <li className='NavigationItem'><a href='/'>My Orders</a></li>
    </ul>
)

export default navigationItems;
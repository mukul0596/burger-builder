import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    const attachedClasses = ['SideDrawer', props.open ? 'Open' : 'Close'].join(' ');
    return (
        <Aux>
            <Backdrop show={ props.open } click={ props.close }/>
            <div className={ attachedClasses }>
                <Logo height='11%' />
                <NavigationItems />
            </div>
        </Aux>
    )
}

export default sideDrawer;
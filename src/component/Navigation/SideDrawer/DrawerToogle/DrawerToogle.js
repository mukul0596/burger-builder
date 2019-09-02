import React from 'react';
import './DrawerToogle.css';

const drawerToogle = (props) => (
    <div onClick={props.click} className='DrawerToggle'>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToogle;
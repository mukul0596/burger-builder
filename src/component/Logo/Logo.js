import React from 'react';
import logoUrl from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className='Logo' style={{ height: props.height }}>
        <img src={ logoUrl } alt='MyBurger'/>
    </div>
)

export default logo;
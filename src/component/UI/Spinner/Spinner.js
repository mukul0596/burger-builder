import React from 'react';
import './Spinner.css';

const spinner = (props) => (
    <div className='Loader' style={ props.style }>Loading...</div>
)

export default spinner;
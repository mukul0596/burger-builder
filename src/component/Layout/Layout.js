import React from 'react';
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../container/BurgerBuilder/BurgerBuilder';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className='Content'>
            { props.children }
        </main>
    </Aux>
)

export default layout;
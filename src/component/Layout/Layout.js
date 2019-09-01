import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = (props) => (
    <Aux>
        {/* <Toolbar /> */}
        <div>Toolbar</div>
        <main className='Content'>
            { props.children }
        </main>
    </Aux>
)

export default layout;
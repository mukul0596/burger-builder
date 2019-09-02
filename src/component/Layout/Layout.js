import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component {
    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    toogleSideDrawerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        return(
            <Aux>
                <Toolbar toogle={ this.toogleSideDrawerHandler } />
                <SideDrawer open={ this.state.showSideDrawer } close={ this.closeSideDrawerHandler } />
                <main className='Content'>
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

export default layout;
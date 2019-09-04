import React, { Component } from 'react';
import axios from '../../axios-orders';
import Spinner from '../../component/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../component/Order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentWillMount () {
        axios.get('/orders.json')
            .then((response) => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({ loading:false, orders: fetchedOrders });
            }).catch((error) => {
                this.setState({ loading:false });
            })
    }

    render () {
        let orders = (
            this.state.orders.map(order => (
                <Order 
                    key={order.id} 
                    ingredients={ order.ingredients } 
                    totalPrice={ order.price } />
            ))
        );
        if (this.state.loading) {
            orders = <Spinner style={{transform: 'translateY(25vh)'}} />
        }
        return (
            <div>
                { orders }
            </div>

        )
    }
}

export default withErrorHandler(Orders, axios);
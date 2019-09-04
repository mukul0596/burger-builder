import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button';
import './DiliveryData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../component/UI/Spinner/Spinner';

class DiliveryData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Mukul Gupta',
                address: {
                    street: 'RM 4107 BITS Pilani',
                    zipCode: '333031',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            diliver: 'Fastest'
        }
        axios.post('/orders.json', order)
            .then((response) => {
                this.setState({ loading: false });
                this.props.history.push('/');
                console.log(response);
            }).catch((error) => {
                this.setState({ loading: false });
                console.log(error);
            });
    }

    render () {
        let form = (
            <form>
                <input type='text' name='name' placeholder='Your Name' />
                <input type='email' name='email' placeholder='Your Mail' />
                <input type='text' name='street' placeholder='Street' />
                <input type='text' name='postal' placeholder='Postal Code' />
                <Button type='Success' click={ this.orderHandler }>PLACE ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className='DiliveryData'>
                <h4>Enter your dilivery details</h4>
                { form }
            </div>
        )
    }
}

export default DiliveryData;
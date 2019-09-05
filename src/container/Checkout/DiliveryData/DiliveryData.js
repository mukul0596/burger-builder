import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button';
import './DiliveryData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../component/UI/Spinner/Spinner';
import Input from '../../../component/UI/Input/Input';

class DiliveryData extends Component {
    state = {
        orderForm: {
            name: '',
            street: '',
            postalCode: '',
            country: '',
            email: '',
            dilivery: ''
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
                name: this.state.orderForm.name,
                address: {
                    street: this.state.orderForm.street,
                    postalCode: this.state.orderForm.postalCode,
                    country: this.state.orderForm.country
                },
                email: this.state.orderForm.email
            },
            dilivery: this.state.orderForm.dilivery
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

    inputChangeHandler = (event) => {
        const orderForm = {
            ...this.state.orderForm
        };
        orderForm[event.target.name] = event.target.value;

        this.setState({ orderForm });
    }

    render () {
        let form = (
            <form onSubmit={ this.orderHandler }>
                <Input type='text' name='name' placeholder='Your Name' onChange={ this.inputChangeHandler } value={ this.state.orderForm.name } required />
                <Input type='email' name='email' placeholder='Your E-Mail' onChange={ this.inputChangeHandler } value={ this.state.orderForm.email } required />
                <Input type='text' name='street' placeholder='Street' onChange={ this.inputChangeHandler } value={ this.state.orderForm.street } required />
                <Input type='text' name='postalCode' placeholder='Postal Code' onChange={ this.inputChangeHandler } value={ this.state.orderForm.postalCode } required />
                <Input type='text' name='country' placeholder='Country' onChange={ this.inputChangeHandler } value={ this.state.orderForm.country } required />
                <Input type='select' name='dilivery' options={ [{value: 'fastest', displayValue: 'Fastest'}, {value: 'cheapest', displayValue: 'Cheapest'}] } onChange={ this.inputChangeHandler } value={ this.state.orderForm.dilivery } />
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
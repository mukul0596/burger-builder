import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button';
import './DiliveryData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../component/UI/Spinner/Spinner';
import Input from '../../../component/UI/Input/Input';

class DiliveryData extends Component {
    state = {
        isFormValid: false,
        orderForm: {
            name: {
                value: '',
                validity: {
                    required: true
                },
                isValid: false,
                isTouched: false
            },
            street: {
                value: '',
                validity: {
                    required: true
                },
                isValid: false,
                isTouched: false
            },
            postalCode: {
                value: '',
                validity: {
                    required: true,
                    length: 6
                },
                isValid: false,
                isTouched: false
            },
            country: {
                value: '',
                validity: {
                    required: true
                },
                isValid: false,
                isTouched: false
            },
            email: {
                value: '',
                validity: {
                    required: true,
                    isEmail: true
                },
                isValid: false,
                isTouched: false
            },
            dilivery: {
                value: 'fastest',
                validity: {},
                isValid: true,
            }
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
                name: this.state.orderForm.name.value,
                address: {
                    street: this.state.orderForm.street.value,
                    postalCode: this.state.orderForm.postalCode.value,
                    country: this.state.orderForm.country.value
                },
                email: this.state.orderForm.email.value
            },
            dilivery: this.state.orderForm.dilivery.value
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


    checkValidity = (value, rules) => {
        if (!rules) {
            return true;
        }
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.isEmail) {
            if(typeof value !== "undefined"){
                let lastAtPos = value.lastIndexOf('@');
                let lastDotPos = value.lastIndexOf('.');
     
                isValid = ((lastAtPos < lastDotPos && lastAtPos > 0 && value.indexOf('@@') == -1 && lastDotPos > 2 && (value.length - lastDotPos) > 2))
            }  
        }

        if (rules.length) {
            isValid = value.length === rules.length;
        }

        return isValid;
    }

    inputChangeHandler = (event) => {
        const orderForm = {
            ...this.state.orderForm
        };
        orderForm[event.target.name].value = event.target.value;
        if (event.target.name != 'dilivery') {
            orderForm[event.target.name].isValid = this.checkValidity(orderForm[event.target.name].value, orderForm[event.target.name].validity)
        }
        orderForm[event.target.name].isTouched = true;

        let isFormValid = true;
        for (let input in this.state.orderForm) {
            isFormValid = this.state.orderForm[input].isValid && isFormValid;
        }

        console.log(this.state)

        this.setState({ orderForm, isFormValid });
    }

    render () {
        let form = (
            <form onSubmit={ this.orderHandler }>
                <Input type='text' name='name' placeholder='Your Name' onChange={ this.inputChangeHandler } value={ this.state.orderForm.name.value } className={ this.state.orderForm.name.isValid || !this.state.orderForm.name.isTouched ? null : 'Invalid' } />
                <Input type='email' name='email' placeholder='Your E-Mail' onChange={ this.inputChangeHandler } value={ this.state.orderForm.email.value } className={ this.state.orderForm.email.isValid || !this.state.orderForm.email.isTouched ? null : 'Invalid' } />
                <Input type='text' name='street' placeholder='Street' onChange={ this.inputChangeHandler } value={ this.state.orderForm.street.value } className={ this.state.orderForm.street.isValid || !this.state.orderForm.street.isTouched ? null : 'Invalid' } />
                <Input type='number' name='postalCode' placeholder='Postal Code' onChange={ this.inputChangeHandler } value={ this.state.orderForm.postalCode.value } className={ this.state.orderForm.postalCode.isValid || !this.state.orderForm.postalCode.isTouched ? null : 'Invalid' } />
                <Input type='text' name='country' placeholder='Country' onChange={ this.inputChangeHandler } value={ this.state.orderForm.country.value } className={ this.state.orderForm.country.isValid || !this.state.orderForm.country.isTouched ? null : 'Invalid' } />
                <Input type='select' name='dilivery' options={ [{value: 'fastest', displayValue: 'Fastest'}, {value: 'cheapest', displayValue: 'Cheapest'}] } onChange={ this.inputChangeHandler } value={ this.state.orderForm.dilivery.value } />
                <Button type='Success' click={ this.orderHandler } disabled={ !this.state.isFormValid }>PLACE ORDER</Button>
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
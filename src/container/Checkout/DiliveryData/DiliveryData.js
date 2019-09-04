import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button';
import './DiliveryData.css'

class DiliveryData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    }

    render () {
        return (
            <div className='DiliveryData'>
                <h4>Enter your dilivery details</h4>
                <form>
                    <input type='text' name='name' placeholder='Your Name' />
                    <input type='email' name='email' placeholder='Your Mail' />
                    <input type='text' name='street' placeholder='Street' />
                    <input type='text' name='postal' placeholder='Postal Code' />
                    <Button type='Success'>PLACE ORDER</Button>
                </form>
            </div>
        )
    }
}

export default DiliveryData;
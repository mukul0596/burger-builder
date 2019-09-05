import React from 'react';
import "./Input.css";

const input = (props) => {
    let label = props.children;

    const otherProps = {
        ...props
    }

    delete otherProps.children;
    delete otherProps.dangerouslySetInnerHTML;

    let inputElement = null;
    switch(props.type) {
        case ( 'textarea' ):
            delete otherProps.type;
            inputElement = <textarea {...otherProps} />;
            break;
        case ( null || undefined ): 
            inputElement = null;
            break;
        case ( 'select' ):
            const options = props.options;
            delete otherProps.options;
            inputElement = (
                <select {...otherProps}>
                    { options.map(option => (
                        <option value={ option.value } key={ option.value }>{ option.displayValue }</option>
                    )) }
                </select>
            );
            break;
        default: {
            inputElement = <input {...otherProps} />;
        }
    }

    return (
        <div className='Input'>
            <label>{ label }</label>
            { inputElement }
        </div>
    )
}

export default input;
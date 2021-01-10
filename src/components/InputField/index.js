import {v4 as uuidv4} from "uuid";
import React from 'react';


export const InputField = React.forwardRef( ({label, type, name, errorMessage}, ref) => {
    const inputAndLabelId = uuidv4();
    return (
        <div className='user-form__content'>
            <label htmlFor={inputAndLabelId} className='login-form__placeholder'>{label}</label>
            <input type={type}
                   className='user-form__input'
                   id={inputAndLabelId}
                   name={name}
                   ref={ref}
            />
            <span className='user-form__error'>{errorMessage}</span>
        </div>
    )
});
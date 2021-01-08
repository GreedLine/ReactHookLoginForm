import {v4 as uuidv4} from "uuid";
import React from 'react';


export const InputField = React.forwardRef( ({label, type, name, errorMessage}, ref) => {
    const inputAndLabelId = uuidv4();
    return (
        <div className='textb'>
            <label htmlFor={inputAndLabelId} className='textb__placeholder'>{label}</label>
            <input type={type}
                   className='textb__input'
                   id={inputAndLabelId}
                   name={name}
                   ref={ref}
            />
            <span className='textb__error'>{errorMessage}</span>
        </div>
    )
});
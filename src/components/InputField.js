import {v4 as uuidv4} from "uuid";

export const InputField = ({label, type, name, refData, errorMessage}) => {
    const inputAndLabelId = uuidv4();
    return (
        <div className='textb'>
            <label htmlFor={inputAndLabelId} className='placeholder'>{label}</label>
            <input type={type}
                   className='login-form__input'
                   id={inputAndLabelId}
                   name={name}
                   ref={refData}
            />
            <span className='_error'>{errorMessage}</span>
        </div>
    )
}
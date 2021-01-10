import {useForm} from "react-hook-form";
import React from 'react';

// Components
import {InputField} from "../components/InputField";

function SignUp() {
    const {register, handleSubmit, errors, watch} = useForm({
        reValidateMode: 'onSubmit',
    });
    const onSubmit = data => console.log(data);

    return (
        <form className='user-form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='user-form__title'>Sign Up</h1>
            <InputField
                label='Email'
                type='text'
                name='login'
                ref={
                    register({
                        required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address."
                        }
                    })}
                errorMessage={errors.login && errors.login.message}
            />
            <InputField
                label='Password'
                type='password'
                name='password'
                ref={register({
                    required: true,
                    maxLength: {value: 60, message: 'Password length must not exceed 60 characters.'},
                    minLength: {value: 10, message: 'Password length must not be less than 10 characters.'}
                })
                }
                errorMessage={errors.password && errors.password.message}
            />
            <InputField
                label='Confirm Password'
                type='password'
                name='password_confirm'
                ref={register({
                    required: true,
                    maxLength: {value: 60, message: 'Password length must not exceed 60 characters.'},
                    minLength: {value: 10, message: 'Password length must not be less than 10 characters.'},
                    validate: value =>
                        value ===  watch('password') || 'The passwords do not match'
                })
                }
                errorMessage={errors.password_confirm && errors.password_confirm.message}
            />

            <input type="submit" className='user-form__input user-form__input_type_submit' value='Send'
            />
            <a href="/signin" className='user-form__a'>Have an account? Log in now.</a>
        </form>
    );
}

export default SignUp;

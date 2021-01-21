import {useForm} from "react-hook-form";
import React from 'react';

// Components
import {InputField} from "../components/InputField";

function SignInPage() {
    const {register, handleSubmit, errors} = useForm({
        reValidateMode: 'onSubmit',
    });
    const onSubmit = data => console.log(data);

    return (
        <form className='user-form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='user-form__title'>Sign In</h1>
            <InputField
                label='Login'
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

            <input type="submit" className='user-form__input user-form__input_type_submit'
            />
            <a href="/" className='user-form__a'>Can't Sign In?</a>
            <a href="/signup" className='user-form__a'>Don't have an account? Sign Up.</a>
        </form>
    );
}

export default SignInPage;

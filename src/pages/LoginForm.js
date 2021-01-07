import {useForm} from "react-hook-form";

// Components
import {InputField} from "../components/InputField";

function LoginForm() {
    const {register, handleSubmit, errors} = useForm({
        reValidateMode: 'onSubmit',
    });
    const onSubmit = data => console.log(data);


    return (
        <form action="" id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>

            <InputField
                label='Login'
                type='text'
                name='login'
                refData={register({
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
                refData={register({
                    required: true,
                    maxLength: {value: 60, message: 'Password length must not exceed 60 characters.'},
                    minLength: {value: 10, message: 'Password length must not be less than 10 characters.'}
                })
                }
                errorMessage={errors.password && errors.password.message}
            />

            <input type="submit" className='login-form__input' id='login-form__submit'
            />
            <a href="/">Can't Sign In?</a>
            <a href="/">Create Account</a>
        </form>
    );
}

export default LoginForm;

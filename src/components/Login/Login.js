import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControl'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import styles from '../common/FormsControl/FormControl.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field 
                    validate={[required]}
                    placeholder={'email'} name={'email'} component={Input}/>
                </div>
                <div>
                    <Field 
                    validate={[required]}
                    placeholder={'Password'} name={'password'} component={Input} type={'password'}/>
                </div>
                <div>
                    <Field 
                    validate={[]}
                    component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
                </div>

                {props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)
  
const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mstp = (state) => (
    {
        isAuth: state.auth.isAuth
    }
)

export default connect(mstp, {login})(Login)

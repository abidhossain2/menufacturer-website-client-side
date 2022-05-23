import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Menubar from '../../Menubar/Menubar';
import './SignIn.css'

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='form-section-menu'>
                <Menubar></Menubar>
            </div>
            <div className='form-container'>
                <div className='signin-form'>
                    <h3 className='text-center my-3 auth-heading'>Sign In</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", {required:true})} placeholder="Email" /> <br />
                        <input {...register("password", { required: true })} placeholder="Password"/>  
                        <div><p className='forgot-pass-btn'>Forgot Password</p></div>
                        {(errors.email || errors.password) && <p className='text-center require-error'>Both fields are required</p>} <br />
                        <button className='auth-btn'>Sign In</button>
                        <span className='form-line'><span className='form-divider'></span></span>
                        <div><p className='text-center exist-account'>Don't have an account!!! <Link className='auth-link' to='/register'>Register</Link></p></div>
                        <button className='auth-btn'>Sign In with Google</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;
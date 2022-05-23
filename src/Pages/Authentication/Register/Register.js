import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Menubar from '../../Menubar/Menubar';
import './Register.css'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='form-section-menu'>
                <Menubar></Menubar>
            </div>
            <div className='register-form-container'>
                <div className='register-form'>
                    <h3 className='text-center my-3 auth-heading'>Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true })} placeholder="Name" /> <br />
                        <input {...register("email", { required: true })} placeholder="Email" /> <br />
                        <input {...register("password", { required: true })} placeholder="Password" /> <br />
                        <input {...register("confirmPassword", { required: true })} placeholder="Confirm Password" />
                        {(errors.email || errors.password || errors.name ||errors.confirmPassword) && <p className='text-center require-error'>All fields are required</p>} <br />
                        <button className='auth-btn'>Register</button>
                        <span className='form-line'><span className='form-divider'></span></span>
                        <div><p className='text-center exist-account'>Already have an account!!! <Link className='auth-link' to='/signin'>Sign In</Link></p></div>
                        <button className='auth-btn'>Sign In with Google</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
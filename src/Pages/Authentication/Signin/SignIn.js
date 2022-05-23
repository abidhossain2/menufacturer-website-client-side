import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../../firebase.init';
import Menubar from '../../Menubar/Menubar';
import './SignIn.css'

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [defect, setDefect] = useState('')
    if (user) {
        navigate(from, { replace: true });
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =  data => {
        console.log(data)
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if(errorCode === "auth/user-not-found"){
                    setUserError(<p className='text-center user-error'>User Not Found</p>)
                    setPasswordError(null)
                    setDefect(null)
                }
                if(errorCode === "auth/wrong-password"){
                    setPasswordError(<p className='text-center user-error'>Please Enter Correct Password</p>)
                    setUserError(null)
                    setDefect(null)
                }
                if(errorCode === "auth/too-many-requests"){
                    setDefect(<p className='text-center user-error'>Something is wrong</p>)
                    setUserError(null)
                    setPasswordError(null)
                }
                
            });
    };

    return (
        <>
            <div className='form-section-menu'>
                <Menubar></Menubar>
            </div>
            <div className='form-container'>
                <div className='signin-form'>
                    <h3 className='text-center my-3 auth-heading'>Sign In</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", { required: true })} placeholder="Email" type='email'/> <br />
                        <input {...register("password", { required: true })} placeholder="Password" type='password'/>
                        <div><p className='forgot-pass-btn'>Forgot Password</p></div>
                        {(errors.email || errors.password) && <p className='text-center require-error'>Both fields are required</p>} <br />
                        {userError} {passwordError} {defect}
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
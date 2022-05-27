import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Menubar from '../../Menubar/Menubar';
import './Register.css'
import auth from '../../../firebase.init'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useUpdateProfile,useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth)

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        await updateProfile({displayName: data.name})
    };
    const email = user?.email;
    if(user){
        fetch(`https://blooming-falls-70895.herokuapp.com/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        window.location.reload();
        navigate('/')
    }

    const handleGoogleSign = async() => {
        await signInWithGoogle();
    }
    return (
        <>
            <div className='form-section-menu'>
                <Menubar></Menubar>
            </div>
            <div className='register-form-container'>
                <div className='register-form'>
                    <h3 className='text-center my-3 auth-heading'>Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, minLength: 4})} placeholder="Name" /> <br />
                        {errors.name?.type === "minLength" && <p className='text-center length-error'>Name should be 4 characters long</p>}
                        <input {...register("email", { required: true, pattern: {value: /\S+@\S+\.\S+/} })} placeholder="Email" type='email'/> <br />
                        {errors.email?.type === "pattern" && <p className='text-center length-error'>Enter Valid Email</p>}
                        <input {...register("password", { required: true, minLength:6 })} placeholder="Password" type='password'/> <br />
                        {errors.password?.type === "minLength" && <p className='text-center length-error'>Password at least 6 characters long</p>}
                        {(errors.email || errors.password || errors.name ||errors.confirmPassword) && <p className='text-center require-error'>All fields are required</p>} <br />
                        <button className='auth-btn'>Register</button>
                        <span className='form-line'><span className='form-divider'></span></span>
                        <div><p className='text-center exist-account'>Already have an account!!! <Link className='auth-link' to='/signin'>Sign In</Link></p></div>
                    </form>
                    <button className='auth-btn' onClick={handleGoogleSign}>Sign In with Google</button>
                </div>
            </div>
        </>
    );
};

export default Register;
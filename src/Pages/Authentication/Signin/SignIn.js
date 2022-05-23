import React, { useState } from 'react';
import { toast} from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Menubar from '../../Menubar/Menubar';
import './SignIn.css'
import { Modal } from 'react-bootstrap';

const SignIn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [defect, setDefect] = useState('')
    const [passResetEmail, setPassResetEmail] = useState('')
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/user-not-found") {
                    setUserError(<p className='text-center user-error'>User Not Found</p>)
                    setPasswordError(null)
                    setDefect(null)
                }
                if (errorCode === "auth/wrong-password") {
                    setPasswordError(<p className='text-center user-error'>Please Enter Correct Password</p>)
                    setUserError(null)
                    setDefect(null)
                }
                if (errorCode === "auth/too-many-requests") {
                    setDefect(<p className='text-center user-error'>Something is wrong</p>)
                    setUserError(null)
                    setPasswordError(null)
                }

            });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='p-5 modal-body'>
                    <input type="email" placeholder='Enter your email to reset password' value={passResetEmail} onChange={(e) => setPassResetEmail(e.target.value)} />
                    <br /> <br />
                    <button className='send-btn' onClick={async () => {
                        await sendPasswordResetEmail(passResetEmail)
                        setPassResetEmail('')
                        toast.success('Password reset email sent')
                        setShow(false)
                    }}>Send</button>
                    <button className='close-btn ms-5' onClick={handleClose}>Close</button>
                </Modal.Body>
            </Modal>
            <div className='form-section-menu'>
                <Menubar></Menubar>
            </div>
            <div className='form-container'>
                <div className='signin-form'>
                    <h3 className='text-center my-3 auth-heading'>Sign In</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email")} placeholder="Email" type='email' required /> <br />
                        <input {...register("password")} placeholder="Password" type='password' required/>
                        <div><p className='forgot-pass-btn' onClick={handleShow}>Forgot Password</p></div>
                        {userError} {passwordError} {defect}
                        <button className='auth-btn'>Sign In</button>
                        <span className='form-line'><span className='form-divider'></span></span>
                        <div><p className='text-center exist-account'>Don't have an account!!! <Link className='auth-link' to='/register'>Register</Link></p></div>
                    </form>
                        <button className='auth-btn' onClick={() => signInWithGoogle()}>Sign In with Google</button>
                </div>
            </div>
        </>
    );
};

export default SignIn;
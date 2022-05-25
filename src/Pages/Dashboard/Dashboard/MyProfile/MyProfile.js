import React from 'react';
import './MyProfile.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init'

const MyProfile = () => {
    const [user] = useAuthState(auth)

    return (
        <>
            <h3 className='text-center addprofile-heading-txt'>My Profile</h3>
            <div className='profile-container'>
                <div className='simple-info'>
                    <p>Name: {user?.displayName}</p>
                    <p>Email: {user?.email}</p>
                </div>
                <div className='more-info-container'>
                    <p className='text-center info-heading-txt'>Add more information</p>
                    <div className='more-info-form'>
                        <input type="text" placeholder='Educational background' /> <br /><br />
                        <input type="text" placeholder='District' /> <br /><br />
                        <input type="text" placeholder='City' /> <br /><br />
                        <input type="text" placeholder='Phone' /> <br /><br />
                        <input type="text" placeholder='LinkedIn profile link' /> <br /><br />
                        <div className='info-btns'>
                            <button className='info-add-btn'>Add</button> <span>Or</span>
                            <button className='info-update-btn'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
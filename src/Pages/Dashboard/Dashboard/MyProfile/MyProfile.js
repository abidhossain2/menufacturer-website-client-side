import React, { useState } from 'react';
import './MyProfile.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init'
import { toast } from 'react-toastify';


const MyProfile = () => {

    const [user] = useAuthState(auth)
    const name = user?.displayName;
    const email = user?.email;
    const [education, setEducation] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [socialLink, setsocialLink] = useState('')

    const addInfo = () => {
        fetch('https://fathomless-earth-48987.herokuapp.com/myprofile', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    }, 
                    body: JSON.stringify({name, email, education, district,city,phone,socialLink})
                })
                .then(res =>res.json())
                .then(data => {
                    if(data.insertedId){
                        toast.success('Information added successfully')
                        setEducation('')
                        setDistrict('')
                        setCity('')
                        setPhone('')
                        setsocialLink('')    
                    }
                    else{
                        toast.warn('Your information is already stored. You can just update your information')
                    }
                })
            }
    const updateInfo = () => {
        fetch(`https://fathomless-earth-48987.herokuapp.com/myprofile/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    }, 
                    body: JSON.stringify({name, email, education, district,city,phone,socialLink})
                })
                .then(res =>res.json())
                .then(data => {
                    if(data){
                        toast.success('Successfully updated')
                        setEducation('')
                        setDistrict('')
                        setCity('')
                        setPhone('')
                        setsocialLink('')
                    }
                })
            }
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
                        <input type="text" placeholder='Educational background' value={education} onChange={e => setEducation(e.target.value)} /> <br /><br />
                        <input type="text" placeholder='District' value={district} onChange={e => setDistrict(e.target.value)} /> <br /><br />
                        <input type="text" placeholder='City' value={city} onChange={e => setCity(e.target.value)} /> <br /><br />
                        <input type="text" placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} /> <br /><br />
                        <input type="text" placeholder='LinkedIn profile link' value={socialLink} onChange={e => setsocialLink(e.target.value)} /> <br /><br />
                        <div className='info-btns'>
                            <button className='info-add-btn' onClick={addInfo}>Add</button> <span>Or</span>
                            <button className='info-update-btn' onClick={updateInfo}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
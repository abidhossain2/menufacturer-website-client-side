import React from 'react';
import './Enquiry.css'

const Enquiry = () => {
    return (
        <div className='enquiry-section'>
            <div className='enquiry-container'>
                <div>
                    <img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600" alt="" />
                </div>
                <div>
                    <h4 className='enquiry-heading mt-2'>Quick Enquiry</h4> <br />
                    <input type="text" placeholder='Name' />
                    <input className='email' type="email" placeholder='Email' /> <br /> <br /> <br />
                    <div className='enquiry-form'>
                        <input type="text" placeholder='Phone' />

                        <div className='select-container'>
                            <select className='select'>
                                <option>Select Country</option>
                                <option>Bangladesh</option>
                                <option>England</option>
                                <option>Australia</option>
                            </select>
                        </div>
                    </div> <br /> <br /> <br />
                    <textarea className='text-area' placeholder='Leave a message for us'></textarea> <br /> <br />
                    <button className='enquiry-btn'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Enquiry;
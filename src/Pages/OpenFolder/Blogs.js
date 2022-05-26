import React from 'react';
import Menubar from '../Menubar/Menubar'

const Blogs = () => {
    return (
        <>
            <div className='bg-black'>
                <Menubar></Menubar>
            </div>
            <div>
                <span>Name:</span><span>Abid Hossain</span>
                <span>Email:</span><span>abidhossain351@gmail.com</span>
                <span>Educational Background: </span>
                <ul>
                    <li>SSC :
                        Background: Science
                        Institution:  The Buds Residential Model School and College, Sreemangal
                    </li>
                    <li>HSC :
                        Background: Science
                        Institution:  Sreemangal Govt. College, Sreemangal
                    </li>
                    <li>Honors :
                        Subject: Anthropology
                        Institution:  Shahjalal University of Science and Technology, Sylhet
                    </li>
                </ul>
                <span>Skills</span>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>CSS Framework: Bootstrap, Tailwind</li>
                    <li>Javascript</li>
                    <li>ReactJs</li>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDb</li>
                </ul>
                <span>Projects:</span>
                <ul>
                    <li>Live Link: https://wild-photographer-16c21.web.app/</li>
                    <li>Live Link: https://sensational-kheer-7d4faa.netlify.app/</li>
                    <li>Live Link: https://spice-stoke-service.web.app/</li>
                </ul>
            </div>
        </>
    );
};

export default Blogs;
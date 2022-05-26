import React from 'react';
import Menubar from '../Menubar/Menubar'
import './MyPortfolio.css'

const MyPortfolio = () => {

    return (
        <>
            <div className='bg-black'>
                <Menubar></Menubar>
            </div>
            <div className='portfolio'>
                <h5><span className='fw-bold'>Name:</span> Abid Hossain</h5>
                <h5><span className='fw-bold'>Email:</span> abidhossain351@gmail.com</h5>
                <h5><span className='fw-bold'>Educational Background:</span></h5>
                <ul>
                    <li>SSC :
                        Background: Science
                        Institution:  The Buds Residential Model School and College, Sreemangal
                    </li> <br />
                    <li>HSC :
                        Background: Science
                        Institution:  Sreemangal Govt. College, Sreemangal
                    </li><br />
                    <li>Honors :
                        Subject: Anthropology
                        Institution:  Shahjalal University of Science and Technology, Sylhet
                    </li>
                </ul>
                <h5><span className='fw-bold'>Skills:</span></h5>
                <ul>
                    <li>HTML</li> <br />
                    <li>CSS</li><br />
                    <li>CSS Framework: Bootstrap, Tailwind</li><br />
                    <li>Javascript</li><br />
                    <li>ReactJs</li><br />
                    <li>NodeJs</li><br />
                    <li>ExpressJs</li><br />
                    <li>MongoDb</li><br />
                </ul>
                <h5><span className='fw-bold'>Projects:</span></h5>
                <ul>
                    <li>Live Link: https://wild-photographer-16c21.web.app/</li><br />
                    <li>Live Link: https://sensational-kheer-7d4faa.netlify.app/</li><br />
                    <li>Live Link: https://spice-stoke-service.web.app/</li><br />
                </ul>
            </div>
        </>
    );
};

export default MyPortfolio;
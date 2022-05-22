import React from 'react';
import {RiLightbulbFill} from 'react-icons/ri';
import {MdOutlineLaunch, MdBuild} from 'react-icons/md';
import {ImArrowRight} from 'react-icons/im';
import './WorkProcess.css'

const WorkProcess = () => {
    return (
        <>
            <div className="workprocess-section">
                <h3 className='workprocess-heading'>Our Work Process</h3>
                <span className='line'><span className='divider'></span></span>
                <div className="workprocess-container">
                    <div className='single-workprocess-container'>
                        <div className='single-workprocess'>
                            <div><RiLightbulbFill className='work-icon'></RiLightbulbFill></div>
                        </div>
                        <p className='text-center'>Discover</p>
                    </div>
                    <div className='single-workprocess-container'>
                        <div className='icon-container'>
                            <div><ImArrowRight className='right-arrow'></ImArrowRight></div>
                        </div>
                    </div>
                    <div className='single-workprocess-container'>
                        <div className='single-workprocess'>
                            <div><MdBuild className='work-icon'></MdBuild></div>
                        </div>
                        <p className='text-center'>Build</p>
                    </div>
                    <div className='single-workprocess-container'>
                        <div className='icon-container'>
                            <div><ImArrowRight className='right-arrow'></ImArrowRight></div>
                        </div>
                    </div>
                    <div className='single-workprocess-container'>
                        <div className='single-workprocess'>
                            <div><MdOutlineLaunch className='work-icon'></MdOutlineLaunch></div>
                        </div>
                        <p className='text-center'>Launch</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkProcess;
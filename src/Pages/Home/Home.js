import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Menubar from '../Menubar/Menubar';
import BikeParts from './BikeParts/BikeParts';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Enquiry from './Enquiry/Enquiry';
import FeedBack from './FeedBack/FeedBack';
import Footer from './Footer/Footer';
import './Home.css'
import WorkProcess from './WorkProcess/WorkProcess';

const Home = () => {
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            setSpinner(false)
        }, 2000);
    }, [])
    return (
        <>
           {
                spinner ? <Loader></Loader> :
                <>
                    <div className='banner'>
                        <Menubar></Menubar>
                        <h2 className='quote'>High Quality <br />Bike Parts<br /> Manufacturer</h2>
                    </div>
                    <BikeParts></BikeParts>
                    <BusinessSummary></BusinessSummary>
                    <WorkProcess></WorkProcess>
                    <FeedBack></FeedBack>
                    <Enquiry></Enquiry>
                    <Footer></Footer>
                </>
           }
        </>
    );
};

export default Home;



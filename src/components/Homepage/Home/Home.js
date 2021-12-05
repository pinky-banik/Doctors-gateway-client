import React from 'react';
import Navbar from '../../Shared/navbar/Navbar';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
         <InfoCard></InfoCard>
         <Appointment></Appointment>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/navbar/Navbar';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCard from '../InfoCard/InfoCard';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
         <InfoCard></InfoCard>
         <Appointment></Appointment>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;
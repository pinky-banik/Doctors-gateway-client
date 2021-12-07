import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/navbar/Navbar';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exceptional/Exceptional';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
         <InfoCard></InfoCard>
         <Services></Services>
         <Exceptional></Exceptional>
         <Appointment></Appointment>
         <Testimonials></Testimonials>
         <Blogs></Blogs>
         <Doctors></Doctors>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/navbar/Navbar';
import AppointmentBanner from './AppoinmentBanner/AppointmentBanner';
import Booking from './Booking/Booking';

const Appointments = () => {
    
    const [date, setDate] = useState(new Date());



    return (
        <div>
            <Navbar></Navbar>
             <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
             <Booking date={date}></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;
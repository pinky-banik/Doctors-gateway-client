import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/navbar/Navbar';
import AppointmentBanner from './AppoinmentBanner/AppointmentBanner';
import AvaibleAppointments from './AvailableAppointments/AvaibleAppointments';

const Appointments = () => {
    
    const [date, setDate] = useState(new Date());



    return (
        <div >
            <Navbar></Navbar>
             <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
             <AvaibleAppointments date={date}></AvaibleAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;
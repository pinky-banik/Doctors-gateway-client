import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';
import { bookings } from '../../../Data/Data';

const AvaibleAppointments = ({date}) => {
    const style={
        color: "darkcyan",
    }
    return (
        <Container style={style} className='text-center mx-auto my-5 pt-5 px-5'>
        <Typography className='fs-5 fw-bold shadow p-3' >Appoinments available on <span className='text-info'>{new Date(date).toDateString()}</span></Typography>
        <Grid container spacing={2} className="my-5">
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    >
                    </Booking>)
                }
            </Grid>
       </Container>
    );
};

export default AvaibleAppointments;
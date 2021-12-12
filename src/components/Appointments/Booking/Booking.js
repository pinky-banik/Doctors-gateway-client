import { Container, Typography } from '@mui/material';
import React from 'react';

const Booking = ({date}) => {
    return (
        <Container>
            <Typography>Available Appointments on {new Date(date).toDateString()}</Typography>

        </Container>
    );
};

export default Booking;
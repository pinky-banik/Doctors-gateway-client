import React from 'react';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import BookedAppointments from './BookedAppointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <div>
            <Grid container spacing={2}>
                        <Grid item sm={12} md={5}>
                            <Calender
                                date={date}
                                setDate={setDate}
                            ></Calender>
                        </Grid>
                        <Grid item sm={12} md={7}>
                            <BookedAppointments date={date}></BookedAppointments>
                        </Grid>
                    </Grid>
        </div>
    );
};

export default DashboardHome;
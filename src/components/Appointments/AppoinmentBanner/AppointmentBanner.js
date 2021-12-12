import React from 'react';
import {Container, Grid, Typography} from '@mui/material';
import banner from "../../../images/chair.png"
import Calender from './Calender';



const AppointmentBanner = ({date,setDate}) => {
  
  const style={
      display:"flex",
      alignItems:"center",
      minHeight:500,
      height :"90vh",

  }


    return (
        <div style={style}>
            <Container>
              <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Typography variant="h4" > Appointment</Typography>
                      <Calender date={date} setDate={setDate}></Calender>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                      <img src={banner} alt="" width="100%" />
                  </Grid>
              </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;
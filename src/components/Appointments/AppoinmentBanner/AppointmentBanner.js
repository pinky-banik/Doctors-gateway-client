import React from 'react';
import {Container, Grid, Typography} from '@mui/material';
import banner from "../../../images/chair.png"
import Calender from '../../Shared/Calender/Calender';
import bg from '../../../images/bg.png'

const AppointmentBanner = ({date,setDate}) => {
  const style={
      minHeight:400,
      height :"65vh",
      display:"flex",
     alignItems:"center",
     background:`url(${bg})`,
     color : "darkcyan",
  }


    return (
        <div style={style} className=" mb-5 banner-container">
            <Container>
              <Grid  container spacing={3}>
                  <Grid className='mt-5 pt-5' item xs={12} sm={12} md={6} lg={6}>
                      <Typography className='mt-5 pt-5' variant="h4" > Appointment</Typography>
                      <Calender date={date} setDate={setDate}></Calender>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                      <img className='w-md-75 my-5 pt-5  d-none d-lg-block img-fluid' src={banner} alt="" width="100%" />
                  </Grid>
              </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;
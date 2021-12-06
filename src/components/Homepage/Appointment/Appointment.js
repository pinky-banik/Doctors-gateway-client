import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import doctorImg from "../../../images/doctor.png";
import MuiButton from '../../../StyledComponent/MuiButton';
import bg  from "../../../images/appointment-bg.png";

const Appointment = () => {
    const useStyle = makeStyles({
        root:{
            background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            height: 450,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 100,
            marginTop: 100
        }
    })
    const {root}=useStyle()
    return (
        <div className={root}>
            <Container>
             <Grid container spacing={2} sx={{alignItems:"center"}}>
                <Grid item xs={12} sm={12} md={5} lg={5} className="img-fluid d-none d-lg-block" >
                    <img src={doctorImg} alt="doctor" width="90%" style={{marginTop:-65}} />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}  >
                    <Typography variant="h6" color="#19D3AE">Appointment</Typography>
                    <Typography variant="h4" color="white" sx={{my:3}}>Make an appointment today</Typography>
                    <Typography variant="body1" color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum possimus consectetur odio incidunt impedit nisi.</Typography>
                    <MuiButton sx={{my:3}}>Learn more</MuiButton>
                </Grid>
             </Grid>
            </Container>
        </div>
    );
};

export default Appointment;
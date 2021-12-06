import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { infoData } from '../../../Data/Data';

 
const InfoCard = () => {
    return (
        <div style={{marginTop:"-5%"}}>
            <Container className="container-fluid w-75">
                <Grid container spacing={3}>
                    {
                       infoData.map(({Icon,title,description,background})=>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Paper variant="outlined" sx={{display:"flex",justifyContent:"space-between", background: background, color:'#fff',p:3}}>
                                <Icon sx={{fontSize:60}} />
                                <Box>
                                    <Typography variant ="body1">{title}</Typography>
                                    <Typography variant ="subtitle1">{description}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default InfoCard;
import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../StyledComponent/MuiButton';
import bg from '../../../images/footer-bg.png'
const useStyle = makeStyles({
    root: {
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        padding: '30px',
        marginTop: 100
    },
    socialIcon: {
        color: '#19D3AE !important',
        border: '1px solid #19D3AE !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#19D3AE !important',
            color: '#fff !important'
        }
    }
})
const Footer = () => {
    const { socialIcon ,root} = useStyle();
    return (
        <footer className={root}>
            <Container>
                <Grid container spacing={3} sx={{ my: 3 }} className="text-secondary" >
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Services</ListItemText>
                            <ListItemText >Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Oral Health</ListItemText>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>New York - 101010 Hudson</ListItemText>
                            <ListItemText>Yards</ListItemText>
                        </List>
                        <IconButton className={socialIcon}>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <Typography>Call Now</Typography>
                        <MuiButton variant="contained">+8065432145</MuiButton>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;
import React from 'react';
import styled from 'styled-components';
import {AppBar, Typography, Grid} from '@material-ui/core';
import {ShoppingCart, ArrowDownwardSharp} from '@material-ui/icons';

import shoe from '../../../assets/redShoe.png'
// import shoe from '../../assets/blueJordan.png'
import useStyles from '../RedLandingPage/styles';

const Landing = ({bluePageChanger, redPageChanger, blackPageChanger}) => {
    const classes = useStyles();
    return (
        <Main className={classes.main}>
            <Grid className={classes.grid} container>
                <Grid item md={12} xs={12}>
                    <Typography className={classes.subtitle}>NIKE JORDAN </Typography>
                    <Typography className={classes.title}>VORTEX 
                        <span className={classes.rightTitle}>COLORS
                        <span onClick= {redPageChanger} style={{backgroundColor:"red"}}className={classes.dot}></span>
                        <span onClick= {bluePageChanger} style={{backgroundColor:"blue"}}className={classes.dot}></span>
                        <span  onClick= {blackPageChanger} style={{backgroundColor:"black"}}className={classes.dot}></span>
                        </span>
                    </Typography>
                    <Image className={classes.image} src={shoe} alt="Nike Shoe" />
                    <Typography className={classes.sideTitle}>The Vortex</Typography>
                </Grid>
                <Grid item md={5} xs={12}>
                <Typography  className={classes.description}>
                    Inspired by the original that debuted in 1985, the Air Jordan 
                    1 Low offers a clean, classic look that's familiar yet always fresh. 
                    It's made for casual mode, with an iconic design that goes with everything 
                    and never goes out of style.
                </Typography>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Typography className={classes.lowerTitle}>SHOP NOW</Typography>
                    <ArrowDownwardSharp />
                </Grid>
            </Grid>
        </Main>
    )
}


const Main = styled.div`
    background-color: #FE4A4A;
    height: 52vw;
    min-height: 16rem;
    padding: 0rem;
    margin: 0rem;
    width: 100%;
    color: white;
    position: relative;
    bottom: 4.5rem;
`;

const Image = styled.img`
    position: absolute;
    align-items: center;
    justify-content: center;
    padding-left: 25vw;
    transform: rotate(25deg);
    margin: 0rem;
    left: 0;
    right: 0;
    padding-top: 5.9rem;
    filter: drop-shadow(50px 40px 40px #852121);
    width: 55vw;
`;


export default Landing
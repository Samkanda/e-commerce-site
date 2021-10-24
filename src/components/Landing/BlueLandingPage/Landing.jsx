import React from 'react';
import styled from 'styled-components';
import {Typography, Grid} from '@material-ui/core';
import {ArrowDownwardSharp} from '@material-ui/icons';
import {Link} from 'react-scroll';
import shoe from '../../../assets/blueShoe.png'
import useStyles from '../BlueLandingPage/styles';

const Landing = ({bluePageChanger, redPageChanger, blackPageChanger}) => {
      
    const classes = useStyles();
    return (
        <Main className={classes.main}>
            <Grid className={classes.grid} container>
                <Grid className={classes.con}item md={12} xs={12}>
                    <Typography className={classes.subtitle}>NIKE JORDAN </Typography>
                    <Typography className={classes.title}>VORTEX 
                        <span className={classes.rightTitle}>COLORS
                            <span onClick= {redPageChanger} style={{backgroundColor:"red"}}className={classes.dot}></span>
                            <span onClick= {bluePageChanger} style={{backgroundColor:"blue"}}className={classes.dot}></span>
                            <span onClick= {blackPageChanger}style={{backgroundColor:"black"}}className={classes.dot}></span>
                        </span>
                    </Typography>
                    <Image className={classes.image} src={shoe} alt="Nike Shoe" />
                    <Typography className={classes.sideTitle}>The Vortex</Typography>
                </Grid>
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
                <Link  to="products" spy={true} smooth={true} duration={1000}><Typography className={classes.lowerTitle}>SHOP NOW</Typography>
                <ArrowDownwardSharp /></Link>
            </Grid>
        </Main>
    )
}


const Main = styled.div`
    background-color: #69A0F1;
    height: 52vw;
    min-height: 16rem;
    padding: 0rem;
    margin: 0rem;
    width: 100%;
    color: white;
    bottom: 4.5rem;
    position: relative;
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
    padding-top: 5rem;
    filter: drop-shadow(50px 40px 40px #4444dd);
    width: 55vw;
`;


export default Landing

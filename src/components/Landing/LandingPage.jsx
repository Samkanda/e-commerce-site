import React, {useState} from 'react';
import BlueLandingPage from './BlueLandingPage/Landing';
import RedLandingPage from './RedLandingPage/Landing';
import BlackLandingPage from './BlackLandingPage/Landing'
import { motion, AnimatePresence } from "framer-motion"

const LandingPage = () => {
    const [landingPage, setLandingPage] = useState('blue')

    const redPageChanger = () => {
        setLandingPage('red');
    }

    const bluePageChanger = () => {
        setLandingPage('blue');
    }

    const blackPageChanger = () => {
        setLandingPage('black');
    }

    return (
        <div>
            {/* <motion.div animate = {{scale: [1, 2, 1]}} transition={{ duration: 0.2 }} > */}
                {landingPage === 'red' && <RedLandingPage redPageChanger = {redPageChanger} bluePageChanger ={bluePageChanger} blackPageChanger={blackPageChanger}/>}
            {/* </motion.div> */}
                {landingPage === 'black' && <BlackLandingPage redPageChanger = {redPageChanger} bluePageChanger ={bluePageChanger} blackPageChanger={blackPageChanger}/>}
            
                {landingPage === 'blue' && ( <BlueLandingPage redPageChanger = {redPageChanger} bluePageChanger ={bluePageChanger} blackPageChanger={blackPageChanger}/>)}
       
            
        </div>
    )
}

export default LandingPage

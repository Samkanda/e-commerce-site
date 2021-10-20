import React, {useState, useEffect} from 'react';
import BlueLandingPage from './BlueLandingPage/Landing';
import RedLandingPage from './RedLandingPage/Landing';
import BlackLandingPage from './BlackLandingPage/Landing'
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
            {/* <BlueLandingPage setLandingPage = {setLandingPage}/> */}
            {landingPage === 'blue' && ( <BlueLandingPage redPageChanger = {redPageChanger} bluePageChanger ={bluePageChanger} blackPageChanger={blackPageChanger}/>)}

            {landingPage === 'red' && <RedLandingPage redPageChanger = {redPageChanger} bluePageChanger ={bluePageChanger} blackPageChanger={blackPageChanger}/>}

            {landingPage === 'black' && <BlackLandingPage redPageChanger = {redPageChanger} bluePageChanger ={bluePageChanger} blackPageChanger={blackPageChanger}/>}
        </div>
    )
}

export default LandingPage

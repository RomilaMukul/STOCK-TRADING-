import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';


function HomePage(){
    return (
        <>
            <Navbar />
            {/* <p style={{background: 'yellow', padding: '10px'}}>--- HERO SHOULD BE BELOW THIS ---</p> */}
            <Hero />
            {/* <p style={{background: 'yellow', padding: '10px'}}>--- AWARDS SHOULD BE BELOW THIS ---</p> */}
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}
export default HomePage;
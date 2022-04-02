import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Home/Banner';
import HowItWorks from '../../components/Home/HowItWorks';
import Stat from '../../components/Home/Stat';
const Home =()=>{
    return(
        <div>
            <Header />
            <Banner />
            <Stat />
            <HowItWorks />
        </div>
    )
}


export default Home;

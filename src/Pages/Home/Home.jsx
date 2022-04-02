import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Home/Banner';
import HowItWorks from '../../components/Home/HowItWorks';
import Stat from '../../components/Home/Stat';
import Review from '../../components/Home/Review';
import Footer from '../../components/Home/Footer';

const Home =()=>{
    return(
        <div>
            <Header />
            <Banner />
            <Stat />
            <HowItWorks />
            <Review />
            <Footer />
        </div>
    )
}


export default Home;

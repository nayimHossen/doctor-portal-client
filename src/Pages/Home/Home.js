import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonial />
            <Footer/>
        </div>
    );
};

export default Home;
import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" title="Opening Hours" img={clock} />
            <InfoCard bgclassName="bg-accent" title="Our Location" img={marker} />
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" title="Contact Us" img={phone} />
        </div>
    );
};

export default Info;
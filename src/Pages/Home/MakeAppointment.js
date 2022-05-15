import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="doctor" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make and Appointment today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iusto dolor eius consequuntur tenetur totam! Officiis nesciunt rem, repellat tenetur pariatur consequatur numquam recusandae facilis quibusdam sequi inventore rerum dignissimos.!</p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
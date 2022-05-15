import React from 'react';

const Service = ({ service, setTreatment, date }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span>no slots available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className='flex justify-center'>
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal" class="btn btn-secondary text-white toUppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
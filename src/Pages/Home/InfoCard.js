import React from 'react';

const InfoCard = ({ img, title, bgClass }) => {
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Movie" />
            </figure>

            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
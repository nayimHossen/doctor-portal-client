import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          <p>You have selected : {format(date, 'pp')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
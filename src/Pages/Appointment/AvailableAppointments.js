import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-xl text-primary text-center mb-10'>Available Appointment on {format(date, 'pp')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            />}
        </div>
    );
};

export default AvailableAppointments;
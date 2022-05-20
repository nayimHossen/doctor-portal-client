import { format } from 'date-fns';
import {  useState } from 'react';
import {useQuery} from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'pp')

    const { isLoading, error, data : services, refetch } = useQuery(['available', formattedDate], () =>  fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            )

            if(isLoading) {
                return <Loading/>
            }
    return (
        <div>
            <h2 className='text-xl text-primary text-center mb-10'>Available Appointment on {format(date, 'pp')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    services?.map(service => <Service
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
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointments;
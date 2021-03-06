import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

const BookingModal = ({ treatment, date, setTreatment , refetch}) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'pp');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;

       const booking = {
           treatmentId: _id,
           treatment: name,
           date: formattedDate,
           slot,
           patient: user.email,
           patientName: user.displayName,
           phone: phone
       };
       fetch('http://localhost:5000/booking',{
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(booking)
       })
       .then(res => res.json())
       .then(data => {
           if(data.success) {
               toast(`Appointment is set, ${formattedDate}, at ${slot}`)
           }
           else{
            toast.error(`Already have an appointment is set, ${date.booking?.date}, at ${date.booking?.slot}`)
           }
           refetch()
        setTreatment(null)
       });
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-1 justify-items-center'>
                        <input type="text" value={format(date, 'pp')} readOnly className="input input-bordered input-primary w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Name" value={user?.displayName} className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Email" value={user?.email} className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="number" placeholder="Phone" name='phone' className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
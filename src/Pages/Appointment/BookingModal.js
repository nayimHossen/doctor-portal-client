import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
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
                        <input type="text" placeholder="Phone" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
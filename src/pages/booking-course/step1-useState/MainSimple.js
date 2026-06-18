import { useState } from 'react';
import BookingForm from './BookingForm';

export default function MainSimple() {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
    ]);
    function updateTimes(newTimes) {
        setAvailableTimes(newTimes);
    }
    return (
        <main>
            <h1>Booking (Step 1 - useState)</h1>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </main>
    );
}
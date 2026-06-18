import { useReducer } from 'react';
import BookingForm from './BookingForm';

export function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initializeTimes();
        default:
            return state;
    }
}

export default function MainSimple() {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    return (
        <main>
            <h1>Booking (Step 2 - useReducer)</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </main>
    );
}
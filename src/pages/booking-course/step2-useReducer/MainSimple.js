import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingUtils';


export default function MainSimple() {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    const [bookingData, setBookingData] = useState(() => {
        const saved = localStorage.getItem('bookingData');
        return saved ? JSON.parse(saved) :  [];
    });

    // 提交表單到 API，成功後跳轉到確認頁面
    function submitForm(formData) {
        const result = window.submitAPI(formData);
        if (result) {
             // 把新訂位加到既有資料，並存進 localStorage
            const updatedData = [...bookingData, formData];
            setBookingData(updatedData);
            localStorage.setItem('bookingData', JSON.stringify(updatedData));
            navigate('/booking-confirmed');
        }
    }

    return (
        <main>
            <h1>Booking (Step 2 - useReducer)</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </main>
    );
}
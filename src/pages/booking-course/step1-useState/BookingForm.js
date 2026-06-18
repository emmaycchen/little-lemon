import { useState } from 'react';

export default function BookingForm( { availableTimes, updateTimes }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Booked! ${date} at ${time} for ${guests} guest(s). Occasion: ${occasion}`);
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={e => setTime(e.target.value)}
            >
                {availableTimes.map(t => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={e => setGuests(parseInt(e.target.value))}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Business">Business</option>
            </select>
            <input type="submit" value="Make your reservation" />
        </form>
    )
}

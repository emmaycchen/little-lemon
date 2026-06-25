import { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate]         = useState('');
  const [time, setTime]         = useState('');
  const [guests, setGuests]     = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  function handleDateChange(e) {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // 把表單資料打包傳給 submitForm
    submitForm({ date, time, guests, occasion });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
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
        onChange={e => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={e => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Business</option>
        <option>Graduation</option>
      </select>

      <input type="submit" value="Make your reservation" />
    </form>
  );
}
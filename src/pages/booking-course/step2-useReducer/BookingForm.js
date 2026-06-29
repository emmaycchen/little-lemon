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

  // 今天的日期，格式 YYYY-MM-DD，讓使用者不能選過去的日期
    const today = new Date().toISOString().split('T')[0];

  // 檢查每個欄位是否有效
    function isFormValid() {
    return (
        date !== '' &&
        date >= today &&      // 日期不能是過去
        time !== '' &&        // 時間必須選擇
        guests >= 1 &&        // 最少 1 人
        guests <= 10          // 最多 10 人
    );
}

  return (
    <form 
    onSubmit={handleSubmit}
    aria-label="Reservation booking form"
    style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}          // 不能選今天以前的日期
        required             // 必填
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required             // 必填
        onChange={e => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"           // 最少 1 位客人
        max="10"          // 最多 10 位客人
        value={guests}
        required           // 必填
        onChange={e => setGuests(parseInt(e.target.value))} // 如果輸入不是數字，預設為 1
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
        <option>Engagement</option>
      </select>

      <input
        type="submit"
        value="Make your reservation"
        disabled={!isFormValid()} // 表單無效時禁用按鈕
        aria-label="On Click"
        style={{
          opacity: isFormValid() ? 1:0.5, // 無效時變半透明
          cursor: isFormValid() ? 'pointer' : 'not-allowed' // 游標變化
        }}
      />
    </form>
  );
}
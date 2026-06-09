import '../booking.css'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TIME_SLOTS = [
  '11:00 AM', '6:00 PM',
  '11:30 AM', '6:30 PM',
  '12:00 PM', '7:00 PM',
  '12:30 PM', '7:30 PM',
];

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const NAV_ROUTES = {
  'Home':         '/',
  'About':        '/#about',
  'Menu':         '/#menu',
  'Reservations': '/booking',
  'Order Online': '/booking',
  'Login':        '/login',
};

/* Inline Nav with logo — centred layout matching Figma */
function BookingNav() {
  return (
    <nav className="booking-nav">
      <div className="booking-nav__inner">
        <Link to="/" className="booking-nav__logo">
          <img src="/Logo.svg" alt="Little Lemon" className="booking-nav__logo-img" />
        </Link>
        <ul className="booking-nav__links">
          {Object.keys(NAV_ROUTES).map(link => (
            <li key={link}>
              <Link to={NAV_ROUTES[link]}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Calendar({ selectedDate, onSelect }) {
  const [viewDate, setViewDate] = useState(new Date());

  const year  = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleString('default', { month: 'long' });

  const firstDay       = new Date(year, month, 1).getDay();
  const startOffset    = (firstDay === 0 ? 6 : firstDay - 1);
  const daysInMonth    = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = startOffset - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, current: false });
  }

  function isSameDay(cell) {
    if (!selectedDate || !cell.current) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth()    === month &&
      selectedDate.getDate()     === cell.day
    );
  }

  return (
    <div className="calendar">
      <div className="calendar__nav">
        <button onClick={() => setViewDate(new Date(year, month - 1, 1))} aria-label="Previous month">&#8249;</button>
        <span>{monthName} {year}</span>
        <button onClick={() => setViewDate(new Date(year, month + 1, 1))} aria-label="Next month">&#8250;</button>
      </div>
      <div className="calendar__grid">
        {DAYS.map(d => (
          <div key={d} className="calendar__day-label">{d}</div>
        ))}
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`calendar__cell ${!cell.current ? 'calendar__cell--muted' : ''} ${isSameDay(cell) ? 'calendar__cell--selected' : ''}`}
            onClick={() => { if (cell.current) onSelect(new Date(year, month, cell.day)); }}
          >
            {cell.day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Booking() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({
    guests: '', occasion: '', name: '', email: '', instructions: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function formatDate(date) {
    if (!date) return '';
    return date.toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time.');
      return;
    }
    navigate('/confirmation', {
      state: { date: formatDate(selectedDate), time: selectedTime, ...form }
    });
  }

  return (
    <>
      <BookingNav />

      {/* Hero — background image set via inline style so it reads from /public */}
      <div
        className="booking-hero"
        style={{ backgroundImage: "url('/restaurantfood.jpg')" }}
      >
        <h1>Book Now!</h1>
      </div>

      {/* Form — white background */}
      <main className="booking-page">
        <p className="booking-page__intro">
          To book a reservation, please fill-out this form.
        </p>

        <form onSubmit={handleSubmit} noValidate>

          {/* Date + Time */}
          <section className="booking-page__section">
            <h2 className="booking-page__label">Select Date / Time*</h2>
            <div className="booking-page__datetime">
              <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />

              <div className="booking-page__timeslots">
                <h3>Time</h3>
                <div className="timeslot-grid">
                  {TIME_SLOTS.map(t => (
                    <button
                      key={t}
                      type="button"
                      className={`timeslot${selectedTime === t ? ' timeslot--selected' : ''}`}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {selectedDate && selectedTime && (
                  <div className="booking-page__confirmed-dt">
                    <p className="confirmed-dt__label">Confirmed Date/Time</p>
                    <div className="confirmed-dt__value">
                      <span>{formatDate(selectedDate)}&nbsp;&nbsp;{selectedTime}</span>
                      <span>📅</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Guests + Occasion — centred 2-col */}
          <div className="booking-form__body">
            <div className="booking-page__row">
              <div className="form-group">
                <label htmlFor="guests">Number of Guests*</label>
                <select id="guests" name="guests" value={form.guests} onChange={handleChange} required>
                  <option value=""></option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange}>
                  <option value="">Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Business">Business Meal</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input type="text" id="name" name="name" value={form.name}
                onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={form.email}
                onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="instructions">Special Instruction</label>
              <textarea id="instructions" name="instructions" value={form.instructions}
                onChange={handleChange} rows={5} />
            </div>

            <div className="booking-form__submit">
              <button type="submit" className="btn btn--yellow">
                Confirm Reservation
              </button>
            </div>
          </div>

        </form>
      </main>

      <Footer />
    </>
  );
}
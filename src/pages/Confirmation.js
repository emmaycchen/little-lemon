import Nav from '../components/Nav';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NAV_ROUTES = {
  'Home':         '/',
  'About':        '/#about',
  'Menu':         '/#menu',
  'Reservations': '/booking',
  'Order Online': '/booking',
  'Login':        '/login',
};

function ConfirmNav() {
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

export default function Confirmation() {
  const { state } = useLocation();
  const navigate  = useNavigate();

  if (!state) {
    navigate('/booking');
    return null;
  }

  const { date, time, guests, name, email, occasion } = state;

  const rows = [
    { label: 'Date:',             value: date },
    { label: 'Time:',             value: time },
    { label: 'Number of Guests:', value: guests },
    { label: 'Full Name:',        value: name },
    { label: 'Email Address:',    value: email },
    { label: 'Occasion:',         value: occasion || '—' },
  ];

  return (
    <>
      <ConfirmNav />

      {/* Hero — same as Booking page */}
      <div
        className="booking-hero"
        style={{ backgroundImage: "url('/restaurantfood.jpg')" }}
      >
        <h1>Book Now!</h1>
      </div>

      {/* Confirmation summary */}
      <main className="confirmation-page">
        <h2 className="confirmation-page__title">Your reservation information:</h2>

        <div className="confirmation-page__table">
          {rows.map(row => (
            <div className="confirmation-page__row" key={row.label}>
              <span className="confirmation-page__key">{row.label}</span>
              <span className="confirmation-page__val">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="confirmation-page__actions">
          <button className="btn btn--confirm" onClick={() => navigate('/success')}>
            Confirm
          </button>
          <button className="btn btn--cancel" onClick={() => navigate('/booking')}>
            Cancel
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
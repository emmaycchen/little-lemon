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

function SuccessNav() {
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

export default function Success() {
  const navigate = useNavigate();

  return (
    <>
      <SuccessNav />

      {/* Hero — green bg, text left, food photo right */}
      <div className="success-hero">
        <div className="success-hero__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div
          className="success-hero__image"
          style={{ backgroundImage: "url('/restaurantfood.jpg')" }}
          role="img"
          aria-label="Little Lemon restaurant food"
        />
      </div>

      {/* Success content */}
      <main className="success-page">

        {/* Peach card */}
        <div className="success-card">
          <h2>Congratulations! You have successfully reserved a table!</h2>
          <h3>Thank you for choosing Little Lemon!</h3>
        </div>

        {/* Homepage button — white bg, dark border */}
        <div className="success-page__action">
          <button className="btn btn--homepage" onClick={() => navigate('/')}>
            Homepage
          </button>
        </div>

      </main>

      <Footer />
    </>
  );
}
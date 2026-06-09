import { Link } from 'react-router-dom';

const NAV_ROUTES = {
  'Home':         '/',
  'About':        '/#about',
  'Menu':         '/#menu',
  'Reservations': '/booking',
  'Order Online': '/booking',
  'Login':        '/login',
};

function Footer() {
  return (
    <footer>
      <img src="Logo.svg" alt="Little Lemon Logo" className="footer-logo" />

      <nav aria-label="Sitemap">
        <h4>Sitemap</h4>
        <ul>
          {Object.keys(NAV_ROUTES).map(link => (
            <li key={link}>
              <Link to={NAV_ROUTES[link]}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <address>
        <h4>Contact Us</h4>
        <ul>
          <li>123 Main Street, Chicago, IL 60601</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </address>

      <nav aria-label="Social Media Links">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com"  target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
import { Link } from 'react-router-dom';

const NAV_ROUTES = {
  'Home':         '/',
  'About':        '/#about',
  'Menu':         '/#menu',
  'Reservations': '/booking',
  'Order Online': '/booking',
  'Login':        '/login',
};

function Nav() {
  return (
    <nav>
      <ul>
        {Object.keys(NAV_ROUTES).map(link => (
          <li key={link}>
            <Link to={NAV_ROUTES[link]}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
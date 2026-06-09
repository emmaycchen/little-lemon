import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage    from './pages/HomePage';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/booking"     element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/success"     element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
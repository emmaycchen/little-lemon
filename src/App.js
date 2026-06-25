import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages -完整版
import HomePage    from './pages/HomePage';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Success from './pages/Success';

// Pages — 課程練習版
import Step1Main from './pages/booking-course/step1-useState/MainSimple';
import Step2Main from './pages/booking-course/step2-useReducer/MainSimple';
import ConfirmedBooking from './pages/booking-course/step2-useReducer/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 完整版（不動） */}
        <Route path="/"            element={<HomePage />} />
        <Route path="/booking"     element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/success"     element={<Success />} />

         {/* 課程練習版 */}
        <Route path="/booking-step1" element={<Step1Main />} />
        <Route path="/booking-step2" element={<Step2Main />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
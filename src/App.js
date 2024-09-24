
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { ko } from 'date-fns/locale';
import './App.css'
import ReservationCalendar from './Pages/ReservationCanlendar/ReservationCalendar';

function App() {
  return (
    <ReservationCalendar />
  );
}

export default App;

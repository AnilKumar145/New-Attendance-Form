import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AttendanceForm } from './AttendanceForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mark-attendance/:sessionId" element={<AttendanceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

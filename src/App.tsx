import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AttendanceForm } from './AttendanceForm';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/mark-attendance/:sessionId" element={<AttendanceForm />} />
    </Routes>
  );
}

export default App;

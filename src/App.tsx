import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/doctor/:id" element={<DoctorPage/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

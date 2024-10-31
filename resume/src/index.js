import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyHistory } from './components/MyHistory';
import { Contacts } from './components/Contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/myhistory' element={<MyHistory />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

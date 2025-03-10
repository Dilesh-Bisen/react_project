import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/home';
import NotFound from './Pages/Not_Found/not_found';
import Success from './Pages/Success/success';
import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/success' element={<Success />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Toaster />
            </Router>
            <footer>
                <p>Visit our website: <a href="https://restaurant-book-table.vercel.app/" target="_blank" rel="noopener noreferrer">Restaurant Book Table</a></p>
            </footer>
        </>
    );
};

export default App;

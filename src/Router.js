import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function AppRouter() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
  
export default AppRouter;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
  
  export default AppRouter;
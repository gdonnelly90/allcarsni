import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Car from './pages/Car';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='car/:id' element={<Car />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

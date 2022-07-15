import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Car from './pages/Car';
import CarCloseDetailTest from './pages/CarCloseDetailTest';
import SellCar from './pages/SellCar';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import MainAccount from './pages/account/MainAccount';
import AdvertHistory from './pages/account/AdvertHistory';
import Favourites from './pages/account/Favourites';
import ManageAdvert from './pages/account/ManageAdvert';
import MyVehicle from './pages/account/MyVehicle';
import PaymentHistory from './pages/account/PaymentHistory';
import PaymentMethod from './pages/account/PaymentMethod';
import PersonalDetails from './pages/account/PersonalDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/cart' element={<Cart />} exact />
            <Route path='car/:id' element={<Car />} exact />
            <Route
              path='search/cardetail'
              element={<CarCloseDetailTest />}
              exact
            />
            <Route path='/sellcar' element={<SellCar />} exact />
            <Route path='/search' element={<Search />} exact />
            <Route path='/account' element={<MainAccount />} exact />
            <Route path='/login' element={<Login />} exact />
            <Route path='/register' element={<Register />} exact />
            <Route
              path='/account/adverthistory'
              element={<AdvertHistory />}
              exact
            />
            <Route path='/account/favourites' element={<Favourites />} exact />
            <Route
              path='/account/manageadvert'
              element={<ManageAdvert />}
              exact
            />
            <Route path='/account/myvehicle' element={<MyVehicle />} exact />
            <Route
              path='/account/paymenthistory'
              element={<PaymentHistory />}
              exact
            />
            <Route
              path='/account/paymentmethod'
              element={<PaymentMethod />}
              exact
            />
            <Route
              path='/account/personaldetails'
              element={<PersonalDetails />}
              exact
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

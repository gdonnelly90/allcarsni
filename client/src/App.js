import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/appContext';
import { Container } from 'react-bootstrap';
import { AppShell } from './AppShell';
import { ToastContainer } from 'react-toastify';
import { Home } from './pages/Home';
import Home2 from './pages/Home2';
import { Home1 } from './pages/Home1';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import Car from './pages/Car';
import CarCloseDetail from './pages/CarCloseDetail';
import SellCar from './pages/SellCar';
// import Search from './pages/Search';
import SearchGrid from './pages/SearchGrid';
import Login2 from './pages/Login2';
import Register2 from './pages/Register2';
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
    <AppProvider>
      <Router>
        <ToastContainer
          theme='colored'
          autoClose={2500}
          hideProgressBar={true}
        />
        <Routes>
          <Route
            path='/'
            element={
              <AppShell>
                <Home2 />
              </AppShell>
            }
            exact
          />
          <Route path='car/:id' element={<Car />} exact />
          <Route path='search/cardetail' element={<CarCloseDetail />} exact />
          <Route path='/sellcar' element={<SellCar />} exact />
          <Route path='/search' element={<SearchGrid />} exact />
          <Route path='/search/:id' element={<CarCloseDetail />} exact />{' '}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/account'
            element={
              <AppShell>
                <Account />
              </AppShell>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;

{
  /* <Route
    path="admin"
    element={
      <ProtectedRoute
        redirectPath="/home"
        isAllowed={!!user && user.roles.includes('admin')}
      >
        <Admin />
      </ProtectedRoute>
    }
  /> */
}

{
  /* <Route
          path='/account/adverthistory'
          element={<AdvertHistory />}
          exact
        />
        <Route path='/account/favourites' element={<Favourites />} exact />
        <Route path='/account/manageadvert' element={<ManageAdvert />} exact />
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
        /> */
}

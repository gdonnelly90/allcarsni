import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context/appContext';
import { AppShell } from './AppShell';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { Home2 } from './pages/Home2';
import { Register } from './pages/Register';
import { FeaturedReview } from './pages/FeaturedReview';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import { CarCloseDetail } from './pages/CarCloseDetail';
import { Search } from './pages/Search';
import { StripeSuccess } from './pages/StripeSuccess';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <ToastContainer theme='colored' autoClose={2500} hideProgressBar={true} />
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
          <Route
            path='/page/:pageNumber'
            element={
              <AppShell>
                <Home2 />
              </AppShell>
            }
            exact
          />

          <Route
            path='/search'
            element={
              <AppShell>
                <Search />
              </AppShell>
            }
            exact
          />
          <Route
            path='/vehicle/:id'
            element={
              <AppShell>
                <CarCloseDetail />
              </AppShell>
            }
            exact
          />

          <Route
            path='/review'
            element={
              <AppShell>
                <FeaturedReview />
              </AppShell>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/stripe/success'
            element={
              <AppShell>
                <StripeSuccess />
              </AppShell>
            }
          />
          <Route
            path='/account'
            element={
              <ProtectedRoute redirectPath='/'>
                <AppShell>
                  <Account />
                </AppShell>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;

{
  /*<Route
            path='/search'
            element={
              <AppShell>
                <TestPage />
              </AppShell>
            }
            exact
          />*/
}

{
  /* <Route path='car/:id' element={<Car />} exact /> */
}
{
  /* <Route
  path='/search/:id'
  element={
    <AppShell>
      <CarCloseDetail />
    </AppShell>
  }
  exact
/>{' '} */
}
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

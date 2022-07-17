import React, { useEffect } from 'react';
import Register from './pages/Register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import UserHome from './pages/UserHome';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import CompanyRegistration from './pages/CompanyRegistration';
import AdminHeader from './components/AdminHeader';
import { useSelector,useDispatch } from 'react-redux';
import TrackApplication from './pages/TrackApplication';
import ViewApplication from './pages/ViewApplication';
import BookingSlots from './pages/BookingSlots';

function App() {

 
  return (
    <>
      <Router>
      <div className="container">
     
           <Header /> 
          
        
        
        <Routes>
          <Route path='/' element={<UserHome />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          
          <Route path='/booking' element={<CompanyRegistration />}/>
        </Routes>
      </div>

      <Routes>

          <Route path='/admin' element={<AdminDashboard />}/>
          <Route path='/admin/track' element={<TrackApplication />} />
          <Route path='/viewApplication' element={<ViewApplication />}/>
          <Route path='/bookingSlots' element={<BookingSlots />}/>
      </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

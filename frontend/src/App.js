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
function App() {

 
  return (
    <>
      <Router>
      <div className="container">
     
         { <AdminDashboard /> ? <AdminHeader /> :  <Header /> }
          
        
        
        <Routes>
          <Route path='/' element={<UserHome />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          
          <Route path='/admin' element={<AdminDashboard />}/>
          <Route path='/booking' element={<CompanyRegistration />}/>
        </Routes>
      </div>

      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

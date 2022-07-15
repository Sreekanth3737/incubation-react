import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import {reset} from '../features/auth/authSlice'
import {createIncubation} from '../features/incubation/incubationSlice'
function UserHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user,isLoading, isError, message } = useSelector((state) => state.auth);
  const {forms}=useSelector((state)=> state.incube);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }
    
    // if(user.role==='admin'){
    //   navigate('/login')
    // }
    
    
      return ()=>{
           dispatch(reset())
         }
    
    

    // return ()=>{
    //   dispatch(reset())
    // }
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
  <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>User Dashboard</p>
       <Link to={'/booking'}><button className='btn'>Book a slot</button></Link>
      </section>
    </>
  )
}

export default UserHome
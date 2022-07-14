import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import {reset} from '../features/auth/authSlice'
function UserHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user,isLoading, isError, message } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }else{
      return ()=>{
           dispatch(reset())
         }
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
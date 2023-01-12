import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { runFireworks } from '../lib/utils';

import { useAppContext } from '../context/StateContext';

const Success = () => {

    const { setTotalPrice, setTotalQuantities, setCartitems} = useAppContext();
   const [order, setOrder] = useState(null);

   useEffect(() => {
     localStorage.clear();
     setCartitems([])
     setTotalPrice(0)
     setTotalQuantities(0)
     runFireworks();

     }, [])
   


  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
            <BsBagCheckFill />
        </p>
        <h2>THANK YOU FOR YOUR ORDER</h2>
        <p className='email-msg'>Check your Email for your receipt</p>
        <p className='description'>If you have an additional request or questions please email or call 
        <a className='email' href='mailto:dineafahcollections@gmail.com'>EMAIL</a> OR
        <a className='email' href='tel:+2348053745304'>CALL</a></p>
      
        <Link href='/'>
            <button type='button' className='btn' width='300px'>continue shopping</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Success

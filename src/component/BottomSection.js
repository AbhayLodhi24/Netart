import React from 'react'
import { FaFacebookF, FaPhone, FaGlobe } from 'react-icons/fa';

const BottomSection = () => {
  return (
    <div className="bottom-section">
        <h1>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1> 
        <h4>     
            CHEMICALS & PROCESS 
            <span className='v-line'>| </span>
            POWER WATER & WASTE WATER 
            <span className='v-line'>| </span>
            OILS & GAS
            <span className='v-line'>| </span> 
            PHARMA 
            <span className='v-line'>| </span> 
            SUGARS & DISTILLERIES 
            <span className='v-line'>| </span> 
            PAPER & PULP
            <span className='v-line'>| </span> 
            MARINE & DEFENCE 
            <span className='v-line'>| </span> 
            METAL & MINING 
            <span className='v-line'>| </span> 
            FOOD & BEVERAGE 
            <span className='v-line'>| </span>
         PETROCHEMICAL & REFINERIES 
            <span className='v-line'>| </span> 
            SOLAR  
            <span className='v-line'>| </span> 
            BUILDING 
            <span className='v-line'>| </span>
            HVAC 
            <span className='v-line'>| </span> 
            FIRE FIGHTING 
            <span className='v-line'>| </span>
            AGRICULTURE & RESIDENTIAL
        </h4>
        <div className="contact-details">
            <div> <FaPhone /> Toll free: 1800 200 1234</div>
            <div> <FaFacebookF />  www.facebook.com/cripumps</div>
            <div> <FaGlobe /> www.crigroups.com</div>
        </div>
    </div>
  )
}

export default BottomSection
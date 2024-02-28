import React from 'react'
import toolPic from "../asserts/tools.png"

const SubMain = () => {
  return (
    <div className="sub-section" >
          <h2>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </h2>
          <img src={toolPic} alt="Equipment"/>
          <h4>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h4>
          <div className='lineDivison' ></div>
    </div>
  )
}

export default SubMain
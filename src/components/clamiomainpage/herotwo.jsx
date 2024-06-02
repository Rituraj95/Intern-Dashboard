import React from 'react'
import img1 from './Asset/Frame 122.png';
import img2 from './Asset/Frame 120.png';
import img3 from './Asset/Frame 122.png';
import img4 from './Asset/Frame 4.png';

import './herotwo.css';

export default function herotwo() {
  return (
    <div >
        <h1>Getiing started is Easy</h1>

     <div className='maindivv'>
        <div >
            <img src={img1} alt="" />

        </div>
        <div>
            <img src={img2} alt="" srcset="" />

        </div>
        <div>
            <img src={img3} alt="" />

        </div>

    </div>

    <div className='lastimg'>
        <img src={img4} alt="" />

    </div>

    
      
      
    </div>
  )
}

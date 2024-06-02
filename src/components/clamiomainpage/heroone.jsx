// src/heroone.js
import React from 'react';
import { Link } from 'react-router-dom';
import img from './Asset/img.png';
import './heroone.css';

export default function Heroone() {
  return (
    <div className='maindiv'>
      <div>
        <h1> <span className='cla'>Clamio </span> Reward Program</h1>
        <p>Refer CLAMIO to fellow creators or sell 100 Digital Products through CLAMIO</p>
        <p>&</p>
        <p className='p3'>Earn RS 50000</p>

        <div className='Dash'>
          <Link to="/main-dashboard">
            <button>View Dashboard</button>
          </Link>
        </div>
      </div>
      <div className='img'>
        <img src={img} alt="Reward Program" />
      </div>
    </div>
  );
}

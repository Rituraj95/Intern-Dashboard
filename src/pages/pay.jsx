import React from 'react'
import './pay.css'

export default function pay() {
  return (
  
    <div className="payouts-container">
      <h1>Payouts</h1>
      <div className="payout-card">
        <h2>Last 7 Days</h2>
        <p>Rs.25</p>
      </div>
      <div className="payout-card">
        <h2>Last 30 Days</h2>
        <p>Rs.700</p>
      </div>
      <div className="payout-card">
        <h2>Total Earnings</h2>
        <p>Rs.5977</p>
      </div>
      <button className="settings-button">Settings</button>
    </div>
  )
};
        
      


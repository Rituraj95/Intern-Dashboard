import React, { useState } from 'react';
import './Dashboard.css';


export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <h1>It's time to create something</h1>
      <div className='upload'>
        <input type="file" id="file" className="file-input" onChange={handleFileChange} />
        <label htmlFor="file" className="file-label">
          <span className="plus-icon">+</span>
          <span className="text">Create Your Product</span>

        </label>
		
      </div>
    </div>
  );
}

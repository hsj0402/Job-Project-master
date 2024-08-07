// SettingRight.jsx
import React, { useEffect, useState } from 'react';
import './SettingRight.css';
import { useNavigate } from 'react-router-dom';
import DP from '../Assets/DP.jpg'

const SettingRight = () => {
  const [userName, setUserName] = useState('User');
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  const fetchUploads = async () => {
    const email = localStorage.getItem('userEmail'); // Replace with actual email
    const response = await fetch(`http://localhost:5000/api/users/${email}`);
    const data = await response.json();
    setUserName(data.userName);
  };

  useEffect(() => {
    // fetchUploads();
  }, []);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async () => {
    const email = localStorage.getItem('userEmail'); 
    try {
      await fetch(`http://localhost:5000/api/users`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email }),
      });
      navigate(`/projects`);
    } catch (error) {
      console.error('Error saving transcript:', error);
    }
  };

  return (
    <div className="main-content">
      <div className="setting-header">
        <div className="breadcrumb1">/ Account Settings</div>
        <div className="language-selector">
          EN <span className="flag">🇬🇧</span>
          <i class="fa-regular fa-bell"></i>
        </div>
      </div>
      <h1>Account Settings</h1>
      <div className="user-info">
        <img src={DP} alt="User" className="user-image" />
        <div className="user-details">
          <div className="input-group">
            <label>User Name</label>
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} readOnly />
          </div>
        </div>
      </div>
      <h2>Subscriptions</h2>
      <div className="subscription-box">
        <p>You are currently on the <strong>Ques AI Basic Plan!</strong></p>
        <button className="upgrade-button" onClick={handleSubmit}>Upgrade</button>
      </div>
      <a href="#" className="cancel-link">Cancel Subscription</a>
    </div>
  );
};

export default SettingRight;
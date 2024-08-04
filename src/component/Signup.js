import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


import user_icon from './Assests/person.png';
import email_icon from './Assests/email.png';
import password_icon from './Assests/password.png';



import { signup} from '../services/Apiservices'; 



const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("Signup successful");
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error during signup, please try again.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="password icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

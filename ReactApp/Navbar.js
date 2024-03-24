// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
      
      
        <li style={{ display: 'inline', marginRight: '10px' ,}}>
          <Link to="/login" style={{ textDecoration: 'none' }}><span style={{color:'green'}}>Login</span></Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}><span style={{color:'green'}}>Home</span></Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}><span style={{color:'green'}}>Dashboard</span></Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/payment" style={{ textDecoration: 'none' }}><span style={{color:'green'}}>Payment</span></Link>
        </li>


        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/quiz" style={{ textDecoration: 'none' }}><span style={{color:'green'}}>Quiz</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

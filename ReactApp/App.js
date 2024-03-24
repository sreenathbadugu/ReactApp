// App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Quiz from './Quiz.js';
import Navbar from './Navbar'; // Import the Navbar component
//import RegistrationForm from './Validation1.js';
//import LoginForm from './Validation2.js';
import Home from './home.js';
import LoginForm from './test';
//import PaymentForm from './payment.js';
import PaymentOption from './payment1.js';


function App() {
  return (
    
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <Navbar /> {/* Use the Navbar component here */}
        <Routes>
          
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/payment" element={<PaymentOption />}/>
        
          <Route path="/quiz" element={<Quiz />}/>
            
          
          <Route path="/" element={<Home/>}/>
          </Routes>
          
          
      </div>
    
  );
}

/*function Home() {

  return(
  <div>
  <center>
   <h2 style={{color:'red'}}><strong>Welcome Home page</strong></h2>
   </center>
   </div>
)}*/

export default App;

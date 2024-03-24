// Dashboard.js
import React from 'react';
import data from './quiz.jpg'

function Dashboard() {
  return (
    <div>
    <center>
      <h2 style={{color:'green'}}><strong>Welcome Dashboard !!!</strong></h2>
      <img src={data} alt='img'/>
      </center>
      
    </div>
  );
}

export default Dashboard;

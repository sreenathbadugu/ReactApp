import React, { useState } from 'react';
import PythonQuestions from './python1';
import ReactDOM from './React1';
import JavaQuiz from './java1';
import LoginForm from './test'; // Importing LoginForm component

function Quiz() {
  const [completed, setCompleted] = useState(false);

  const handleLogout = () => {
    // Redirect to login form
    // For example, you can use react-router-dom to handle routing
    // This is just a placeholder implementation
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div>
      <center>
        <h1 style={{ color: "orange" }}>Quiz</h1>
        <p style={{ fontSize: '18px', color: 'purple' }}>Take the quiz to test your knowledge!</p>
        {/* Check if quiz is completed, if not, render quiz components */}
        {!completed && (
          <>
            <PythonQuestions />
            <ReactDOM />
            <JavaQuiz />
            
            <button onClick={() => setCompleted(true)} style={styles.button}>Complete Quiz</button>
          </>
        )}
        {/* If quiz is completed, render logout button */}
        {completed && (
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        )}
      </center>
    </div>
  );
}

const styles = {
  button: {
    margin: '10px',
    padding: '10px',
    fontSize: '18px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Quiz;

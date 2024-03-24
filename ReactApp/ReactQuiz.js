import React, { useState, useEffect } from 'react';

const ReactStudent = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  useEffect(() => {
    let timer = null;
    if (quizStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [quizStarted, timeLeft]);

  const handleQuizComplete = (score) => {
    setUserScore(score);
    setQuizStarted(false);
    setTimeLeft(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}><span style={{color:'orange'}}>ReactJS</span> Quiz</h1>
      {!quizStarted ? (
        <UserInfo
          userName={userName}
          setUserName={setUserName}
          userAge={userAge}
          setUserAge={setUserAge}
          onStartQuiz={handleStartQuiz}
        />
      ) : (
        <Quiz onComplete={handleQuizComplete} />
      )}
      {userScore > 0 && (
        <div>
          <h2 style={styles.score}>Your Score: {userScore}</h2>
        </div>
      )}
      {quizStarted && (
        <div>
          <p style={styles.timer}>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} minutes</p>
        </div>
      )}
    </div>
  );
};

const UserInfo = ({ userName, setUserName, userAge, setUserAge, onStartQuiz }) => {
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setUserAge(e.target.value);
  };

  return (
    <div style={styles.card}>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleNameChange}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={userAge}
        onChange={handleAgeChange}
        style={styles.input}
      />
      <button onClick={onStartQuiz} style={styles.button}>
        Start Quiz
      </button>
    </div>
  );
};

const Quiz = ({ onComplete }) => {
  const questions = [{
    
    question : '1.What is React?',
    options: ['Library', 'Language', 'Tool', 'None of the above'],
    answer: 'Library',
  },
  {
    question: '2.What is a React Hook?',
    options: ['Application', 'Hook', 'Class', 'Function'],
    answer: 'Function',
  },

  {
  question: '3.What is the purpose of setState() in React?',
    options: ['Upstate', 'Update', 'Verify', 'None of the above'],
    answer:'Update',

  },
  {
question:'4.What is the purpose of the render() method in React?',
options:['Output','Input','return','None of the above'],
answer:'Output',
  },
  {
      question:'5.What is the purpose of the ReactDOM.render() method?',
      options:['Routing','Monetaring','None','Mounting'],
      answer:'Mounting',
  },
  {
      question:'6.What is the purpose of a React Router?',
      options:['routing','performing','deleting','None of the above'],
      answer:'routing',
  },
  {
      question:'7.What is the purpose of the componentDidCatch() method?',
      options:['Handling','Errorhandling','Error','None of the above'],
      answer:'Errorhandling',
  },
  {
      question:'8.What is the significance of the useState() Hook?',
      options:['Statemanagement','Default','It allows accessing a context value in functional components.','None of the above'],
      answer:'Statemanagement',

  },
  {
      question:'9.What is the purpose of defaultProps in React components?',
      options:['A component whose value is controlled by React state.','Defaultpropertyvalues','Representation','None of the above'],
      answer:'Defaultpropertyvalues',
  },
  {
      question:'10.What is the purpose of the map() function in React?',

      options:['Iteratingoverlists','None','Decision over lists','Mounting over lists'], 
      answer:'Iteratingoverlists',
  },
  {
      question:'11.What is the difference between React and React Native?',

      options:['Webvs.mobile platform','Performence','Network','None of the above'], 
      answer:'Webvs.mobile platform',
  },
  {
      question:'12.What is the significance of the ref attribute in React?',

      options:['Direct access to DOM nodes','Flow','It allows accessing a context value in functional components.',


      'Representation','None of the above'], 
      answer:'Direct access to DOM nodes',
  },
  {
      question:'13.What is a key difference between state and props in React?',

      options:['No differce','Mutable vs. immutable','Both are same','None of the above'], 
      answer:'Mutable vs. immutable',
  },
  {
      question:'14.What is a component?',

      options:['Understand complexity of code','Used for styling','Reusable building block','None of the above'], 
      answer:'Reusable building block',
  },
  {
      question:'15.What is the virtual DOM?',

      options:['In-memory representation','Network representation','Performence represtation','None of the above'], 
      answer:'In-memory representation',
  },
  {
      question:'16.What is JSX?',

      options:['combination of HTML and JavaScript','Decoding the code','None','To write only java script'], 
      answer:'combination of HTML and JavaScript',
  },
  
  
  {
      question:'17.What are props in React?',

      options:['None','Active rendering','return values','Passed propertie'], 
      answer:'Passed propertie',
  },
  {
      question:'18.What is the purpose of useEffect() Hook?',

      options:['Side effects handling','None','Boosting network','side effects rendering'], 
      answer:'Side effects handling',
  },
  {
      question:'19.What is the key attribute used for in React lists?',

      options:['Mapping lists','user identification','Unique identification','None of the above'], 
      answer:'Unique identification',
  },
  {
      question:'20.What is a React fragment?',

      options:['Grouping wrapper','wrapping ','Sliding','None of the above'],
      answer:'Grouping wrapper',
  },

  {
      question:'21.What is the purpose of the render() method in React?',

      options:['Input generation','Output generation','Handling errors','None of the above'], 
      answer:'Output generation',
  },
  {
      question:'22.What is conditional rendering in React?',

      options:['Dynamic output','Dynamic performence','None','Rendering'], 
      answer:'Dynamic output',
  },
  {
      question:'23.What is the purpose of a React Router?',

      options:['Routing','Handling routing','handling erros','Handling Navigation'], 
      answer:'Handling Navigation',
  },
  {
      question:'24.What is a higher-order component (HOC) in React?',

      options:['Component binding','Component wrapper','None','Component rendering'], 
      answer:'Component wrapper',
  },
  {
      question:'25.What is the purpose of the useRef() Hook in React?',

      options:['it allows access to a DOM element or a React component instance','It allows functional components to have state','its a component that only re-renders when its props or state change','None of the above'], 
      answer:'it allows access to a DOM element or a React component instance',
  },
  {
      question:'26.What is the purpose of the useReducer() Hook in React?',

      options:['Its used for error handling in React components','None','Reusable','It manages state with complex logic using a reducer function'], 
      answer:'It manages state with complex logic using a reducer function'
      ,
  },
  {
      question:'27.What is the purpose of the children prop in React components?',

      options:['it memoizes the result of a function preventing unnecessary recalculations','Mounting','It represents the content between the opening and closing tags of a component and allows for the composition of components','None of the above' ],
      answer:'It represents the content between the opening and closing tags of a component and allows for the composition of components',
  },

  {
      question:'28.What is the purpose of the useContext() Hook in React?',

      options:['Its used to update the state of a component','It allows accessing a context value in functional components','None','Propagation'], 
      answer:'It allows accessing a context value in functional components',
  },
  {
      question:'29.What is a controlled component in React?',

      options:['A component whose value is controlled by React state','Its used to render React elements into the DOM','Data that determines a components behavior and rendering','All of the above'], 
      answer:'A component whose value is controlled by React state',
  },
  {
      question:'30.What is the useCallback() Hook used for?',

      options:['Memoization','Calling function','Error handling','All of the above'], 
      answer:'Memoization',
  },
  
    

  ]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(score);
    }
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.question}>{questions[currentQuestion].question}</h2>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} style={styles.optionCard}>
            <input
              type="radio"
              id={`option${index}`}
              name="answer"
              value={option}
              checked={userAnswer === option}
              onChange={handleAnswerChange}
              style={{ marginRight: '10px',  }}
            />
            <label htmlFor={`option${index}`} style={styles.optionLabel}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={handleNextQuestion} style={styles.button}>
        Next
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color:'purple'
  },
  input: {
    margin: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: '5px',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',
    marginTop: '20px',
  },
  score: {
    fontSize: '24px',
    marginTop: '20px',
    color:'red'
  },
  timer: {
    fontSize: '18px',
    marginTop: '20px',
    color:'red'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  },
  question: {
    marginBottom: '20px',
    color:'red',
    borderRadius: '5px',
    padding: '10px',
  },
  optionCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    padding: '10px',
    marginBottom:'10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    alignItems:'center',
    display:'flex'
  },
  optionLabel: {
    cursor: 'pointer',
    textAlign:'center',
    padding: '10px',
    marginLeft:'5px'
    
  },
};

export default ReactStudent;

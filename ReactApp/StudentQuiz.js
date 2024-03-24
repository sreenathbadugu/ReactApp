import React, { useState, useEffect } from 'react';

const PythonQuestions = () => {
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
      <h1 style={styles.heading}><span style={{color:'orange'}}>PYTHON</span> Quiz</h1>
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
    
    question : '1.What is python?',
    options: ['Library', ' ProgrammingLanguage', 'Tool', 'None of the above'],
    answer: ' Programming Language',
  },
  {
    question: '2.What is a lambda function?',
    options: ['Application', 'Hook', 'Anonymous Function', 'Function'],
    answer: 'Anonymous Function',
  },

  {
  question: '3.What is a Python module?',
    options: ['Upstate', 'Update', 'Python File', 'None of the above'],
    answer:'Python File',

  },
  {
question:'4.What is the difference between a list and a tuple?',
options:['Mutable','Mutable, Immutable','Immutable','None of the above'],
answer:'Mutable, Immutable',
  },
  {
      question:'5.What is a generator in Python?',
      options:['Itetator','Iterator, Iterable','None','Iterable'],
      answer:'Iterator, Iterable',
  },
  {
      question:'6.What does the with statement do in Python?',
      options:['ContextManagement','performing','deleting','None of the above'],
      answer:'ContextManagement',
  },
  {
      question:'7.What is a virtual environment in Python?',
      options:['Handling','Errorhandling','Error','IsolatedEnvironment'],
      answer:'IsolatedEnvironment',
  },
  {
      question:'8.What is a docstring in Python?',
      options:['DocumentationString','function','It allows accessing a context value in functional components.','None of the above'],
      answer:'DocumentationString',

  },
  {
      question:'9.What is a Python package?',
      options:['Collectionofobjects','Defaultpropertyvalues','CollectionofModule','None of the above'],
      answer:'CollectionofModule',
  },
  {
      question:'10.What is a namespace in Python?',

      options:['Iteratingoverlists','SymbolTable','Decision over lists','Mounting over lists'], 
      answer:'SymbolTable',
  },
  {
      question:'11.What is the purpose of the map() function in Python?',

      options:[' Function,Iterable','Performence','Network','None of the above'], 
      answer:' Function,Iterable',
  },
  {
      question:'12.What does the split() method do in Python?',

      options:['String,Separator','Flow','It allows accessing a context value in functional components.',


      'Representation','None of the above'], 
      answer:'String,Separator',
  },
  {
      question:'13.What does the global keyword do in Python?',

      options:['VariableScope','VariableDeclaration','Both are same','None of the above'], 
      answer:'VariableScope',
  },
  {
      question:'14.What does the json module do in Python?',

      options:['Serialization,Deserialization','Used for styling','Reusable building block','None of the above'], 
      answer:'Serialization,Deserialization',
  },
  {
      question:'15.What is a Python package?',

      options:['In-memory representation',' CollectionofModules','Performence represtation','None of the above'], 
      answer:' CollectionofModules',
  },
  {
      question:'16.What is the purpose of the import statement in Python?',

      options:['combination of HTML and JavaScript','Decoding the code','None','Module Importing'], 
      answer:'Module Importing',
  },
  
  
  {
      question:'17.What is a docstring in Python?',

      options:['Documentation String','Active rendering','return values','Passed propertie'], 
      answer:'Documentation String',
  },
  {
      question:'18.What does the pip command do in Python?',

      options:['Side effects handling','None','Package Management','side effects rendering'], 
      answer:'Package Management',
  },
  {
      question:'19.What is a virtual environment in Python?',

      options:['Dynamic Environment','Isolated Environment','Unique identification','None of the above'], 
      answer:'Isolated Environment',
  },
  {
      question:'20.What does the with statement do in Python?',

      options:['Grouping wrapper','wrapping ','Sliding','Context Management'],
      answer:'Context Management',
  },

  {
      question:'21.What is the purpose of the range() function?',

      options:['Input generation','Output generation','Handling errors','Iterating, Generating Numbers'], 
      answer:'Iterating, Generating Numbers',
  },
  {
      question:'22.What is the difference between a list and a tuple?',

      options:['Mutable','Mutable, Immutable','None','Immutable'], 
      answer:'Mutable, Immutable',
  },
  {
      question:'23.What is a set in Python?',

      options:['Routing','Handling routing','Collection of Unique Elements','Handling Navigation'], 
      answer:'Collection of Unique Elements',
  },
  {
      question:'24.What is the purpose of the zip() function in Python?',

      options:['Component binding','Component wrapper','Combining Iterables','Component rendering'], 
      answer:'Combining Iterables',
  },
  {
      question:'25.What is a context manager in Python?',

      options:['it allows access to a DOM element or a React component instance','It allows functional components to have state','its a component that only re-renders when its props or state change','Resource Management'], 
      answer:'Resource Management',
  },
  {
      question:'26.What is the purpose of the super() function in Python?',

      options:['Its used for error handling in React components','None','Base Class Access','It manages state with complex logic using a reducer function'], 
      answer:'Base Class Access'
      ,
  },
  {
      question:'27.What is a closure in Python?',

      options:['it memoizes the result of a function preventing unnecessary recalculations','Mounting','It represents the content between the opening and closing tags of a component and allows for the composition of components',' Function with Enclosed Variables' ],
      answer:' Function with Enclosed Variables',
  },

  {
      question:'28.What is the purpose of the logging module in Python?',

      options:['Its used to update the state of a component','It allows accessing a context value in functional components','None','Logging Events'], 
      answer:'Logging Events',
  },
  {
      question:'29.What is a metaclass in Python?',

      options:['A component whose value is controlled by React state','Object','Class of a Clas','All of the above'], 
      answer:'Class of a Clas',
  },
  {
      question:'30.What is the purpose of the __slots__ attribute in Python?',

      options:['Memoization','Calling function','Memory Optimization','All of the above'], 
      answer:'Memory Optimization',
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

export default PythonQuestions;

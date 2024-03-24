import React, { useState, useEffect } from 'react';

const JavaQuiz = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
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
    setQuizCompleted(true);
  };

  const handleGenerateCertificate = () => {
    // Logic to generate score certificate
    alert(`Certificate generated for ${userName} with score ${userScore}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}><span style={{color:'orange'}}>JAVA</span> Quiz</h1>
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
      {quizCompleted && (
        <button onClick={handleGenerateCertificate} style={styles.button}>
          Generate Score Certificate
        </button>
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
  const questions = [ {
    
    question : '1.What is Java?',
    options: ['Library', ' Programming Language', 'Tool', 'None of the above'],
    answer: ' Programming Language',
  },
  {
    question: '2.Who developed Java?',
    options: ['Facebook', 'Google', ' Sun Microsystems', 'None of the above'],
    answer: ' Sun Microsystems',
  },

  {
  question: '3.What is the latest stable version of Java?',
    options: ['Java17', 'Java20', 'Java25', 'Java9'],
    answer:'Java17',

  },
  {
question:'4.What is the main feature of Java?',
options:['Platform Dependent','Mutable, Immutable','Immutable','Platform Independence'],
answer:'Platform Independence',
  },
  {
      question:'5.What is the JDK?',
      options:['Java Deploying Kit', 'Java Document Kit','None','Java Development Kit'],
      answer:'Java Development Kit',
  },
  {
      question:'6.What is the JRE?',
      options:['Java Runtime Environment','Java Running Environment','deleting','None of the above'],
      answer:'Java Runtime Environment',
  },
  {
      question:'7.What is a class in Java?',
      options:['Blueprint for Objects','Errorhandling','Error','IsolatedEnvironment'],
      answer:'Blueprint for Objects',
  },
  {
      question:'8.What is an object in Java?',
      options:['DocumentationString',' Instance of a Class','It allows accessing a context value in functional components.','None of the above'],
      answer:' Instance of a Class',

  },
  {
      question:'9.What is inheritance in Java?',
      options:['Reusability','Defaultpropertyvalues','CollectionofModule','None of the above'],
      answer:'Reusability',
  },
  {
      question:'10.What is polymorphism in Java?',

      options:['Iteratingoverlists','SymbolTable','Many Forms','Mounting over lists'], 
      answer:'Many Forms',
  },
  {
      question:'11.What is encapsulation in Java?',

      options:[' Function,Iterable','Performence','Network','Data Hiding'], 
      answer:'Data Hiding',
  },
  {
      question:'12.What is abstraction in Java?',

      options:['String,Separator','Simplification','Representation','None of the above'], 
      answer:'Simplification',
  },
  {
      question:'13.What is a constructor in Java?',

      options:['VariableScope','VariableDeclaration','Both are same','Initializing Object'], 
      answer:'Initializing Object',
  },
  {
      question:'14.What is a method in Java?',

      options:['Function','Used for styling','Reusable building block','None of the above'], 
      answer:'Function',
  },
  {
      question:'15.What is a variable in Java?',

      options:['In-memory representation',' CollectionofModules','Performence represtation','Data Container'], 
      answer:'Data Container',
  },
  {
      question:'16.What is the purpose of the import statement in Java?',

      options:[' Accessing Classes',' Accessing Functions','None','Module Importing'], 
      answer:' Accessing Classes',
  },
  
  
  {
      question:'17.What is a primitive data type in Java?',

      options:['Basic Data Type','Active rendering','return values','Passed propertie'], 
      answer:'Basic Data Type',
  },
  {
      question:'18.What is the purpose of the static keyword in Java?',

      options:['Side effects handling','Class Member','Package Management','side effects rendering'], 
      answer:'Package Management',
  },
  {
      question:'19.What is a loop in Java?',

      options:['Dynamic Environment','Isolated Environment','Unique identification','Iteration'], 
      answer:'Iteration',
  },
  {
      question:'20.What is an array in Java?',

      options:['Collection of Elements','wrapping ','Sliding','Context Management'],
      answer:'Collection of Elements',
  },

  {
      question:'21.What is an exception in Java?',

      options:['Compiletime Error','Output generation','Runtime Error','Iterating, Generating Numbers'], 
      answer:'Runtime Error',
  },
  {
      question:'22.What is the purpose of the try-catch block in Java?',

      options:['Exception Handling', 'Listing','None','Mapping'], 
      answer:'Exception Handling',
  },
  {
      question:'23.What is the purpose of the finally block in Java?',

      options:['Routing','Handling routing','Collection of Unique Elements',' Cleanup Code'], 
      answer:' Cleanup Code',
  },
  {
      question:'24.What is the purpose of the toString() method in Java?',

      options:['Component binding','Component wrapper','String Representation','Component rendering'], 
      answer:'String Representation',
  },
  {
      question:'25.What is a variable in Java?',

      options:['Data','Data Structures','its a component that only re-renders when its props or state change','Resource Management'], 
      answer:'Data',
  },
  {
      question:'26.What is method overloading in Java?',

      options:['Same, Different Parameters','None','Base Class Access','same parameters'], 
      answer:'Same, Different Parameters'
      ,
  },
  {
      question:'27.What is method overriding in Java?',

      options:['Subclass, Superclass','Mounting','object','Function with Enclosed Variables' ],
      answer:'Subclass, Superclass',
  },

  {
      question:'28.What is the this keyword in Java?',

      options:['Current Instance','None','Logging Events','Current Update'], 
      answer:'Current Instance',
  },
  {
      question:'29.What is the super keyword in Java?',

      options:['Parent Class','Object','Class of a Clas','All of the above'], 
      answer:'Parent Class',
  },
  {
      question:'30.What is the forEach method in Java?',

      options:['Iterable','Calling function','Memory Optimization','All of the above'], 
      answer:'Iterable',
  },
  
  
  ];

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

export default JavaQuiz;

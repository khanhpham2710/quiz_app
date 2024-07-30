import React, { useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import Welcome from './components/Welcome/Welcome';
import './App.css';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [resultData, setResultData] = useState(null);

  function handleStart(){
    setQuizStarted(true);
  };

  function handleFinish(data){
    setResultData(data);
    setQuizFinished(true);
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <Welcome onStart={handleStart} />
      ) : quizFinished ? (
        <Result score={resultData.score} answers={resultData.answers} />
      ) : (
        <Quiz onFinish={handleFinish} />
      )}
    </div>
  );
}

export default App;

import React, { useState, useCallback } from 'react';
import questions from '../../global/question';
import Timer from '../Timer/Timer';
import Choice from '../Choice/Choice';

function Quiz({ onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  const nextQuestion = useCallback(() => {
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish({ score, answers });
    }
  }, [currentQuestion, onFinish, score, answers]);


  function handleAnswer(isCorrect){
    setScore(prevScore => prevScore + (isCorrect ? 1 : 0));
  
    setAnswers(prevAnswers => {
      const updatedAnswers = [
        ...prevAnswers,
        { question: questions[currentQuestion], isCorrect }
      ];
  
      if (currentQuestion + 1 === questions.length) {
        onFinish({ score: score + (isCorrect ? 1 : 0), answers: updatedAnswers });
      } else {
        nextQuestion();
      }
  
      return updatedAnswers; 
    });
  };
  

  const handleTimeUp = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  function handleOptionChange(option){
    setSelectedOption(option);
  };

  function handleSubmit(){
    if (selectedOption) {
      handleAnswer(selectedOption.isCorrect);
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="quiz">
      <Timer key={currentQuestion} duration={10} onTimeUp={handleTimeUp} />
      <h1>{questions[currentQuestion].question}</h1>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <Choice
            key={index}
            option={option}
            handleOptionChange={handleOptionChange}
            handleAnswer={handleAnswer}
            selectedOption={selectedOption}
          />
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
}

export default Quiz;

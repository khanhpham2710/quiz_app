import React, { useState, useCallback } from 'react';
import questions from '../../global/question';
import Timer from '../Timer/Timer';
import Choice from '../Choice/Choice';

function Quiz({ onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (isCorrect) => {
    setScore((prev) => prev + (isCorrect ? 1 : 0));
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: questions[currentQuestion], isCorrect },
    ]);

    if (currentQuestion + 1 === questions.length) {
      onFinish({ score: score + (isCorrect ? 1 : 0), answers });
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleTimeUp = useCallback(() => {
    if (selectedOption) {
      handleAnswer(selectedOption.isCorrect);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  }, [selectedOption, handleAnswer]);

  const handleOption = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      handleAnswer(selectedOption.isCorrect);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="quiz">
      <Timer key={currentQuestion} duration={10} onTimeUp={handleTimeUp} />
      <h1>{questions && questions[currentQuestion].question}</h1>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <Choice
            key={index}
            option={option}
            handleOption={handleOption}
            selectedOption={selectedOption}
          />
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
}

export default Quiz;

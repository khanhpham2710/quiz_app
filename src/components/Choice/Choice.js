import React from 'react';

function Choice({ option, handleOptionChange, handleAnswer, selectedOption }) {
  return (
    <div
      className={`option ${selectedOption === option ? 'selected' : ''}`}
      onClick={() => handleOptionChange(option)}
    >
      <input
        type="radio"
        name="quiz-option"
        checked={selectedOption === option}
        onChange={() => handleAnswer(option.isCorrect)}
      />
      {option.text}
    </div>
  );
}

export default Choice;

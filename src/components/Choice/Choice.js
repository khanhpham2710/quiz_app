import React from 'react';

function Choice({ option, handleOption, handleAnswer, selectedOption }) {
  return (
    <div
      className={`option ${selectedOption === option ? 'selected' : ''}`}
      onClick={() => handleOption(option)}
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

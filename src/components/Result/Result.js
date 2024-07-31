import React from 'react';

function Result({ score, answers }) {
  return (
    <div className="result">
      <h2>Your Score: {score} / {answers.length}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index} className={answer.isCorrect ? 'correct' : 'incorrect'}>
            <h2>Question: <span>{answer.question.question}</span><br /></h2>
            <p className='your_answer'>Your Answer: <span>{answer.question.options.find(option => option.isCorrect === answer.isCorrect).text}</span></p><br />
            {answer.isCorrect?"":<p className='correct_answer'>Correct Answer: <span>{answer.question.options.find(option => option.isCorrect).text}</span></p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;

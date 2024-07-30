import React from 'react';

function Welcome({ onStart }) {
  return (
    <div className="welcome">
      <h1>Welcome to the quiz app, are you ready yet?</h1>
      <button onClick={onStart}>Play</button>
    </div>
  );
}

export default Welcome;
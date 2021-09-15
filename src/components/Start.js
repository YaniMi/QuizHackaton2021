import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Commencez le quiz</h1>
          <p>Bonne chance!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Démarrer</button>
        </div>
      </div>
    </div>
  );
}

export default Start;
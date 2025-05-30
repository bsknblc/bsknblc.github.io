// src/components/Practice.jsx
import React, { useState, useEffect } from 'react';

function Practice({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [usedIndices, setUsedIndices] = useState([]);
  const [message, setMessage] = useState('');
  const [roundCompleted, setRoundCompleted] = useState(false);

  // Get a random word that hasn't been used in this round
  const getRandomWordIndex = () => {
    if (usedIndices.length === words.length) {
      setRoundCompleted(true);
      return null;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * words.length);
    } while (usedIndices.includes(randomIndex));

    return randomIndex;
  };

  // Start or restart the practice round
  const startRound = () => {
    setUsedIndices([]);
    setCurrentWordIndex(getRandomWordIndex());
    setScore({ correct: 0, incorrect: 0 });
    setRoundCompleted(false);
    setMessage('');
  };

  // Check the user's answer
  const checkAnswer = (selectedArtikel) => {
    const currentWord = words[currentWordIndex];
    if (selectedArtikel === currentWord.artikel) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      setMessage('Richtig! (Correct)');
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setMessage(`Falsch! (Wrong) Correct article is "${currentWord.artikel}"`);
    }

    // Mark this word as used and get a new one
    setUsedIndices([...usedIndices, currentWordIndex]);
    setTimeout(() => {
      setMessage('');
      setCurrentWordIndex(getRandomWordIndex());
    }, 1500);
  };

  // Initialize the first word when component mounts
  useEffect(() => {
    if (words.length > 0) {
      startRound();
    }
  }, [words]);

  if (words.length === 0) {
    return (
      <div className="practice-container">
        <h2>No words available</h2>
        <p>Please add some words to practice.</p>
      </div>
    );
  }

  if (roundCompleted) {
    return (
      <div className="practice-container">
        <h2>Round Completed!</h2>
        <p>Correct: {score.correct}</p>
        <p>Incorrect: {score.incorrect}</p>
        <button onClick={startRound} className="btn-start">
          Start New Round
        </button>
      </div>
    );
  }

  const currentWord = words[currentWordIndex];

  return (
    <div className="practice-container">
      <h2>Practice German Articles</h2>
      <div className="score" style={{ display: 'flex', gap: '20px' }}>
        <span className="score-correct">Correct: {score.correct}</span>
        <span className="score-separator"> | </span>
        <span className="score-incorrect">Incorrect: {score.incorrect}</span>
      </div>
      
      <div className="word-display">
        <h3>{currentWord?.word}</h3>
        <div className="artikel-buttons">
          <button onClick={() => checkAnswer('der')} className="btn-artikel der">der</button>
          <button onClick={() => checkAnswer('die')} className="btn-artikel die">die</button>
          <button onClick={() => checkAnswer('das')} className="btn-artikel das">das</button>
        </div>
      </div>
      
      {message && <div className={`message ${message.includes('Richtig') ? 'correct' : 'incorrect'}`}>{message}</div>}
    </div>
  );
}

export default Practice;
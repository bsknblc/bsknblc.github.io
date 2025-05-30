// src/components/Practice.jsx
import React, { useState, useEffect } from 'react';

function Practice({ words }) {
  const [currentWord, setCurrentWord] = useState(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [usedWords, setUsedWords] = useState([]);
  const [message, setMessage] = useState('');
  const [roundCompleted, setRoundCompleted] = useState(false);
  const [availableWords, setAvailableWords] = useState([...words]);

  // Get a random word from available words
  const getRandomWord = () => {
    if (availableWords.length === 0) {
      setRoundCompleted(true);
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    return availableWords[randomIndex];
  };

  // Start or restart the practice round
  const startRound = () => {
    setAvailableWords([...words]);
    setUsedWords([]);
    setCurrentWord(getRandomWord());
    setScore({ correct: 0, incorrect: 0 });
    setRoundCompleted(false);
    setMessage('');
  };

  // Check the user's answer
  const checkAnswer = (selectedArtikel) => {
    if (selectedArtikel === currentWord.artikel) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      setMessage('Richtig! (Correct)');
      
      // Mark word as used and get a new random word
      setUsedWords([...usedWords, currentWord]);
      setAvailableWords(availableWords.filter(word => word !== currentWord));
      
      setTimeout(() => {
        setMessage('');
        setCurrentWord(getRandomWord());
      }, 150);
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setMessage(`Falsch! (Wrong) Correct article is "${currentWord.artikel}"`);
      
      setTimeout(() => {
        setMessage('');
      }, 150);
    }
  };

  // Initialize the first word when component mounts or words prop changes
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
        <p>You practiced all {words.length} words.</p>
        <p>Correct: {score.correct}</p>
        <p>Incorrect: {score.incorrect}</p>
        <button onClick={startRound} className="btn-start">
          Start New Round
        </button>
      </div>
    );
  }

  if (!currentWord) {
    return (
      <div className="practice-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="practice-container">
      <h2>Practice German Articles</h2>
      <div className="score" style={{ display: 'flex', gap: '20px' }}>
        <span className="score-correct">Correct: {score.correct}</span>
        <span className="score-separator"> | </span>
        <span className="score-incorrect">Incorrect: {score.incorrect}</span>
      </div>
      
      <div className="word-display">
        <h3>{currentWord.word}</h3>
        <div className="artikel-buttons">
          <button onClick={() => checkAnswer('der')} className="btn-artikel der">der</button>
          <button onClick={() => checkAnswer('die')} className="btn-artikel die">die</button>
          <button onClick={() => checkAnswer('das')} className="btn-artikel das">das</button>
        </div>
      </div>
    </div>
  );
}

export default Practice;
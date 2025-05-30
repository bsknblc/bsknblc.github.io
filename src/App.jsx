import React, { useState, useEffect } from 'react';
import Practice from './components/Practice.jsx'
import WordList from './components/WordList.jsx'
import AddWord from './components/AddWord.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css';

function App() {
  const [words, setWords] = useState(() => {
    const savedWords = localStorage.getItem('germanWords');
    return savedWords ? JSON.parse(savedWords) : [
      { word: "Haus", artikel: "das" },
      { word: "Auto", artikel: "das" },
      { word: "Mann", artikel: "der" },
      { word: "Frau", artikel: "die" },
      { word: "Kind", artikel: "das" },
      { word: "Schule", artikel: "die" },
      { word: "Buch", artikel: "das" },
      { word: "Tisch", artikel: "der" },
    ];
  });

  const [currentView, setCurrentView] = useState('practice');

  useEffect(() => {
    localStorage.setItem('germanWords', JSON.stringify(words));
  }, [words]);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };

  const deleteWord = (index) => {
    const newWords = [...words];
    newWords.splice(index, 1);
    setWords(newWords);
  };

  return (
    <div className="App">
      <Navbar setCurrentView={setCurrentView} />
      <div className="container">
        {currentView === 'practice' && <Practice words={words} />}
        {currentView === 'wordlist' && <WordList words={words} onDelete={deleteWord} />}
        {currentView === 'addword' && <AddWord onAddWord={addWord} />}
      </div>
    </div>
  );
}

export default App;
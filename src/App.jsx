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
    { word: "Stuhl", artikel: "der" },
    { word: "Lampe", artikel: "die" },
    { word: "Garten", artikel: "der" },
    { word: "Blume", artikel: "die" },
    { word: "Baum", artikel: "der" },
    { word: "Straße", artikel: "die" },
    { word: "Weg", artikel: "der" },
    { word: "Platz", artikel: "der" },
    { word: "Stadt", artikel: "die" },
    { word: "Dorf", artikel: "das" },
    { word: "Wohnung", artikel: "die" },
    { word: "Familie", artikel: "die" },
    { word: "Freund", artikel: "der" },
    { word: "Freundin", artikel: "die" },
    { word: "Mensch", artikel: "der" },
    { word: "Leute", artikel: "die" },
    { word: "Arbeit", artikel: "die" },
    { word: "Beruf", artikel: "der" },
    { word: "Job", artikel: "der" },
    { word: "Chef", artikel: "der" },
    { word: "Kollege", artikel: "der" },
    { word: "Kollegin", artikel: "die" },
    { word: "Schüler", artikel: "der" },
    { word: "Schülerin", artikel: "die" },
    { word: "Lehrer", artikel: "der" },
    { word: "Lehrerin", artikel: "die" },
    { word: "Universität", artikel: "die" },
    { word: "Studium", artikel: "das" },
    { word: "Klasse", artikel: "die" },
    { word: "Heft", artikel: "das" },
    { word: "Stift", artikel: "der" },
    { word: "Bleistift", artikel: "der" },
    { word: "Papier", artikel: "das" },
    { word: "Bett", artikel: "das" },
    { word: "Schrank", artikel: "der" },
    { word: "Sofa", artikel: "das" },
    { word: "Computer", artikel: "der" },
    { word: "Laptop", artikel: "der" },
    { word: "Handy", artikel: "das" },
    { word: "Telefon", artikel: "das" },
    { word: "Fernseher", artikel: "der" },
    { word: "Uhr", artikel: "die" },
    { word: "Tag", artikel: "der" },
    { word: "Woche", artikel: "die" },
    { word: "Monat", artikel: "der" },
    { word: "Jahr", artikel: "das" },
    { word: "Morgen", artikel: "der" },
    { word: "Abend", artikel: "der" },
    { word: "Nacht", artikel: "die" },
    { word: "Sonntag", artikel: "der" },
    { word: "Montag", artikel: "der" },
    { word: "Dienstag", artikel: "der" },
    { word: "Mittwoch", artikel: "der" },
    { word: "Donnerstag", artikel: "der" },
    { word: "Freitag", artikel: "der" },
    { word: "Samstag", artikel: "der" },
    { word: "Zeit", artikel: "die" },
    { word: "Frühstück", artikel: "das" },
    { word: "Mittagessen", artikel: "das" },
    { word: "Abendessen", artikel: "das" },
    { word: "Brot", artikel: "das" },
    { word: "Butter", artikel: "die" },
    { word: "Käse", artikel: "der" },
    { word: "Fleisch", artikel: "das" },
    { word: "Fisch", artikel: "der" },
    { word: "Gemüse", artikel: "das" },
    { word: "Apfel", artikel: "der" },
    { word: "Banane", artikel: "die" },
    { word: "Orange", artikel: "die" },
    { word: "Wasser", artikel: "das" },
    { word: "Kaffee", artikel: "der" },
    { word: "Tee", artikel: "der" },
    { word: "Saft", artikel: "der" },
    { word: "Bier", artikel: "das" },
    { word: "Wein", artikel: "der" },
    { word: "Flasche", artikel: "die" },
    { word: "Glas", artikel: "das" },
    { word: "Teller", artikel: "der" },
    { word: "Messer", artikel: "das" },
    { word: "Gabel", artikel: "die" },
    { word: "Löffel", artikel: "der" },
    { word: "Kühlschrank", artikel: "der" },
    { word: "Herd", artikel: "der" },
    { word: "Ofen", artikel: "der" },
    { word: "Mikrowelle", artikel: "die" },
    { word: "Geschirr", artikel: "das" },
    { word: "Hund", artikel: "der" },
    { word: "Katze", artikel: "die" },
    { word: "Vogel", artikel: "der" },
    { word: "Pferd", artikel: "das" },
    { word: "Kuh", artikel: "die" },
    { word: "Schwein", artikel: "das" },
    { word: "Schaf", artikel: "das" },
    { word: "Ziege", artikel: "die" },
    { word: "Huhn", artikel: "das" },
    { word: "Ente", artikel: "die" },
    { word: "Biene", artikel: "die" },
    { word: "Fliege", artikel: "die" },
    { word: "Insekt", artikel: "das" },
    { word: "Wald", artikel: "der" },
    { word: "Fluss", artikel: "der" },
    { word: "See", artikel: "der" },
    { word: "Meer", artikel: "das" },
    { word: "Berg", artikel: "der" },
    { word: "Strand", artikel: "der" },
    { word: "Himmel", artikel: "der" },
    { word: "Sonne", artikel: "die" },
    { word: "Mond", artikel: "der" },
    { word: "Stern", artikel: "der" },
    { word: "Wetter", artikel: "das" },
    { word: "Regen", artikel: "der" },
    { word: "Schnee", artikel: "der" },
    { word: "Wind", artikel: "der" },
    { word: "Wolke", artikel: "die" },
    { word: "Sturm", artikel: "der" },
    { word: "Gewitter", artikel: "das" },
    { word: "Donner", artikel: "der" },
    { word: "Blitz", artikel: "der" },
    { word: "Temperatur", artikel: "die" },
    { word: "Feuer", artikel: "das" },
    { word: "Eis", artikel: "das" },
    { word: "Kälte", artikel: "die" },
    { word: "Hitze", artikel: "die" },
    { word: "Kleidung", artikel: "die" },
    { word: "Hemd", artikel: "das" },
    { word: "Hose", artikel: "die" },
    { word: "Kleid", artikel: "das" },
    { word: "Rock", artikel: "der" },
    { word: "Schuh", artikel: "der" },
    { word: "Socke", artikel: "die" },
    { word: "Jacke", artikel: "die" },
    { word: "Mantel", artikel: "der" },
    { word: "Hut", artikel: "der" },
    { word: "Mütze", artikel: "die" },
    { word: "Schal", artikel: "der" },
    { word: "Brille", artikel: "die" },
    { word: "Tasche", artikel: "die" },
    { word: "Rucksack", artikel: "der" },
    { word: "Schmuck", artikel: "der" },
    { word: "Ring", artikel: "der" },
    { word: "Kette", artikel: "die" },
    { word: "Armband", artikel: "das" },
    { word: "Bank", artikel: "die" },
    { word: "Geld", artikel: "das" },
    { word: "Münze", artikel: "die" },
    { word: "Schein", artikel: "der" },
    { word: "Kreditkarte", artikel: "die" },
    { word: "Rechnung", artikel: "die" },
    { word: "Konto", artikel: "das"},
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
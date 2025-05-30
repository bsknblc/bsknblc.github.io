// src/components/AddWord.jsx
import React, { useState } from 'react';

function AddWord({ onAddWord }) {
  const [newWord, setNewWord] = useState('');
  const [artikel, setArtikel] = useState('der');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newWord.trim()) {
      onAddWord({ word: newWord.trim(), artikel });
      setNewWord('');
      setArtikel('der');
    }
  };

  return (
    <div className="addword-container">
      <h2>Add New Word</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="word">German Word:</label>
          <input
            type="text"
            id="word"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Artikel:</label>
          <div className="artikel-options">
            <label>
              <input
                type="radio"
                value="der"
                checked={artikel === 'der'}
                onChange={() => setArtikel('der')}
              />
              der
            </label>
            <label>
              <input
                type="radio"
                value="die"
                checked={artikel === 'die'}
                onChange={() => setArtikel('die')}
              />
              die
            </label>
            <label>
              <input
                type="radio"
                value="das"
                checked={artikel === 'das'}
                onChange={() => setArtikel('das')}
              />
              das
            </label>
          </div>
        </div>
        <button type="submit" className="btn-add">
          Add Word
        </button>
      </form>
    </div>
  );
}

export default AddWord;
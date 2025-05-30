// src/components/WordList.jsx
import React from 'react';

function WordList({ words, onDelete }) {
  return (
    <div className="wordlist-container">
      <h2>Word List</h2>
      {words.length === 0 ? (
        <p>No words added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Artikel</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word, index) => (
              <tr key={index}>
                <td>{word.word}</td>
                <td>{word.artikel}</td>
                <td>
                  <button onClick={() => onDelete(index)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WordList;
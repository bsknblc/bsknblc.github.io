// src/components/Navbar.jsx
import React from 'react';

function Navbar({ setCurrentView }) {
  return (
    <nav className="navbar">
      <button onClick={() => setCurrentView('practice')}>Practice</button>
      <button onClick={() => setCurrentView('wordlist')}>Word List</button>
      <button onClick={() => setCurrentView('addword')}>Add Word</button>
    </nav>
  );
}

export default Navbar;
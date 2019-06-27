import React from 'react';
import './styles.scss';

function Header() {
  return (
    <header>
      <h1>Mood Calendar</h1>
      <nav>
        <i className="fas fa-edit">Edit mood</i>
        <i className="fas fa-calendar-alt">Check mood calendar</i>
      </nav>
    </header>
  );
}

export default Header;

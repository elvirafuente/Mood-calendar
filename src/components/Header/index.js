import React from 'react';
import './styles.scss';

function Header() {
  return (
    <header className="page__header">
      <h1 className="header__title">Mood Calendar</h1>
      {/* <nav className="header__nav">
        <p className="nav__text"><i className="fas fa-edit"></i>Add mood</p>
        <p className="nav__text"><i className="fas fa-calendar-alt"></i>Check calendar</p>
      </nav> */}
    </header>
  );
}

export default Header;

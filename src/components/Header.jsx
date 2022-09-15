import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Header(props) {
  return (
    <header className="header">
        <div>
          <nav className="nav-buttons">
            <div className="nav-buttons-center">
              <Link to="/en" className="nav-link">Home</Link>
              <Link to="/en/trybe-projects" className="nav-link">Trybe</Link>
            </div>
          </nav>
      </div>
    </header>
  );
}


export default Header;

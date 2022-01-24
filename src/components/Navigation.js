import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="header">
        <nav className="header-nav">
            <Link to={"/"}>Accueil</Link>
        </nav>
    </header>
  );
};

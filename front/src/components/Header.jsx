// src/components/Header.jsx
import React from "react";
import "./Header.css"; // Ajouter ce fichier pour le style

function Header() {
  return (
    <header className="header">
      <div className="banner">
        <img src="./public/mugnifique-logo.png" alt="" />

      </div>
      <nav className="menu">
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#Mugs">Mugs</a></li>
          <li><a href="#Promotions">Promotions</a></li>
          <li><a href="#Login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mon Site. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;

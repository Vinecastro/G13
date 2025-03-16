import React from 'react';
import '../Styles/Footer.css'; // Importando o arquivo CSS
import logo from '../assets/logog13.jpg'; // Logo da empresa

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* Logo clicável redirecionando para a página inicial */}
        <a href="/">
          <img src={logo} alt="Logo G13 BJJ" className="logo-img" />
        </a>
      </div>
      <nav className="footer-nav">
        <ul>
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="http://localhost:3000/sobre">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </nav>
      <div className="footer-copyright">
        <p>&copy; 2025 G13 BJJ - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

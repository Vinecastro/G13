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
          <li><a href="https://g13-six.vercel.app/">Home</a></li>
          <li><a href="https://g13-six.vercel.app/sobre">Sobre</a></li>
          <li><a href="https://g13-six.vercel.app/contato">Contato</a></li>
          <li><a href="https://www.instagram.com/g13bjjvilamascote/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://wa.me/5511963859812" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </nav>
      <div className="footer-copyright">
        <p>&copy; 2025 G13 BJJ - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

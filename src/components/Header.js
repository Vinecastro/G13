import React from "react";
import { Link } from "react-router-dom"; // Importe o Link para navegação
import "../Styles/Header.css"; // Estilos do Header
import logo from "../assets/logog13.jpg"; // Logo da página

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Menu de navegação */}
      <nav className="nav">
        <ul>
          <li>
            <Link to="/loja">Loja</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="#contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

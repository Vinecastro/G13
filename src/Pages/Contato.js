import React from "react";
import "../Styles/Contato.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contato = () => {
  return (
    <div className="contato">
      <Header />
      <main className="contato-container">
        <h1 className="contato-titulo">Contato</h1>
        <p className="contato-texto">
          Entre em contato conosco para mais informações sobre nossas aulas e unidades.
        </p>

        <div className="contato-info">
          <h2>Endereço</h2>
          <p>Avenida Santa Catarina, 1016, São Paulo</p>

          <h2>Telefone</h2>
          <p>(11) 96385-9812</p>
        </div>

        <div className="horarios-container">
          <h2>Horários das Aulas</h2>

          <div className="horarios-bloco">
            <h3>Jiu-Jitsu</h3>
            <p><strong>Seg, Qua e Sex:</strong> 07h, 12:30, 15h, 17h, 18h (Kids), 20h</p>
            <p><strong>Ter e Qui:</strong> 07h, 12:30, 17h, 20h</p>
          </div>

          <div className="horarios-bloco">
            <h3>NoGi</h3>
            <p><strong>Ter e Qui:</strong> 18h</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;

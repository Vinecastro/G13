import React from "react";
import "../Styles/Sobre.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Sobre = () => {
  return (
    <div className="sobre">
      <Header />
      <main className="sobre-container">
        <h1 className="sobre-titulo">Sobre Nós</h1>
        <p className="sobre-texto">
        A G13 BJJ é uma das equipes de Jiu-Jitsu mais respeitadas do mundo, com mais de 100 unidades e 10.000 alunos espalhados pelo Brasil e pelo mundo.
        </p>
        <p className="sobre-texto">
        Nosso objetivo é formar atletas de alto nível e proporcionar um ambiente de aprendizado acessível a todos, desde iniciantes até competidores profissionais. Seguimos uma metodologia de ensino inovadora, focada em disciplina, técnica e evolução contínua.
        </p>
        <p className="sobre-texto">
        Além dos treinos, a G13 se destaca em campeonatos nacionais e internacionais, sempre buscando a excelência dentro e fora dos tatames. Se você busca melhorar seu condicionamento físico, aprender defesa pessoal ou competir no mais alto nível, a G13 é o lugar certo para você!
        </p>
      </main>
      <div class="metodologias-container">
    <h2 class="metodologias-titulo">Nossas Metodologias</h2>
    
    <div class="metodologias-grid">
        <div class="metodologia-card">
            <i class="fas fa-brain"></i>
            <h3>TREINO COMPETIÇÃO</h3>
            <p>Para você que é graduado e tem latente dentro de si a vontade de competir, a G13BJJ dispõe dos treinos de competidor. De segunda a sexta-feira, seja na matriz ou na G13 House você terá a oportunidade de evoluir técnica e fisicamente treinando junto a grandes campeões do cenário nacional e internacional</p>
        </div>

        <div class="metodologia-card">
            <i class="fas fa-users"></i>
            <h3>KIDS</h3>
            <p>Soma-se a isso, a proposta anti-bullying, com o objetivo de tornar a criança capaz de se defender diante de situações intimidadoras do cotidiano, como: agressões físicas, emocionais e as drogas.
            Tais situações, quando não trabalhadas, podem prejudicar o desenvolvimento motor e o emocional da criança, tornando-as adultos inseguros.</p>
        </div>

        
  <div class="metodologia-card">
    <h3> JIU JITSU FEMININO</h3>
    <p>É cada vez maior o número de mulheres nos tatames das Unidades G13.
Em busca de uma arte marcial que as ajude a se defender em situações de perigo, o jiu-jitsu têm sido uma excelente escolha.
A metodologia de ensino do jiu-jitsu G13, promove o controle sobre o corpo e emoções, condicionamento fisico e, principalmente, se defender e conseguir evitar situações que as coloquem em risco. Além de tonificar o corpo, promover a perda de peso, melhorar a concentração e combater o stress.</p>
  </div>
    </div>
</div>
      <Footer />
    </div>
  );
};

export default Sobre;

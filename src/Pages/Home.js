  import React from 'react';
  import Header from '../components/Header';  // Verifique se o caminho está correto
  import Footer from '../components/Footer';  // Verifique se o caminho está correto
  import '../Styles/Home.css';  // Verifique se o caminho do CSS está correto
  import graduacao from '../assets/graduacao.png'; // Verifique se o caminho da imagem está correto

  const Home = () => {
    return (
      <div>
        <Header />
        <div className="intro">
          <h2>Seja Bem-Vindo a G13: Sua Jornada no Jiu-Jitsu Começa Aqui!</h2>
          <p>
      Na <strong>G13 BJJ</strong>, o Jiu-Jitsu vai além de uma arte marcial — 
      é um <strong>estilo de vida</strong> que transforma corpo e mente.  
      Nossa equipe se destaca pela <strong>disciplina</strong>,  
      <strong>técnica apurada</strong> e <strong>espírito de superação</strong>,  
      proporcionando um ambiente ideal para o aprendizado e o crescimento pessoal.
  </p>

  <p>
      Aqui, cada treino é uma oportunidade para evoluir, seja você um  
      <strong> iniciante buscando autoconfiança</strong> ou um  
      <strong> competidor em busca da excelência</strong>. No tatame, valorizamos o  
      <strong> respeito</strong>, a <strong> perseverança</strong> e o  
      <strong> trabalho em equipe</strong>, sempre guiados por uma metodologia de ensino  
      que une <strong>tradição e inovação</strong>.
  </p>

        </div>
        <div class="container-imagem-headline">
      <img src={graduacao} alt="Graduacao" className="graduacao-png" />
      <h1 className="headline">Venha fazer parte de nossa equipe</h1>
  </div>
  <hr className="linha-div" />  {/* Linha entre as divs */}
        <div className="agendamento">
          <a
            href="https://www.instagram.com/g13bjjvilamascote/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card">
              <h2>Agende sua aula experimental</h2>
              <p>
                Descubra como o Jiu-Jitsu pode transformar sua vida! Clique para
                marcar uma aula gratuita.
              </p>
            </div>
          </a>
        </div>
        <div className="info-aulas">
          <h1 className="convite">Conheça nossas modalidades</h1>
        </div>
        <div className="nogi">
          <h1>NoGi</h1>
          <hr />
          <p>
            NoGi é uma modalidade do Jiu-Jitsu onde os praticantes não utilizam o
            tradicional kimono. Nesse estilo, os atletas competem usando roupas mais
            leves, como rash guards e shorts, o que modifica a dinâmica das lutas.
            A falta do kimono permite movimentos mais rápidos e diferentes tipos de
            pegadas, além de proporcionar um treino mais voltado para o Jiu-Jitsu
            aplicado em competições de MMA e outras artes marciais.
          </p>
        </div>
        <div className="bjj">
          <h1>Jiu-Jitsu</h1>
          <hr />
          <p>
            O Jiu-Jitsu é uma arte marcial que enfatiza o uso de técnicas de solo,
            como imobilizações, chaves de braço e estrangulamentos. A modalidade é
            conhecida por seu foco na técnica em vez da força bruta, permitindo que
            praticantes mais leves ou menos fortes consigam controlar e submeter
            adversários mais pesados. O Jiu-Jitsu é amplamente utilizado em
            competições, incluindo o MMA, e oferece um excelente treino para a
            defesa pessoal.
          </p>
        </div>
        <Footer />
      </div>
    );
  };

  export default Home;

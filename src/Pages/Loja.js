import React from "react";
import "../Styles/Loja.css"; // Arquivo de estilo para a página da loja
import Header from "../components/Header";
import Footer from "../components/Footer";

const produtos = [
  {
    id: 1,
    nome: "Kimono Branco",
    descricao: "Kimono de Jiu-Jitsu branco, ideal para iniciantes e campeões.",
    preco: "R$ 482,79",
    imagem:
      "https://cdnhuawei.lojavirtuolpro.com/g13store/produto/multifotos/hd/20240424110240_5922994078_DMZ.jpg?x-image-process=image/format,webp/quality,q_90",
    link: "https://g13bjjstore.com.br/kimono-adulto---modelo-dragao/p", // Link da web para este produto
  },
  {
    id: 2,
    nome: "Kimono Azul",
    descricao: "Kimono azul, resistente e confortável para treinos intensos.",
    preco: "R$ 528,75",
    imagem:
      "https://cdnhuawei.lojavirtuolpro.com/g13store/produto/multifotos/hd/20220718125104_8708991292_DMZ.jpg?x-image-process=image/format,webp/quality,q_90",
    link: "https://g13bjjstore.com.br/kimono-g13-bjj---azul/p", // Link da web para este produto
  },
  {
    id: 3,
    nome: "Kimono Preto",
    descricao: "Kimono preto, o símbolo de expertise no Jiu-Jitsu.",
    preco: "R$ 528,77",
    imagem:
      "https://cdnhuawei.lojavirtuolpro.com/g13store/produto/multifotos/hd/20240410154029_8584991416_DZ.jpg?x-image-process=image/format,webp/quality,q_90",
    link: "https://g13bjjstore.com.br/kimono-g13-bjj---preto-basico/p", // Link da web para este produto
  },
  {
    id: 4,
    nome: "Rashguard Manga longa",
    descricao: "Rashguard de manga longa, ideal para treinos intensos, com conforto e proteção.",
    preco: "R$ 140,00",
    imagem:
      "https://cdnhuawei.lojavirtuolpro.com/g13store/produto/multifotos/hd/20220530115627_3410996590_DZ.jpg?x-image-process=image/format,webp/quality,q_90",
    link: "https://g13bjjstore.com.br/rashguard-classic-g13-bjj/p", // Link da web para este produto
  },
  {
    id: 5,
    nome: "Rashguard Manga curta",
    descricao: "Rashguard de manga curta, leve e flexível, perfeita para seus treinos.",
    preco: "R$ 140,00",
    imagem:
      "https://cdnhuawei.lojavirtuolpro.com/g13store/produto/multifotos/hd/20230929102015_4956995044_DZ.jpg?x-image-process=image/format,webp/quality,q_90",
    link: "https://g13bjjstore.com.br/rashguard-classic---manga-curta/p", // Link da web para este produto
  },
];

const Loja = () => {
  return (
    <div className="loja">
      <Header />
      <h1 className="titulo-loja">Vitrine de Kimonos</h1>
      <div className="produtos-container">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="produto-imagem"
            />
            <div className="produto-info">
              <h2 className="produto-nome">{produto.nome}</h2>
              <p className="produto-descricao">{produto.descricao}</p>
              <p className="produto-preco">{produto.preco}</p>
              {/* Adicionando o link externo no botão */}
              <a
                href={produto.link}
                target="_blank" // Abre o link em uma nova aba
                rel="noopener noreferrer" // Segurança para evitar vulnerabilidades
              >
                <button className="comprar-btn">Comprar</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Loja;

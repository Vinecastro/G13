import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';  // Certifique-se de importar corretamente as páginas
import Loja from '../Pages/Loja';
import Sobre from '../Pages/Sobre'; // Corrigida a importação
import Contato from '../Pages/Contato';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Rota para a Home */}
      <Route path="/loja" element={<Loja />} />  {/* Rota para a Loja */}
      <Route path="/sobre" element={<Sobre />} /> {/* Rota para a página Sobre */}
      <Route path="/contato" element={<Contato />} /> {/* Rota para a página Contato */}
    </Routes>
  );
};

export default AppRoutes;

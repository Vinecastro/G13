import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';  // Certifique-se de importar corretamente as páginas
import Loja from '../Pages/Loja';
import Sobre from '../Pages/Sobre'; // Corrigida a importação

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Rota para a Home */}
      <Route path="/loja" element={<Loja />} />  {/* Rota para a Loja */}
      <Route path="/sobre" element={<Sobre />} /> {/* Rota para a página Sobre */}
    </Routes>
  );
};

export default AppRoutes;

// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import MainMap from './MainMap'; // rename of your flowchart component (was App)
import CoursesPage from './CoursesPage';
import Home from './Home';

import { nodes as ccNodes, edges as ccEdges, year_labels as ccYears } from './coursesLCC';
import { nodes as tdNodes, edges as tdEdges, year_labels as tdYears } from './coursesLTD';
import { nodes as admNodes, edges as admEdges, year_labels as admYears } from './courses/admin';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={
          <Home />
          } />
        <Route path="/ciencias-del-comportamiento" element={
          <CoursesPage
            initialEdges={ccEdges}
            initialNodes={ccNodes}
            years={ccYears}
            url={"https://www.utdt.edu/ver_contenido.php?id_contenido=24484&id_item_menu=40415"}
        />} />
        <Route path="/tecnologia-digital" element={
          <CoursesPage
            initialEdges={tdEdges}
            initialNodes={tdNodes}
            years={tdYears}
            url={"https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534"}
        />} />
        <Route path="/administracion-de-empresas" element={
          <CoursesPage
            initialEdges={admEdges}
            initialNodes={admNodes}
            years={admYears}
            url={"https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534"}
        />} />
      </Routes>
    </div>
  );
}

export default App;

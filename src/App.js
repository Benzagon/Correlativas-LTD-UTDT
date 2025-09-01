// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import MainMap from './MainMap'; // rename of your flowchart component (was App)
import CoursesPage from './CoursesPage';
import Home from './Home';

import { nodes as ccNodes, edges as ccEdges, year_labels as ccYears } from './courses/ciencias_del_comportamiento';
import { nodes as tdNodes, edges as tdEdges, year_labels as tdYears } from './courses/tecno_digital';
import { nodes as admNodes, edges as admEdges, year_labels as admYears } from './courses/admin';
import { nodes as ecoemNodes, edges as ecoemEdges, year_labels as ecoemYears } from './courses/eco_empresarial';

const DefinedRoutes = [
  {
    path: "/ciencias-del-comportamiento",
    edges: ccEdges,
    nodes: ccNodes,
    years: ccYears,
    url: "https://www.utdt.edu/ver_contenido.php?id_contenido=24484&id_item_menu=40415"
  },
  {
    path: "/tecnologia-digital",
    edges: tdEdges,
    nodes: tdNodes,
    years: tdYears,
    url: "https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534"
  },
  {
    path: "/administracion-de-empresas",
    edges: admEdges,
    nodes: admNodes,
    years: admYears,
    url: "https://www.utdt.edu/ver_contenido.php?id_contenido=7907&id_item_menu=15483"
  },
  {
    path: "/economia-empresarial",
    edges: ecoemEdges,
    nodes: ecoemNodes,
    years: ecoemYears,
    url: "https://www.utdt.edu/ver_contenido.php?id_contenido=570&id_item_menu=218"
  },
]

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={
          <Home />
        } />
        {DefinedRoutes.map((elem, key) => (
          <Route path={elem.path} key={key} element={
            <CoursesPage
              initialEdges={elem.edges}
              initialNodes={elem.nodes}
              years={elem.years}
              url={elem.url}
          />} />))
        }
      </Routes>
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import MainMap from './MainMap'; // rename of your flowchart component (was App)
import CoursesPage from './CoursesPage';
import Home from './Home';

import { nodes as ccNodes, edges as ccEdges, year_labels as ccYears } from './coursesLCC';
import { nodes as tdNodes, edges as tdEdges, year_labels as tdYears } from './coursesLTD';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Home />
          } />
        <Route path="/ciencias-del-comportamiento" element={
          <CoursesPage
            initialEdges={ccEdges}
            initialNodes={ccNodes}
            years={ccYears}
        />} />
        <Route path="/tecnologia-digital" element={
          <CoursesPage
            initialEdges={tdEdges}
            initialNodes={tdNodes}
            years={tdYears}
        />} />
      </Routes>
    </div>
  );
}

export default App;

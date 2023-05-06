import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreatePage from './views/CreatePage';
import Dashboard from './views/Dashboard';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/foods/new" element={<CreatePage />} />
        <Route path="/foods/:id" element={<DetailsPage />} />
        <Route path="/foods/:id/edit" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Metadataexport from './metadataexport.component';

const Root: React.FC = () => (
  <BrowserRouter basename={window.getOpenmrsSpaBase()}>
    <Routes>
      <Route path="metadataexport" element={<Metadataexport />} />
    </Routes>
  </BrowserRouter>
);

export default Root;

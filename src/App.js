/** @format */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FlyOutMenu from './FlyoutMenu';
import Routes from './Router';

function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <FlyOutMenu />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

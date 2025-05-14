import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GpcAutomation from './pages/GpcAutomation';
import Biocertificate from './pages/Biocertificate';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-layout">
      <Header
        isOpen={sidebarOpen}
        onBurgerClick={() => setSidebarOpen(o => !o)}
      />
      <div className="content-area">
        <Sidebar isOpen={sidebarOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gpc-automatisering" element={<GpcAutomation />} />
            <Route path="/biocertificaat" element={<Biocertificate />} />
            {/* …other routes */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

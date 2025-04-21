import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './contexts/WalletContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Assets from './pages/Assets';
import Marketplace from './pages/Marketplace';
import GameStats from './pages/GameStats';
import './App.css';

function App() {
  return (
    <WalletProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/stats" element={<GameStats />} />
          </Routes>
        </Layout>
      </Router>
    </WalletProvider>
  );
}

export default App;
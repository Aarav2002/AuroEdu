import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col md:flex-row">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleSidebar}
          className="p-2 bg-neutral-800 rounded-md text-neutral-200"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Sidebar for mobile (conditionally shown) */}
      <div 
        className={`fixed md:hidden inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />
      
      <motion.div 
        className={`fixed md:static top-0 left-0 h-full z-50 md:z-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 ease-in-out md:transition-none`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </motion.div>

      <div className="flex-grow flex flex-col overflow-hidden">
        <Header />

        <main className="flex-grow p-4 md:p-6 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
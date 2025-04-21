import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Wallet, ShoppingBag, TowerControl as GameController, BarChart2, Cog, LogOut, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: <Home size={20} />, path: '/' },
    { name: 'Assets', icon: <Wallet size={20} />, path: '/assets' },
    { name: 'Marketplace', icon: <ShoppingBag size={20} />, path: '/marketplace' },
    { name: 'Game Stats', icon: <BarChart3 size={20} />, path: '/stats' }
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="w-64 h-full bg-neutral-900 border-r border-neutral-800 flex flex-col">
      <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">G</div>
          <h1 className="text-xl font-bold text-white font-['Chakra_Petch'] tracking-tight">
            <span className="text-primary-400">Crypto</span>Game
          </h1>
        </div>
        <button className="md:hidden text-neutral-400 hover:text-white" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3 mb-6">
          <div className="rounded-lg bg-neutral-800 bg-opacity-40 p-3 flex items-center">
            <div className="h-10 w-10 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="Player avatar" 
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="ml-3">
              <h3 className="text-sm font-medium text-white">Player001</h3>
              <div className="text-xs text-neutral-400 flex items-center mt-0.5">
                <span className="h-2 w-2 rounded-full bg-success-500 mr-1.5"></span>
                Online
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-3 pb-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 px-3 mb-3">Menu</h3>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-1">
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-900 bg-opacity-50 text-primary-400'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                  }`}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={isActive(item.path) ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium">{item.name}</span>
                  {isActive(item.path) && (
                    <motion.div
                      className="ml-auto h-2 w-2 rounded-full bg-primary-500"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', duration: 0.5 }}
                    ></motion.div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="px-3 pt-6 pb-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 px-3 mb-3">Games</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200">
                <div className="flex-shrink-0 h-5 w-5 rounded overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="CryptoQuest" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-medium">CryptoQuest</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200">
                <div className="flex-shrink-0 h-5 w-5 rounded overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6498893/pexels-photo-6498893.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="MetaRacer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-medium">MetaRacer</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200">
                <div className="flex-shrink-0 h-5 w-5 rounded overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="CryptoLegends" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-medium">CryptoLegends</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-auto p-3 border-t border-neutral-800">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 py-2 px-3 rounded-lg transition-colors">
            <Cog size={20} />
            <span className="font-medium">Settings</span>
          </button>
          <button className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 py-2 px-3 rounded-lg transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
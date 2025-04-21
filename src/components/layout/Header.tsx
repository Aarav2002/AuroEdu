import React from 'react';
import { useWallet } from '../../contexts/WalletContext';
import { Wallet, Bell, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { isConnected, address, balance, connectWallet, disconnectWallet } = useWallet();

  const formatAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <header className="bg-neutral-900 border-b border-neutral-800 p-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-white font-['Chakra_Petch'] tracking-tight hidden md:block">
        <span className="text-primary-400">Crypto</span>Game Dashboard
      </h1>

      <div className="flex items-center gap-4 ml-auto">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:bg-neutral-700 relative"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-primary-500 rounded-full"></span>
          </motion.button>
        </div>
        
        {isConnected ? (
          <div className="flex items-center gap-2">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium text-neutral-300">{formatAddress(address || '')}</span>
              <span className="text-xs text-neutral-400">{balance} ETH</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={disconnectWallet}
              className="btn btn-outline py-1.5 text-sm"
            >
              <Wallet size={16} />
              <span className="hidden md:inline">Disconnect</span>
              <span className="md:hidden">Wallet</span>
            </motion.button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={connectWallet}
            className="btn btn-primary py-1.5 text-sm"
          >
            <Wallet size={16} />
            Connect Wallet
          </motion.button>
        )}

        <div className="hidden md:flex items-center gap-2 ml-4">
          <img 
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150" 
            alt="User avatar" 
            className="w-8 h-8 rounded-full object-cover border border-neutral-700"
          />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-medium text-neutral-300">Player001</span>
          </div>
          <ChevronDown size={14} className="text-neutral-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
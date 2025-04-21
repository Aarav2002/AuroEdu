import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Clock } from 'lucide-react';

const earningsData = [
  { 
    game: 'CryptoQuest',
    logo: 'https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=100',
    earnings: 345.20,
    change: 15.4,
    duration: '23h 45m'
  },
  { 
    game: 'MetaRacer',
    logo: 'https://images.pexels.com/photos/6498893/pexels-photo-6498893.jpeg?auto=compress&cs=tinysrgb&w=100',
    earnings: 189.75,
    change: 7.2,
    duration: '12h 20m'
  },
  { 
    game: 'CryptoLegends',
    logo: 'https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=100',
    earnings: 112.50,
    change: -3.8,
    duration: '8h 15m'
  },
  { 
    game: 'BlockFighters',
    logo: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=100',
    earnings: 92.15,
    change: 12.1,
    duration: '5h 10m'
  }
];

const EarningsOverview: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="card"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Earnings by Game</h2>
          <select className="bg-neutral-800 border border-neutral-700 text-neutral-300 rounded-md text-sm p-1.5">
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="3months">Last 3 months</option>
          </select>
        </div>
        <div className="space-y-4">
          {earningsData.map((game, index) => (
            <div key={index} className="flex items-center p-3 hover:bg-neutral-800 rounded-lg transition-colors">
              <div className="h-10 w-10 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={game.logo}
                  alt={game.game}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-3 flex-grow">
                <h3 className="text-white font-medium">{game.game}</h3>
                <div className="flex items-center text-xs text-neutral-400 mt-1">
                  <Clock size={12} className="mr-1" />
                  <span>{game.duration} played</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">${game.earnings.toFixed(2)}</div>
                <div className={`flex items-center text-xs mt-1 ${game.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {game.change >= 0 ? <ArrowUpRight size={12} className="mr-1" /> : <TrendingUp size={12} className="mr-1 transform rotate-180" />}
                  <span>{Math.abs(game.change).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EarningsOverview;
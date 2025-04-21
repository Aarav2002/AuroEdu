import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown, ArrowDownUp } from 'lucide-react';

// Sample data
const assetsList = [
  {
    id: '1',
    name: 'Dragon Slayer Sword',
    type: 'nft',
    image: 'https://cdn.shopify.com/s/files/1/0747/4144/9025/files/dragon-slayer.png?v=1682568199',
    value: 450,
    gameId: 'CryptoQuest',
    rarity: 'Legendary',
    attributes: {
      attack: 120,
      durability: 90,
      level: 5
    }
  },
  {
    id: '2',
    name: 'Mystic Armor',
    type: 'nft',
    image: 'https://i.pinimg.com/564x/2c/5b/85/2c5b85a0a018a78e113c097978536be8.jpg',
    value: 380,
    gameId: 'CryptoQuest',
    rarity: 'Epic',
    attributes: {
      defense: 95,
      durability: 80,
      level: 4
    }
  },
  {
    id: '3',
    name: 'Speed Booster',
    type: 'nft',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbaT8mpBCTpJo1jMwuroiYTyuBYvDex6XilO8zZE33c20CAzGO5_HCICWmisqF0_3Zig&usqp=CAU',
    value: 220,
    gameId: 'MetaRacer',
    rarity: 'Rare',
    attributes: {
      speed: 90,
      acceleration: 85,
      level: 3
    }
  },
  {
    id: '4',
    name: 'QUEST Token',
    type: 'token',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=300',
    value: 560,
    gameId: 'CryptoQuest',
    quantity: 1200
  },
  {
    id: '5',
    name: 'RACE Token',
    type: 'token',
    image: 'https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=300',
    value: 340,
    gameId: 'MetaRacer',
    quantity: 850
  },
  {
    id: '6',
    name: 'Fighter Gloves',
    type: 'nft',
    image: 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=300',
    value: 180,
    gameId: 'BlockFighters',
    rarity: 'Uncommon',
    attributes: {
      attack: 60,
      speed: 85,
      level: 2
    }
  }
];

const Assets: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAssets = assetsList.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || asset.type === filter;
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white font-['Chakra_Petch']">My Assets</h1>
          <p className="text-neutral-400 mt-1">Manage your in-game assets and tokens</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-neutral-800 rounded-lg border border-neutral-700 pl-10 pr-4 py-2 text-sm text-neutral-200 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-neutral-800 rounded-lg border border-neutral-700 pl-4 pr-10 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Assets</option>
              <option value="nft">NFTs Only</option>
              <option value="token">Tokens Only</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
          </div>
          
          <div className="flex">
            <button
              onClick={() => setView('grid')}
              className={`rounded-l-lg px-3 py-2 ${
                view === 'grid' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setView('list')}
              className={`rounded-r-lg px-3 py-2 ${
                view === 'list' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">
              {filter === 'all' ? 'All Assets' : filter === 'nft' ? 'NFTs' : 'Tokens'}
            </h2>
            <span className="bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded-md">
              {filteredAssets.length} items
            </span>
          </div>
          
          <button className="flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-300">
            <ArrowDownUp size={14} />
            <span>Sort</span>
          </button>
        </div>
        
        {view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="card overflow-hidden flex flex-col bg-neutral-800"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={asset.image} 
                    alt={asset.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`badge ${
                      asset.type === 'nft' 
                        ? 'badge-primary' 
                        : 'badge-success'
                    }`}>
                      {asset.type === 'nft' ? 'NFT' : 'Token'}
                    </span>
                  </div>
                  {asset.type === 'nft' && asset.rarity && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <span className={`text-xs font-semibold ${
                        asset.rarity === 'Legendary' ? 'text-orange-400' :
                        asset.rarity === 'Epic' ? 'text-purple-400' :
                        asset.rarity === 'Rare' ? 'text-blue-400' :
                        'text-green-400'
                      }`}>
                        {asset.rarity}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white text-lg">{asset.name}</h3>
                  </div>
                  
                  <div className="text-sm text-neutral-400 mb-3">{asset.gameId}</div>
                  
                  {asset.type === 'nft' && asset.attributes && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                      {Object.entries(asset.attributes).map(([key, value]) => (
                        <div key={key} className="bg-neutral-700 rounded px-2 py-1">
                          <span className="text-neutral-400 capitalize">{key}: </span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {asset.type === 'token' && (
                    <div className="text-sm text-neutral-400 mb-3">
                      Quantity: <span className="text-white font-medium">{asset.quantity?.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="mt-auto pt-3 border-t border-neutral-700 flex items-center justify-between">
                    <div className="text-white font-bold">${asset.value.toLocaleString()}</div>
                    <button className="btn btn-outline py-1 px-3 text-xs">Trade</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Type</th>
                  <th>Game</th>
                  <th>Properties</th>
                  <th>Value</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset, index) => (
                  <motion.tr
                    key={asset.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="hover:bg-neutral-800/50"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md overflow-hidden">
                          <img
                            src={asset.image}
                            alt={asset.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-white">{asset.name}</div>
                          {asset.type === 'nft' && asset.rarity && (
                            <div className={`text-xs ${
                              asset.rarity === 'Legendary' ? 'text-orange-400' :
                              asset.rarity === 'Epic' ? 'text-purple-400' :
                              asset.rarity === 'Rare' ? 'text-blue-400' :
                              'text-green-400'
                            }`}>
                              {asset.rarity}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${
                        asset.type === 'nft' 
                          ? 'badge-primary' 
                          : 'badge-success'
                      }`}>
                        {asset.type === 'nft' ? 'NFT' : 'Token'}
                      </span>
                    </td>
                    <td>{asset.gameId}</td>
                    <td>
                      {asset.type === 'nft' && asset.attributes ? (
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(asset.attributes).map(([key, value]) => (
                            <div key={key} className="text-xs bg-neutral-700 rounded px-1.5 py-0.5">
                              <span className="text-neutral-400 capitalize">{key}:</span> {value}
                            </div>
                          ))}
                        </div>
                      ) : asset.type === 'token' && asset.quantity ? (
                        <div className="text-sm">
                          Qty: <span className="text-white font-medium">{asset.quantity.toLocaleString()}</span>
                        </div>
                      ) : null}
                    </td>
                    <td className="font-bold text-white">${asset.value.toLocaleString()}</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-outline py-1 px-3 text-xs">Trade</button>
                        <button className="btn btn-primary py-1 px-3 text-xs">View</button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assets;
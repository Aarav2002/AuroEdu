import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown, ShoppingBag } from 'lucide-react';

// Sample data
const marketplaceItems: MarketplaceItem[] = [
  {
    id: '1',
    name: 'Flaming Sword',
    type: 'nft',
    image: 'https://t3.ftcdn.net/jpg/12/84/50/74/360_F_1284507494_BHyS5VMQx7lwYcMJsVmqwAp7cqI77mqR.jpg',
    price: 350,
    currency: 'ETH',
    seller: '0x1a2b...3c4d',
    game: 'CryptoQuest',
    rarity: 'Epic',
    attributes: {
      attack: 95,
      durability: 80,
      level: 4
    }
  },
  {
    id: '2',
    name: 'Golden Shield',
    type: 'nft',
    image: 'https://cdn.vectorstock.com/i/1000v/01/65/golden-shield-vector-28050165.jpg',
    price: 220,
    currency: 'ETH',
    seller: '0x5e6f...7g8h',
    game: 'CryptoQuest',
    rarity: 'Rare',
    attributes: {
      defense: 85,
      durability: 90,
      level: 3
    }
  },
  {
    id: '3',
    name: 'Racing Car Alpha',
    type: 'nft',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGxcVKggyh72rgGbGEC0Y0c5pp31GAWHQ9Q&s',
    price: 480,
    currency: 'ETH',
    seller: '0x9i0j...1k2l',
    game: 'MetaRacer',
    rarity: 'Legendary',
    attributes: {
      speed: 98,
      acceleration: 92,
      handling: 95,
      level: 5
    }
  },
  {
    id: '4',
    name: 'QUEST Bundle (500)',
    type: 'token',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 120,
    currency: 'ETH',
    seller: '0x3m4n...5o6p',
    game: 'CryptoQuest'
  },
  {
    id: '5',
    name: 'Fighter Helmet',
    type: 'nft',
    image: 'https://images.pexels.com/photos/6499182/pexels-photo-6499182.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 180,
    currency: 'ETH',
    seller: '0x7q8r...9s0t',
    game: 'BlockFighters',
    rarity: 'Uncommon',
    attributes: {
      defense: 65,
      durability: 70,
      level: 2
    }
  },
  {
    id: '6',
    name: 'RACE Token (1000)',
    type: 'token',
    image: 'https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 200,
    currency: 'ETH',
    seller: '0x1u2v...3w4x',
    game: 'MetaRacer'
  },
  {
    id: '7',
    name: 'Mystic Staff',
    type: 'nft',
    image: 'https://img.freepik.com/free-vector/fantasy-scepter-made-wood-with-magic-elements_107791-25767.jpg?semt=ais_hybrid&w=740',
    price: 290,
    currency: 'ETH',
    seller: '0x5y6z...7a8b',
    game: 'CryptoQuest',
    rarity: 'Epic',
    attributes: {
      magic: 90,
      range: 85,
      level: 4
    }
  },
  {
    id: '8',
    name: 'Legendary Chest',
    type: 'nft',
    image: 'https://m.media-amazon.com/images/I/81x29eWEcXS.jpg',
    price: 550,
    currency: 'ETH',
    seller: '0x9c0d...1e2f',
    game: 'CryptoLegends',
    rarity: 'Legendary',
    attributes: {
      items: 5,
      rarityChance: 95,
      level: 5
    }
  }
];

const games = ['All Games', 'CryptoQuest', 'MetaRacer', 'BlockFighters', 'CryptoLegends'];
const types = ['All Types', 'NFT', 'Token'];
const rarities = ['All Rarities', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
const priceRanges = ['All Prices', 'Under $100', '$100 - $250', '$250 - $500', 'Over $500'];

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('All Games');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedRarity, setSelectedRarity] = useState('All Rarities');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredItems = marketplaceItems.filter(item => {
    // Search filter
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Game filter
    const matchesGame = selectedGame === 'All Games' || item.game === selectedGame;
    
    // Type filter
    const matchesType = selectedType === 'All Types' || 
      (selectedType === 'NFT' && item.type === 'nft') || 
      (selectedType === 'Token' && item.type === 'token');
    
    // Rarity filter (only applies to NFTs)
    const matchesRarity = selectedRarity === 'All Rarities' || 
      (item.type === 'nft' && item.rarity === selectedRarity);
    
    // Price filter
    let matchesPrice = true;
    if (selectedPriceRange === 'Under $100') {
      matchesPrice = item.price < 100;
    } else if (selectedPriceRange === '$100 - $250') {
      matchesPrice = item.price >= 100 && item.price <= 250;
    } else if (selectedPriceRange === '$250 - $500') {
      matchesPrice = item.price > 250 && item.price <= 500;
    } else if (selectedPriceRange === 'Over $500') {
      matchesPrice = item.price > 500;
    }
    
    return matchesSearch && matchesGame && matchesType && matchesRarity && matchesPrice;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white font-['Chakra_Petch']">Marketplace</h1>
          <p className="text-neutral-400 mt-1">Buy, sell, and trade in-game assets and tokens</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search marketplace..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-neutral-800 rounded-lg border border-neutral-700 pl-10 pr-4 py-2 text-sm text-neutral-200 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1 bg-neutral-800 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-700"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>
        </div>
      </div>
      
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="card p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-neutral-400 text-sm mb-2">Game</label>
              <div className="relative">
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="appearance-none bg-neutral-800 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 w-full focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                >
                  {games.map(game => (
                    <option key={game} value={game}>{game}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-neutral-400 text-sm mb-2">Type</label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-neutral-800 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 w-full focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-neutral-400 text-sm mb-2">Rarity</label>
              <div className="relative">
                <select
                  value={selectedRarity}
                  onChange={(e) => setSelectedRarity(e.target.value)}
                  className="appearance-none bg-neutral-800 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 w-full focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                >
                  {rarities.map(rarity => (
                    <option key={rarity} value={rarity}>{rarity}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-neutral-400 text-sm mb-2">Price Range</label>
              <div className="relative">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="appearance-none bg-neutral-800 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 w-full focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Featured Items</h2>
            <p className="text-neutral-400 text-sm mt-1">Showing {filteredItems.length} items</p>
          </div>
          
          <div className="relative">
            <select className="appearance-none bg-neutral-800 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
              <option>Recently Added</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card overflow-hidden flex flex-col bg-neutral-800"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className={`badge ${
                    item.type === 'nft' 
                      ? 'badge-primary' 
                      : 'badge-success'
                  }`}>
                    {item.type === 'nft' ? 'NFT' : 'Token'}
                  </span>
                </div>
                {item.type === 'nft' && item.rarity && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className={`text-xs font-semibold ${
                      item.rarity === 'Legendary' ? 'text-orange-400' :
                      item.rarity === 'Epic' ? 'text-purple-400' :
                      item.rarity === 'Rare' ? 'text-blue-400' :
                      item.rarity === 'Uncommon' ? 'text-green-400' :
                      'text-gray-400'
                    }`}>
                      {item.rarity}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-lg">{item.name}</h3>
                </div>
                
                <div className="text-sm text-neutral-400 mb-3">
                  <span>{item.game}</span>
                  <span className="mx-1">•</span>
                  <span>Seller: {item.seller}</span>
                </div>
                
                {item.type === 'nft' && item.attributes && (
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    {Object.entries(item.attributes).map(([key, value]) => (
                      <div key={key} className="bg-neutral-700 rounded px-2 py-1">
                        <span className="text-neutral-400 capitalize">{key}: </span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-auto pt-3 border-t border-neutral-700 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=50" 
                        alt="ETH" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white font-bold">{item.price.toFixed(2)}</div>
                  </div>
                  <button className="btn btn-primary py-1.5 px-3 text-xs flex items-center gap-1">
                    <ShoppingBag size={12} />
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
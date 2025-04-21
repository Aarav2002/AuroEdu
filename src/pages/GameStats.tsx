import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronDown, Star, Clock, Swords, Target, Gamepad } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  Legend
} from 'recharts';

// Sample data
const gameStatsList: GameStat[] = [
  {
    gameId: 'game1',
    gameName: 'CryptoQuest',
    logo: 'https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=100',
    stats: {
      rank: 156,
      wins: 45,
      losses: 22,
      killDeathRatio: 2.4,
      playtime: 78,
      level: 24,
      experience: 12580,
      achievements: 18
    }
  },
  {
    gameId: 'game2',
    gameName: 'MetaRacer',
    logo: 'https://images.pexels.com/photos/6498893/pexels-photo-6498893.jpeg?auto=compress&cs=tinysrgb&w=100',
    stats: {
      rank: 89,
      wins: 32,
      losses: 18,
      playtime: 45,
      level: 18,
      experience: 8940,
      achievements: 12
    }
  },
  {
    gameId: 'game3',
    gameName: 'BlockFighters',
    logo: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=100',
    stats: {
      rank: 212,
      wins: 28,
      losses: 35,
      killDeathRatio: 1.5,
      playtime: 38,
      level: 15,
      experience: 7250,
      achievements: 9
    }
  },
  {
    gameId: 'game4',
    gameName: 'CryptoLegends',
    logo: 'https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=100',
    stats: {
      rank: 320,
      wins: 15,
      losses: 20,
      killDeathRatio: 1.2,
      playtime: 25,
      level: 10,
      experience: 4120,
      achievements: 5
    }
  }
];

const performanceData = [
  { game: 'CryptoQuest', kd: 2.4, winRate: 67, playtime: 78, value: 65 },
  { game: 'MetaRacer', kd: 0, winRate: 64, playtime: 45, value: 55 },
  { game: 'BlockFighters', kd: 1.5, winRate: 44, playtime: 38, value: 40 },
  { game: 'CryptoLegends', kd: 1.2, winRate: 43, playtime: 25, value: 25 },
];

const recentMatchesData = [
  { match: 'Match 1', result: 'win', score: 120, reward: 35 },
  { match: 'Match 2', result: 'loss', score: 85, reward: 10 },
  { match: 'Match 3', result: 'win', score: 150, reward: 45 },
  { match: 'Match 4', result: 'win', score: 110, reward: 30 },
  { match: 'Match 5', result: 'loss', score: 70, reward: 8 },
  { match: 'Match 6', result: 'win', score: 130, reward: 38 },
];

const achievementData = [
  { name: 'CryptoQuest', completed: 18, total: 30 },
  { name: 'MetaRacer', completed: 12, total: 25 },
  { name: 'BlockFighters', completed: 9, total: 20 },
  { name: 'CryptoLegends', completed: 5, total: 15 },
];

const playerAttributes = [
  { subject: 'Attack', cryptoQuest: 80, metaRacer: 30, blockFighters: 90, cryptoLegends: 65 },
  { subject: 'Defense', cryptoQuest: 70, metaRacer: 40, blockFighters: 65, cryptoLegends: 60 },
  { subject: 'Speed', cryptoQuest: 60, metaRacer: 95, blockFighters: 70, cryptoLegends: 40 },
  { subject: 'Strategy', cryptoQuest: 85, metaRacer: 60, blockFighters: 45, cryptoLegends: 80 },
  { subject: 'Teamwork', cryptoQuest: 65, metaRacer: 30, blockFighters: 40, cryptoLegends: 70 },
  { subject: 'Consistency', cryptoQuest: 75, metaRacer: 80, blockFighters: 50, cryptoLegends: 65 },
];

const COLORS = ['#6366F1', '#2DD4BF', '#F97316', '#8B5CF6'];

const GameStats: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState(gameStatsList[0]);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white font-['Chakra_Petch']">Game Statistics</h1>
          <p className="text-neutral-400 mt-1">Track your performance and achievements across games</p>
        </div>
        
        <div className="relative">
          <label className="sr-only">Select Game</label>
          <div className="relative">
            <select
              value={selectedGame.gameId}
              onChange={(e) => setSelectedGame(gameStatsList.find(game => game.gameId === e.target.value) || gameStatsList[0])}
              className="appearance-none bg-neutral-800 rounded-lg border border-neutral-700 pl-12 pr-10 py-2 text-sm text-neutral-200 w-full md:w-48 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              {gameStatsList.map(game => (
                <option key={game.gameId} value={game.gameId}>{game.gameName}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img 
                src={selectedGame.logo}
                alt={selectedGame.gameName}
                className="h-6 w-6 rounded object-cover"
              />
            </div>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="card"
        >
          <div className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary-900 bg-opacity-30 text-primary-400">
              <Trophy size={20} />
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Global Rank</p>
              <h3 className="text-2xl font-bold text-white">{selectedGame.stats.rank?.toLocaleString()}</h3>
              <p className="text-xs text-neutral-300 mt-1">
                Top {Math.round((selectedGame.stats.rank || 0) / 10000 * 100)}% of players
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="card"
        >
          <div className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-full bg-green-900 bg-opacity-30 text-green-400">
              <Star size={20} />
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Level</p>
              <h3 className="text-2xl font-bold text-white">{selectedGame.stats.level}</h3>
              <p className="text-xs text-neutral-300 mt-1">
                {selectedGame.stats.experience?.toLocaleString()} XP total
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="card"
        >
          <div className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-full bg-yellow-900 bg-opacity-30 text-yellow-400">
              <Swords size={20} />
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Win Rate</p>
              <h3 className="text-2xl font-bold text-white">
                {Math.round((selectedGame.stats.wins || 0) / ((selectedGame.stats.wins || 0) + (selectedGame.stats.losses || 0)) * 100)}%
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                {selectedGame.stats.wins} W - {selectedGame.stats.losses} L
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="card"
        >
          <div className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-full bg-purple-900 bg-opacity-30 text-purple-400">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Playtime</p>
              <h3 className="text-2xl font-bold text-white">{selectedGame.stats.playtime} hrs</h3>
              <p className="text-xs text-neutral-300 mt-1">
                Last played 2 days ago
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="card"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Performance Overview</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={playerAttributes}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94A3B8' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94A3B8' }} />
                  <Radar
                    name={selectedGame.gameName}
                    dataKey={selectedGame.gameName.replace(/\s+/g, '').toLowerCase()}
                    stroke={COLORS[0]}
                    fill={COLORS[0]}
                    fillOpacity={0.2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: 'none', 
                      borderRadius: '0.5rem',
                      color: '#F1F5F9'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="card"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Matches</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={recentMatchesData}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="match" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: 'none', 
                      borderRadius: '0.5rem',
                      color: '#F1F5F9'
                    }}
                  />
                  <Bar 
                    dataKey="score" 
                    name="Score" 
                    fill={COLORS[0]} 
                    radius={[4, 4, 0, 0]} 
                  />
                  <Bar 
                    dataKey="reward" 
                    name="Reward" 
                    fill={COLORS[1]} 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="card lg:col-span-2"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Achievement Progress</h2>
            <div className="space-y-4">
              {achievementData.map((game, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={gameStatsList.find(g => g.gameName === game.name)?.logo || ''}
                      alt={game.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-medium">{game.name}</h3>
                      <span className="text-sm text-neutral-400">{game.completed}/{game.total}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                        style={{ width: `${(game.completed / game.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="card"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((achievement) => (
                <div key={achievement} className="flex items-start gap-3 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
                  <div className="p-2 rounded-lg bg-neutral-800 text-primary-400">
                    <Trophy size={16} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Achievement {achievement}</h3>
                    <p className="text-sm text-neutral-400 mt-0.5">Earned 3 days ago</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-neutral-300">Reward:</span>
                      <span className="text-xs text-primary-400">+{50 * achievement} XP</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className="card"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Compare Game Performance</h2>
            <select className="bg-neutral-800 border border-neutral-700 text-neutral-300 rounded-md text-sm p-1.5">
              <option value="winRate">Win Rate</option>
              <option value="playtime">Playtime</option>
              <option value="kd">K/D Ratio</option>
            </select>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="game" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: 'none', 
                    borderRadius: '0.5rem',
                    color: '#F1F5F9'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="winRate" 
                  name="Win Rate (%)" 
                  fill={COLORS[0]} 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar 
                  dataKey="playtime" 
                  name="Playtime (hrs)" 
                  fill={COLORS[1]} 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar 
                  dataKey="kd" 
                  name="K/D Ratio" 
                  fill={COLORS[2]} 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameStats;
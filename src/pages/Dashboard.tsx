import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Trophy, TowerControl as GameController, CreditCard, ChevronRight, Clock } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { 
  LineChart, 
  Line, 
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
  Legend
} from 'recharts';
import EarningsOverview from '../components/dashboard/EarningsOverview';
import RecentActivity from '../components/dashboard/RecentActivity';

const COLORS = ['#6366F1', '#2DD4BF', '#F97316', '#8B5CF6'];

// Sample data
const earningsData = [
  { name: 'Jan', earnings: 23 },
  { name: 'Feb', earnings: 35 },
  { name: 'Mar', earnings: 45 },
  { name: 'Apr', earnings: 30 },
  { name: 'May', earnings: 55 },
  { name: 'Jun', earnings: 40 },
  { name: 'Jul', earnings: 65 },
];

const gamePerformanceData = [
  { name: 'CryptoQuest', value: 45 },
  { name: 'MetaRacer', value: 25 },
  { name: 'BlockFighters', value: 20 },
  { name: 'CryptoLegends', value: 10 },
];

const Dashboard: React.FC = () => {
  const { isConnected, connectWallet } = useWallet();

  const statCards = [
    { 
      title: 'Total Earnings', 
      value: '$1,245.89', 
      change: '+12.5%', 
      icon: <TrendingUp size={20} className="text-green-500" />,
      color: 'from-green-500/20 to-green-600/20'
    },
    { 
      title: 'Play Time', 
      value: '45.5 hrs', 
      change: '+5.2%', 
      icon: <Clock size={20} className="text-primary-500" />,
      color: 'from-primary-500/20 to-primary-600/20'
    },
    { 
      title: 'Achievements', 
      value: '24/50', 
      change: 'Level 12', 
      icon: <Trophy size={20} className="text-yellow-500" />,
      color: 'from-yellow-500/20 to-yellow-600/20'
    },
    { 
      title: 'NFT Assets', 
      value: '12', 
      change: '~$890.50', 
      icon: <CreditCard size={20} className="text-purple-500" />,
      color: 'from-purple-500/20 to-purple-600/20'
    },
  ];

  return (
    <div className="space-y-6">
      {!isConnected && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-lg p-6 shadow-xl mb-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">Connect your wallet to start</h2>
              <p className="text-neutral-400">Track your P2E earnings, manage your assets, and more.</p>
            </div>
            <button 
              onClick={connectWallet} 
              className="btn btn-primary py-2.5 px-5"
            >
              <Wallet size={18} />
              Connect Wallet
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="card glow-effect"
          >
            <div className={`p-6 relative bg-gradient-to-br ${stat.color}`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-neutral-400 text-sm mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-xs text-neutral-300 mt-1">{stat.change}</p>
                </div>
                <div className="p-2.5 rounded-full bg-neutral-800 bg-opacity-50">
                  {stat.icon}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="card col-span-1 lg:col-span-2"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Earnings Overview</h2>
              <select className="bg-neutral-800 border border-neutral-700 text-neutral-300 rounded-md text-sm p-1.5">
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="3months">Last 3 months</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={earningsData}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: 'none', 
                      borderRadius: '0.5rem',
                      color: '#F1F5F9'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="earnings" 
                    name="Earnings ($)" 
                    stroke="#6366F1" 
                    strokeWidth={3} 
                    dot={{ stroke: '#6366F1', strokeWidth: 2, r: 4, fill: '#030712' }} 
                    activeDot={{ stroke: '#6366F1', strokeWidth: 2, r: 6, fill: '#030712' }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="card"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Game Performance</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gamePerformanceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    innerRadius={50}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {gamePerformanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: 'none', 
                      borderRadius: '0.5rem',
                      color: '#F1F5F9'
                    }}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsOverview />
        <RecentActivity />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="card"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Popular Games</h2>
            <a href="#" className="text-primary-400 hover:text-primary-300 text-sm flex items-center">
              View All <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((game) => (
              <div key={game} className="rounded-lg bg-neutral-800 overflow-hidden">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/${16165140 + game * 1}/pexels-photo-${16165140 + game * 1}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt="Game" 
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded bg-neutral-700 flex items-center justify-center">
                      <GameController size={16} className="text-primary-400" />
                    </div>
                    <h3 className="font-semibold text-white">Game {game}</h3>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">
                      Players: {(12000 + game * 1000).toLocaleString()}
                    </span>
                    <span className="badge badge-primary">
                      Ethereum
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CreditCard, Wallet, Trophy, Gamepad2 } from 'lucide-react';

const activityData = [
  {
    type: 'nft_mint',
    title: 'Minted "Dragon Slayer Sword"',
    game: 'CryptoQuest',
    time: '2 hours ago',
    value: '$89.20',
    icon: <CreditCard size={16} className="text-purple-400" />,
    iconBg: 'bg-purple-500/20'
  },
  {
    type: 'earnings',
    title: 'Tournament Earnings',
    game: 'BlockFighters',
    time: '5 hours ago',
    value: '$45.75',
    icon: <Wallet size={16} className="text-green-400" />,
    iconBg: 'bg-green-500/20'
  },
  {
    type: 'achievement',
    title: 'Unlocked "Speed Demon"',
    game: 'MetaRacer',
    time: '1 day ago',
    value: '50 XP',
    icon: <Trophy size={16} className="text-yellow-400" />,
    iconBg: 'bg-yellow-500/20'
  },
  {
    type: 'game_start',
    title: 'Started playing',
    game: 'CryptoLegends',
    time: '2 days ago',
    value: '',
    icon: <Gamepad2 size={16} className="text-blue-400" />,
    iconBg: 'bg-blue-500/20'
  }
];

const RecentActivity: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="card"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          <a href="#" className="text-primary-400 hover:text-primary-300 text-sm flex items-center">
            View All <ArrowUpRight size={14} className="ml-1" />
          </a>
        </div>
        <div className="space-y-4">
          {activityData.map((activity, index) => (
            <div key={index} className="flex items-center p-3 hover:bg-neutral-800 rounded-lg transition-colors">
              <div className={`h-8 w-8 rounded-lg ${activity.iconBg} flex items-center justify-center flex-shrink-0`}>
                {activity.icon}
              </div>
              <div className="ml-3 flex-grow">
                <h3 className="text-white font-medium">{activity.title}</h3>
                <div className="flex items-center text-xs text-neutral-400 mt-1">
                  <span>{activity.game}</span>
                  <span className="mx-1">•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
              {activity.value && (
                <div className="text-right">
                  <div className="text-white font-medium">{activity.value}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RecentActivity;
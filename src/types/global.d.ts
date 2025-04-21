interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    request: (request: { method: string; params?: any[] }) => Promise<any>;
    on: (eventName: string, callback: (...args: any[]) => void) => void;
    removeListener: (eventName: string, callback: (...args: any[]) => void) => void;
  };
}

interface Asset {
  id: string;
  name: string;
  type: 'token' | 'nft';
  image: string;
  value: number;
  gameId: string;
  quantity?: number;
  rarity?: string;
  attributes?: {
    [key: string]: string | number;
  };
}

interface Game {
  id: string;
  name: string;
  logo: string;
  description: string;
  totalPlayers: number;
  chain: string;
}

interface TokenBalance {
  symbol: string;
  name: string;
  balance: string;
  usdValue: number;
  change24h: number;
  tokenAddress: string;
  logoUrl: string;
}

interface GameStat {
  gameId: string;
  gameName: string;
  logo: string;
  stats: {
    rank?: number;
    wins?: number;
    losses?: number;
    killDeathRatio?: number;
    playtime?: number;
    level?: number;
    experience?: number;
    achievements?: number;
  };
}

interface MarketplaceItem {
  id: string;
  name: string;
  type: 'token' | 'nft';
  image: string;
  price: number;
  currency: string;
  seller: string;
  game: string;
  rarity?: string;
  attributes?: {
    [key: string]: string | number;
  };
}

interface EarningData {
  date: string;
  amount: number;
  game: string;
}
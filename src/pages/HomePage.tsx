import React, { useState } from 'react';
import { Search, Settings, Zap, ArrowUpRight, ArrowDownLeft, ArrowRightLeft, Plus, Home, TrendingUp, Clock, Bookmark } from 'lucide-react';

export default function HomePage({ setCurrentPage, setSelectedCrypto }) {
  const [activeTab, setActiveTab] = useState('crypto');

  const cryptoList = [
    { id: 1, name: 'BNB Smart Chain', ticker: 'BNB', amount: 0, usdAmount: '$0.00', icon: '🟡', chain: 'BNB Smart Chain' },
    { id: 2, name: 'Tron', ticker: 'TRX', amount: 0, usdAmount: '$0.00', icon: '🔴', chain: 'Tron' },
  ];

  const bottomCryptos = [
    { id: 'btc', name: 'Bitcoin', ticker: 'BTC', icon: '🟠', vol: '$...' },
    { id: 'sol', name: 'Solana', ticker: 'SOL', icon: '🟦', vol: '$877.8K Vol' },
    { id: 'eth', name: 'Ethereum', ticker: 'ETH', icon: '🟦', vol: '$315.9K Vol' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 rounded border border-gray-600 flex items-center justify-center text-xs">📱</div>
          <div className="flex-1 mx-3 bg-gray-800 rounded-full px-4 py-2 text-sm text-gray-400">Search</div>
          <Settings size={20} />
        </div>

        {/* Wallet Section */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-gray-700"></div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">▶</span>
            <span className="font-medium">Main Wallet 1</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-red-500 ml-auto"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-3">
          {[
            { icon: Plus, label: 'Buy' },
            { icon: ArrowRightLeft, label: 'Swap' },
            { icon: ArrowDownLeft, label: 'Receive', action: 'receive' },
            { icon: ArrowUpRight, label: 'Send' },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={() => btn.action === 'receive' && (setCurrentPage('receive'), setSelectedCrypto(null))}
              className="flex-1 bg-gray-800 hover:bg-gray-700 rounded-xl py-3 flex flex-col items-center justify-center space-y-1 transition"
            >
              <btn.icon size={24} />
              <span className="text-xs font-medium">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold">Hyperliquid live with 200+ markets, 0% markup on</p>
            <p className="text-xs mt-1">→ Explore now</p>
          </div>
          <div className="text-2xl">💎</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 px-4 border-b border-gray-700 mt-4">
        {[
          { id: 'watchlist', icon: Bookmark, label: 'Watchlist' },
          { id: 'crypto', icon: TrendingUp, label: 'Crypto' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-1 pb-3 text-sm font-medium transition ${
              activeTab === tab.id ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'
            }`}
          >
            <tab.icon size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Crypto List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {cryptoList.map((crypto) => (
          <div key={crypto.id} className="flex items-center justify-between py-2 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{crypto.icon}</div>
              <div>
                <p className="font-semibold text-sm">{crypto.name}</p>
                <p className="text-xs text-gray-500">{crypto.ticker} {crypto.amount}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm">{crypto.usdAmount}</p>
              <p className="text-xs text-gray-500">$,..</p>
            </div>
          </div>
        ))}

        <p className="text-xs text-gray-500 py-2">Perps ▶</p>

        {/* Bottom Crypto Row */}
        <div className="flex gap-3 py-4">
          {bottomCryptos.map((crypto) => (
            <div key={crypto.id} className="flex-1 bg-gray-800 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">{crypto.icon}</div>
              <p className="text-xs font-medium">{crypto.ticker}</p>
              <p className="text-xs text-gray-400 mt-1">{crypto.vol}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-900 border-t border-gray-800 flex justify-around items-center px-4 py-3">
        <button className="flex flex-col items-center space-y-1">
          <div className="text-lg">⋯</div>
          <span className="text-xs text-gray-400">Discover</span>
        </button>
        <button className="flex flex-col items-center space-y-1">
          <Bookmark size={18} />
          <span className="text-xs text-gray-400">Perps</span>
        </button>
        <button className="flex flex-col items-center space-y-1 bg-green-500 rounded-full p-3">
          <ArrowRightLeft size={20} className="text-black" />
        </button>
        <button className="flex flex-col items-center space-y-1">
          <TrendingUp size={18} />
          <span className="text-xs text-gray-400">Markets</span>
        </button>
        <button className="flex flex-col items-center space-y-1">
          <Home size={18} className="text-green-500" />
          <span className="text-xs text-green-500">Home</span>
        </button>
      </div>
    </div>
  );
}

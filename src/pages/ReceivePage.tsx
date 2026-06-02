import React, { useState } from 'react';
import { ArrowLeft, Search, Copy, Zap } from 'lucide-react';

export default function ReceivePage({ setCurrentPage, selectedCrypto }) {
  const [copied, setCopied] = useState(false);

  const cryptoOptions = [
    { id: 'btc', name: 'Bitcoin', ticker: 'BTC', icon: '🟠', chain: 'Bitcoin', address: 'bc1qj09...h7qxmq' },
    { id: 'trx', name: 'Tron', ticker: 'TRX', icon: '🔴', chain: 'Tron', address: '0x6860...562489' },
    { id: 'bnb', name: 'BNB', ticker: 'BNB', icon: '🟡', chain: 'BNB Smart Chain', address: '0x6860...562489' },
    { id: 'eth', name: 'Ethereum', ticker: 'ETH', icon: '🟦', chain: 'Ethereum', address: '0x6860...562489' },
    { id: 'sol', name: 'Solana', ticker: 'SOL', icon: '🟦', chain: 'Solana', address: 'Fr9p95c...hvGHb1' },
    { id: 'usdt', name: 'USDT', ticker: 'USDT', icon: '💚', chain: 'Ethereum', address: '0x6860...562489' },
    { id: 'usdc', name: 'USDC', ticker: 'USDC', icon: '🔵', chain: 'Ethereum', address: '0x6860...562489' },
    { id: 'at', name: 'AT', ticker: 'AT', icon: '🟢', chain: 'Ethereum', address: '0x6860...562489' },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between border-b border-gray-800">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold flex-1 text-center">Receive</h1>
        <div className="w-6"></div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 text-sm outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Crypto Filter Tabs */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto pb-2">
        {[
          { icon: '🟦', label: 'BTC' },
          { icon: '🛡️', label: 'Zero' },
          { icon: '🔴', label: 'TRX' },
          { icon: '🟡', label: 'BNB' },
          { icon: '🟦', label: 'SOL' },
          { icon: '🟦', label: 'ETH' },
          { icon: '🟠', label: 'BTC' },
          { icon: '🔵', label: 'All' },
        ].map((item, i) => (
          <button
            key={i}
            className={`flex-shrink-0 rounded-lg p-2 text-lg font-semibold transition ${
              item.label === 'All' ? 'bg-green-500 text-black border-2 border-green-400' : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Popular Label */}
      <div className="px-4 py-2 text-sm font-semibold text-gray-400">Popular</div>

      {/* Crypto List */}
      <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-4">
        {cryptoOptions.map((crypto) => (
          <div
            key={crypto.id}
            className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 hover:bg-opacity-30 p-2 rounded transition cursor-pointer"
          >
            {/* Left Section */}
            <div className="flex items-center space-x-3 flex-1">
              <div className="text-2xl">{crypto.icon}</div>
              <div className="flex-1">
                <p className="font-semibold text-sm">{crypto.name}</p>
                <p className="text-xs text-gray-400">{crypto.ticker}</p>
                <p className="text-xs text-gray-500 mt-1">{crypto.address}</p>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="bg-gray-800 hover:bg-gray-700 rounded p-2 transition"
                title="Copy address"
              >
                <Copy size={16} />
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-700 rounded p-2 transition"
                title="Show QR code"
              >
                <Zap size={16} />
              </button>
            </div>
          </div>
        ))}

        {/* All Crypto Label */}
        <div className="py-4 text-sm font-semibold text-gray-400">All crypto</div>
      </div>

      {/* Copy Feedback */}
      {copied && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-2 rounded-lg text-sm font-semibold">
          ✓ Copied!
        </div>
      )}
    </div>
  );
}

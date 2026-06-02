import React, { useState } from 'react';
import { Search, Settings, Zap, ArrowUpRight, ArrowDownLeft, ArrowRightLeft, Plus } from 'lucide-react';
import HomePage from './pages/HomePage';
import ReceivePage from './pages/ReceivePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  return (
    <div className="w-full max-w-md mx-auto bg-[#0f1419] text-white font-sans h-screen flex flex-col overflow-hidden">
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} setSelectedCrypto={setSelectedCrypto} />}
      {currentPage === 'receive' && <ReceivePage setCurrentPage={setCurrentPage} selectedCrypto={selectedCrypto} />}
    </div>
  );
}

import React from 'react';
import { Search, Command } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-100">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-sm text-gray-500">
          <Command size={16} />
          <span>+ F</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>18 Oct 2024 - 18 Nov 2024</span>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
        <button className="text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
          Export
        </button>
      </div>
    </div>
  );
}
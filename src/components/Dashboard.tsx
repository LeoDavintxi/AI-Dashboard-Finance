import React from 'react';
import { Plus, ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { date: '18 Oct', income: 5000, expense: -2000 },
  { date: '25 Oct', income: 7500, expense: -3500 },
  { date: '2 Nov', income: 4500, expense: -1500 },
  { date: '9 Nov', income: 6000, expense: -2500 },
  // Add more data points as needed
];

export default function Dashboard() {
  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="bg-teal-700 rounded-xl p-6 text-white mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm opacity-80 mb-1">Total Balance</div>
            <div className="text-3xl font-semibold">€ 320.845,20</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-lg flex items-center gap-2">
              <Plus size={20} />
              Add
            </button>
            <button className="bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-lg">Send</button>
            <button className="bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-lg">Request</button>
          </div>
        </div>
        <div className="text-sm opacity-80">
          <span className="text-emerald-400">↑ 15.8%</span> vs last month
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">Cash Flow</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="bg-teal-700 text-white px-4 py-1 rounded-lg text-sm">Weekly</button>
              <button className="text-gray-500 px-4 py-1 rounded-lg text-sm hover:bg-gray-50">Daily</button>
            </div>
            <button className="text-gray-500 hover:bg-gray-50 px-3 py-1 rounded-lg">Manage</button>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Bar dataKey="income" fill="#0F766E" />
              <Bar dataKey="expense" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Income</span>
              <ArrowUpRight className="text-emerald-500" size={20} />
            </div>
            <div className="text-xl font-semibold">€ 12.378,20</div>
            <div className="text-sm text-emerald-500">↑ 45.0%</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Expense</span>
              <ArrowDownRight className="text-red-500" size={20} />
            </div>
            <div className="text-xl font-semibold">€ 5.788,21</div>
            <div className="text-sm text-red-500">↓ 15.5%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6">
          <div className="text-sm text-gray-500 mb-2">Business account</div>
          <div className="text-xl font-semibold mb-1">€ 8.672,20</div>
          <div className="text-sm text-emerald-500">↑ 16.0%</div>
          <div className="text-xs text-gray-400 mt-1">vs. 7,120.14 Last Period</div>
        </div>
        <div className="bg-white rounded-xl p-6">
          <div className="text-sm text-gray-500 mb-2">Total Saving</div>
          <div className="text-xl font-semibold mb-1">€ 3.765,35</div>
          <div className="text-sm text-red-500">↓ 8.2%</div>
          <div className="text-xs text-gray-400 mt-1">vs. 4,116.50 Last Period</div>
        </div>
        <div className="bg-white rounded-xl p-6">
          <div className="text-sm text-gray-500 mb-2">Tax Reserve</div>
          <div className="text-xl font-semibold mb-1">€ 14.376,16</div>
          <div className="text-sm text-emerald-500">↑ 35.2%</div>
          <div className="text-xs text-gray-400 mt-1">vs. 10,536.46 Last Period</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold">Recent Activity</h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:bg-gray-50 px-3 py-1 rounded-lg">
              <Filter size={16} />
              Filter
            </button>
            <button className="text-gray-500 hover:bg-gray-50 px-3 py-1 rounded-lg">Sort</button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-4">TYPE</th>
              <th className="pb-4">AMOUNT</th>
              <th className="pb-4">STATUS</th>
              <th className="pb-4">METHOD</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-100">
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <Plus className="text-emerald-500" size={20} />
                  <div>
                    <div>Theo Lawrence</div>
                    <div className="text-sm text-gray-500">Add • Oct 18, 2024</div>
                  </div>
                </div>
              </td>
              <td>€ 500.00</td>
              <td><span className="text-emerald-500">Success</span></td>
              <td>Credit Card •••• 5640</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
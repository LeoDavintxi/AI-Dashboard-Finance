import React from 'react';
import { LayoutDashboard, CreditCard, FileText, Wallet, PieChart, Settings, HelpCircle, Building2, ScrollText, ChevronDown } from 'lucide-react';

const menuItems = [
  { section: 'GENERAL', items: [
    { icon: LayoutDashboard, text: 'Dashboard', active: true },
    { icon: CreditCard, text: 'Payment' },
    { icon: FileText, text: 'Transaction' },
    { icon: CreditCard, text: 'Cards', hasSubmenu: true }
  ]},
  { section: 'SUPPORT', items: [
    { icon: Building2, text: 'Capital' },
    { icon: Wallet, text: 'Vaults' },
    { icon: ScrollText, text: 'Reports' },
    { icon: PieChart, text: 'Earn', badge: '€150' }
  ]}
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-6 h-6 bg-teal-700 rounded"></div>
        <span className="text-lg font-semibold">Sequence</span>
      </div>
      
      <div className="flex-1">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-8">
            <div className="text-xs text-gray-400 mb-4">{section.section}</div>
            {section.items.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className={`flex items-center justify-between p-3 rounded-lg mb-1 ${
                  item.active ? 'bg-teal-700 text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </div>
                {item.hasSubmenu && <ChevronDown size={16} />}
                {item.badge && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-6 space-y-4">
        <div className="flex items-center justify-between text-gray-600 p-3 hover:bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 p-3 hover:bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <HelpCircle size={20} />
            <span>Help</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div>
              <div className="text-sm font-medium">Young Alaska</div>
              <div className="text-xs text-gray-400">alaska@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
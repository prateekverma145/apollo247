import React from 'react';

const NavLinks = () => {
  const navItems = [
    { name: 'Buy Medicines', link: '#' },
    { name: 'Find Doctors', link: '#', active: true },
    { name: 'Lab Tests', link: '#' },
    { name: 'Circle Membership', link: '#' },
    { name: 'Health Records', link: '#' },
    { name: 'Diabetes Reversal', link: '#' },
    { name: 'Buy Insurance', link: '#', isNew: true },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 overflow-x-auto pb-2 pt-3 no-scrollbar">
          {navItems.map((item, index) => (
            <li key={index} className={`whitespace-nowrap ${item.active ? 'text-primary border-b-2 border-primary pb-2' : ''}`}>
              <a href={item.link} className="text-sm font-medium flex items-center">
                {item.name}
                {item.isNew && (
                  <span className="ml-1 bg-green-500 text-white text-xs rounded px-1">New</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks; 
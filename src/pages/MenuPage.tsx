import React from 'react';
import MenuSection from '../components/MenuSection';

const MenuPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-neutral-900 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Menu</h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto px-6">
          Explore our wide range of artisan coffee, delicious desserts, and healthy snacks.
        </p>
      </div>
      <MenuSection />
    </div>
  );
};

export default MenuPage;

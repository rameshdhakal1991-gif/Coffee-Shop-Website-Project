import React from 'react';
import { motion } from 'motion/react';
import { Plus, ShoppingCart, Star } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  item: MenuItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      style: {
        borderRadius: '12px',
        background: '#1a1a1a',
        color: '#fff',
      },
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 dark:border-neutral-800"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-amber-600">
          <Star size={12} className="fill-amber-600" /> 4.9
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-700 transition-colors">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-amber-700">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            {item.category}
          </span>
          <button
            onClick={handleAddToCart}
            className="p-3 bg-neutral-900 dark:bg-amber-700 text-white rounded-2xl hover:bg-amber-700 dark:hover:bg-amber-800 transition-all active:scale-90 flex items-center gap-2 group/btn"
          >
            <Plus size={20} className="group-hover/btn:rotate-90 transition-transform" />
            <ShoppingCart size={18} className="hidden group-hover/btn:block" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

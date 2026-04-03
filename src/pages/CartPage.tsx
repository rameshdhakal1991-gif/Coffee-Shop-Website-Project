import React from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-8 text-neutral-400">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mb-10 max-w-sm">
          Looks like you haven't added anything yet. Explore our menu to find your perfect brew.
        </p>
        <Link
          to="/menu"
          className="px-8 py-4 bg-amber-700 text-white font-bold rounded-2xl hover:bg-amber-800 transition-all flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-12">Your Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-neutral-900 p-6 rounded-[32px] shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{item.name}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-2">{item.category}</p>
                  <span className="text-amber-700 font-bold">${item.price.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-4 bg-neutral-50 dark:bg-neutral-800 p-2 rounded-2xl">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-white dark:hover:bg-neutral-700 rounded-xl transition-all text-neutral-600 dark:text-neutral-300"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-8 text-center font-bold dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-white dark:hover:bg-neutral-700 rounded-xl transition-all text-neutral-600 dark:text-neutral-300"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition-colors p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white dark:bg-neutral-900 p-8 rounded-[40px] shadow-2xl border border-neutral-100 dark:border-neutral-800 sticky top-32">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t dark:border-neutral-800 flex justify-between text-xl font-bold text-neutral-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-amber-700">${(totalPrice * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-amber-700/20">
                Checkout Now <CreditCard size={20} />
              </button>

              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/20">
                <p className="text-xs text-amber-800 dark:text-amber-400 text-center font-medium">
                  Earn <span className="font-bold">{(totalPrice * 10).toFixed(0)}</span> points with this order!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

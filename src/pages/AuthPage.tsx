import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 px-6">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row bg-white dark:bg-neutral-900 rounded-[40px] shadow-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800">
        {/* Left Side - Image/Info */}
        <div className="hidden lg:block w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
            alt="Coffee"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-amber-900/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 p-16 flex flex-col justify-end text-white">
            <h2 className="text-4xl font-bold mb-6">Join the Brew Haven Community</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Unlock exclusive rewards, track your orders, and get early access to our new seasonal blends.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">Join 25k+ coffee lovers</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-16">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400">
                {isLogin ? 'Enter your details to access your account' : 'Start your coffee journey with us today'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 dark:border-neutral-700 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all dark:text-white font-medium">
                <Chrome size={18} /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 dark:border-neutral-700 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all dark:text-white font-medium">
                <Github size={18} /> GitHub
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200 dark:border-neutral-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-neutral-900 px-4 text-neutral-500">Or continue with email</span>
              </div>
            </div>

            <form className="space-y-6">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-2">
                  <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300">Password</label>
                  {isLogin && (
                    <a href="#" className="text-xs font-bold text-amber-700 hover:text-amber-800">Forgot password?</a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-amber-700/20"
              >
                {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={20} />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-neutral-500 dark:text-neutral-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-amber-700 font-bold hover:text-amber-800"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

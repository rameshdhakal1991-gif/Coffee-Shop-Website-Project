import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-amber-500 uppercase bg-amber-500/10 border border-amber-500/20 rounded-full">
              Premium Coffee Experience
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Your Perfect <span className="text-amber-500">Morning Ritual</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-xl leading-relaxed">
              Experience the finest artisanal coffee, hand-roasted beans, and a cozy atmosphere designed for your comfort.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                Explore Menu <ArrowRight size={20} />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md flex items-center justify-center gap-2 transition-all border border-white/20">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Play size={14} className="fill-white ml-0.5" />
                </div>
                Our Story
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-neutral-900"
                />
              ))}
            </div>
            <div className="text-neutral-300 text-sm">
              <span className="text-amber-500 font-bold">2.5k+</span> Happy Coffee Lovers
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

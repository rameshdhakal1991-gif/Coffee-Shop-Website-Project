import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-neutral-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-500 font-bold tracking-widest uppercase text-sm"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8"
            >
              What Our <span className="text-amber-500">Coffee Lovers</span> Say
            </motion.h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-md">
              We take pride in every cup we serve. Here is what our community has to say about their experience at Brew Haven.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 relative"
              >
                <Quote className="absolute top-8 right-8 text-amber-500/20" size={80} />
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={TESTIMONIALS[currentIndex].image}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-amber-500 text-sm">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < TESTIMONIALS[currentIndex].rating ? 'fill-amber-500 text-amber-500' : 'text-neutral-600'}
                    />
                  ))}
                </div>

                <p className="text-neutral-300 text-xl italic leading-relaxed">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

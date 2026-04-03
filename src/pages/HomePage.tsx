import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import ReservationForm from '../components/ReservationForm';
import { motion } from 'motion/react';
import { Coffee, Award, Users, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { icon: Coffee, label: 'Cups Served', value: '150k+' },
    { icon: Award, label: 'Awards Won', value: '12' },
    { icon: Users, label: 'Happy Customers', value: '25k+' },
    { icon: Zap, label: 'Coffee Blends', value: '45' },
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-neutral-900 border-y dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-700">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MenuSection />
      
      {/* Featured Section */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-700/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                  alt="Coffee Brewing"
                  className="rounded-[60px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 bg-amber-700 p-10 rounded-[40px] shadow-2xl hidden md:block">
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-amber-200">Organic Beans</p>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Our Quality</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-tight">
                Freshly Roasted <span className="text-amber-500">Every Morning</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                We source our beans directly from sustainable farms across Ethiopia, Colombia, and Brazil. Each batch is roasted in small quantities to ensure the perfect flavor profile.
              </p>
              <ul className="space-y-6">
                {['Direct Trade Sourcing', 'Small Batch Roasting', 'Expert Baristas', 'Sustainable Packaging'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-neutral-900">
                      <Zap size={14} className="fill-neutral-900" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <BlogSection />
      <ReservationForm />
    </div>
  );
};

export default HomePage;

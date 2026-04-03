import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-amber-700 rounded-lg">
                <Coffee className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Brew<span className="text-amber-700">Haven</span>
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed">
              Crafting premium coffee experiences since 2010. We believe every cup tells a story of passion, quality, and community.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Reservations', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-neutral-400">
                <MapPin className="text-amber-700 shrink-0" size={20} />
                <span>123 Coffee Lane, Artisan District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400">
                <Phone className="text-amber-700 shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400">
                <Mail className="text-amber-700 shrink-0" size={20} />
                <span>hello@brewhaven.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-neutral-400 mb-6">Subscribe to get special offers and brewing tips.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-amber-700 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-6 bg-amber-700 rounded-xl hover:bg-amber-800 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>© 2024 Brew Haven Coffee Co. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.', {
      style: {
        borderRadius: '12px',
        background: '#1a1a1a',
        color: '#fff',
      },
    });
  };

  return (
    <div className="pt-20 bg-neutral-50 dark:bg-neutral-950 min-h-screen">
      <div className="bg-neutral-900 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto px-6">
          Have a question or feedback? We would love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm flex items-center justify-center text-amber-700 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Our Location</h4>
                    <p className="text-neutral-500 dark:text-neutral-400">123 Coffee Lane, Artisan District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm flex items-center justify-center text-amber-700 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Phone Number</h4>
                    <p className="text-neutral-500 dark:text-neutral-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm flex items-center justify-center text-amber-700 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Email Address</h4>
                    <p className="text-neutral-500 dark:text-neutral-400">hello@brewhaven.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                  <span>Monday - Friday</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                  <span>Saturday - Sunday</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-neutral-900 p-8 md:p-12 rounded-[40px] shadow-2xl border border-neutral-100 dark:border-neutral-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Subject</label>
                <input
                  required
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Message</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-amber-700/20"
              >
                Send Message <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[500px] bg-neutral-200 dark:bg-neutral-800 rounded-[60px] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-amber-700 mx-auto mb-4" />
              <p className="text-neutral-500 font-bold">Interactive Map Integration</p>
              <p className="text-neutral-400 text-sm">123 Coffee Lane, NY</p>
            </div>
          </div>
          {/* In a real app, you'd use Google Maps or Leaflet here */}
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920"
            alt="Map"
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

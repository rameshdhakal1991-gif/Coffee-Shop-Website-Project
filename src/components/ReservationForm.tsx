import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Send, CheckCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ReservationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success('Reservation request sent!', {
      style: {
        borderRadius: '12px',
        background: '#1a1a1a',
        color: '#fff',
      },
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 bg-white dark:bg-neutral-900 rounded-[40px] shadow-2xl border border-neutral-100 dark:border-neutral-800 p-12"
      >
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Reservation Confirmed!</h3>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-sm mx-auto">
          Thank you, {formData.name}. We have received your request for {formData.guests} guests on {formData.date} at {formData.time}.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-4 bg-amber-700 text-white font-bold rounded-2xl hover:bg-amber-800 transition-all"
        >
          Book Another Table
        </button>
      </motion.div>
    );
  }

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-700 font-bold tracking-widest uppercase text-sm"
            >
              Reservations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4 mb-8"
            >
              Book Your <span className="text-amber-700">Perfect Spot</span>
            </motion.h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-12 leading-relaxed">
              Whether it is a business meeting, a romantic date, or a quiet afternoon of work, we will make sure your table is ready.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm flex items-center justify-center text-amber-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">Opening Hours</h4>
                  <p className="text-neutral-500 dark:text-neutral-400">Mon - Fri: 7am - 9pm | Sat - Sun: 8am - 10pm</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm flex items-center justify-center text-amber-700">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">Private Events</h4>
                  <p className="text-neutral-500 dark:text-neutral-400">Host your special occasions with us. Up to 50 guests.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                    <input
                      required
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                    <input
                      required
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 ml-2">Special Requests</label>
                <textarea
                  rows={4}
                  placeholder="Any dietary requirements or special occasions?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 focus:ring-2 focus:ring-amber-700 outline-none transition-all dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-amber-700/20"
              >
                Confirm Reservation <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;

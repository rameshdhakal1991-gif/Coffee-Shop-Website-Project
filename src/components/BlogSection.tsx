import React from 'react';
import { motion } from 'motion/react';
import { BLOG_ARTICLES } from '../data/mockData';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-700 font-bold tracking-widest uppercase text-sm"
            >
              Our Journal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4"
            >
              Latest Stories from <span className="text-amber-700">Brew Haven</span>
            </motion.h2>
          </div>
          <Link
            to="/blog"
            className="px-8 py-4 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-bold rounded-2xl hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all flex items-center gap-2 group"
          >
            View All Posts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-700">
                  {article.category}
                </div>
              </div>

              <div className="flex items-center gap-6 mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} /> {article.author}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-amber-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <Link
                to={`/blog/${article.id}`}
                className="inline-flex items-center gap-2 text-amber-700 font-bold group-hover:gap-4 transition-all"
              >
                Read More <ArrowRight size={20} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

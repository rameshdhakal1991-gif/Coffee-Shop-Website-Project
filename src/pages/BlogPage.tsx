import React from 'react';
import BlogSection from '../components/BlogSection';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-neutral-900 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Journal</h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto px-6">
          Stay updated with the latest coffee trends, brewing tips, and stories from our community.
        </p>
      </div>
      <BlogSection />
    </div>
  );
};

export default BlogPage;

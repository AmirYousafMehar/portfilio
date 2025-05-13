'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const posts = getAllBlogPosts().slice(0, 3); // Only show the latest 3 posts

  return (
    <section id="blog" className="section bg-white dark:bg-dark-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="section-title">
            Latest <span className="text-primary-600">Articles</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Thoughts, insights, and tutorials about web development, design, and tech.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-outline">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container-custom py-16">
      <Link href="/#blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all posts
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <div className="relative w-full h-[40vh] rounded-xl overflow-hidden mb-12">
          <Image 
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="transition-transform duration-700 hover:scale-105"
          />
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
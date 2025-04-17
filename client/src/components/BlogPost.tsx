import React from 'react';
import { Link } from 'wouter';
import { CalendarIcon, ClockIcon, TagIcon } from 'lucide-react';
import { BlogPost as BlogPostType } from '../lib/types';

interface BlogPostProps {
  post: BlogPostType;
  featured?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, featured = false }) => {
  return (
    <article className={`bg-white rounded-lg overflow-hidden ${featured ? 'shadow-lg border border-primary/10' : 'shadow-md border border-gray-100'}`}>
      <div className="relative">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-56 object-cover"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center text-xs bg-primary/5 text-primary px-2 py-1 rounded">
              <TagIcon className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-xl font-bold mb-2 text-neutral-800 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            <a className="hover:text-primary transition-colors">{post.title}</a>
          </Link>
        </h3>
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-neutral-500 border-t border-gray-100 pt-4 mt-4">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
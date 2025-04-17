import React from 'react';
import { Link, useParams, useLocation } from 'wouter';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '../lib/data';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const [, setLocation] = useLocation();
  
  // Find the blog post based on the slug
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, redirect to blog page
  if (!post) {
    // In a real application, you would use a useEffect to handle this
    setTimeout(() => setLocation('/blog'), 0);
    return <div>Redirecting...</div>;
  }
  
  // Find related posts (same tags)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <button className="inline-flex items-center text-primary mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </button>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <img 
                  src={post.author.avatarUrl} 
                  alt={post.author.name}
                  className="h-8 w-8 rounded-full mr-2"
                />
                <div>
                  <span className="font-medium text-neutral-800">{post.author.name}</span>
                  <div className="text-xs text-neutral-500">{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-neutral-500" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-neutral-500" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h4 className="font-heading text-lg font-semibold mb-2">Categories:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link key={index} href={`/blog?tag=${tag}`}>
                    <a className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-neutral-700 transition-colors">
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading text-2xl font-bold mb-8 text-neutral-800">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <a>
                        <img 
                          src={relatedPost.imageUrl} 
                          alt={relatedPost.title} 
                          className="w-full h-48 object-cover"
                        />
                      </a>
                    </Link>
                    <div className="p-6">
                      <h3 className="font-heading text-lg font-bold mb-2 text-neutral-800 line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <a className="hover:text-primary transition-colors">{relatedPost.title}</a>
                        </Link>
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <a className="text-primary font-medium text-sm hover:underline">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4 text-neutral-800">Need Professional Equipment Erection Services?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact Sai Vinayaka Enterprises today to discuss your requirements and get expert solutions.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient group">
              <span className="inline-flex items-center">
                Contact Us Today
                <ArrowLeft className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
      
      {/* SEO structured data */}
      <div itemScope itemType="https://schema.org/BlogPosting" className="hidden">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="description" content={post.excerpt} />
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="image" content={post.imageUrl} />
        <div itemProp="author" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content={post.author.name} />
          <meta itemProp="jobTitle" content={post.author.role} />
        </div>
        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Sai Vinayaka Enterprises" />
          <meta itemProp="logo" content="/assets/logo.svg" />
        </div>
        <div itemProp="articleBody" className="hidden" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
};

export default BlogDetail;
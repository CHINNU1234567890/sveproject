import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../lib/data';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Extract all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();
  
  // Filter posts based on search and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = activeTag === null || post.tags.includes(activeTag);
    
    return matchesSearch && matchesTag;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-neutral-800">
              Industry Insights
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Expert articles about heavy equipment erection, safety protocols, and industry best practices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTag(null)}
              >
                All
              </Button>
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={activeTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {blogPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-6 text-neutral-800">Featured Article</h2>
              <BlogPost post={blogPosts[0]} featured={true} />
            </div>
          )}
        </div>
      </section>
      
      {/* All Articles */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold mb-6 text-neutral-800">Latest Articles</h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-neutral-700 mb-2">No articles found</h3>
              <p className="text-neutral-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {setSearchTerm(''); setActiveTag(null);}}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4 text-neutral-800">Have Equipment Erection Needs?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact Sai Vinayaka Enterprises today to discuss your heavy equipment erection requirements and get a customized solution.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient group">
              <span className="inline-flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
      
      {/* SEO section with structured data for blog */}
      <div itemScope itemType="https://schema.org/Blog" className="hidden">
        <meta itemProp="name" content="Sai Vinayaka Enterprises Blog - Heavy Equipment Erection Insights" />
        <meta itemProp="description" content="Expert articles about heavy equipment erection, safety protocols, and industry best practices." />
        {filteredPosts.map(post => (
          <div key={post.id} itemScope itemType="https://schema.org/BlogPosting">
            <meta itemProp="headline" content={post.title} />
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
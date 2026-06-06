import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

// Helper to parse markdown links [Text](Path) into React elements with dynamic React Router Links
function renderTextWithLinks(text: string) {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    const linkText = match[1];
    const linkPath = match[2];
    const isExternal = linkPath.startsWith('http') || linkPath.startsWith('mailto') || linkPath.startsWith('tel');

    if (isExternal) {
      parts.push(
        <a
          key={match.index}
          href={linkPath}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C9A96E] hover:text-[#FFFFFF] underline decoration-[#C9A96E] underline-offset-4 transition-colors font-bold"
        >
          {linkText}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={match.index}
          to={linkPath}
          className="text-[#C9A96E] hover:text-[#FFFFFF] underline decoration-[#C9A96E] underline-offset-4 transition-colors font-bold"
        >
          {linkText}
        </Link>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find((p) => p.slug === slug);

  // Auto scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Redirect to 404 if post not found
  useEffect(() => {
    if (!post) {
      navigate('/404', { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  // Find related posts (up to 3, excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Calculate approximate reading time (approx 200 words per minute)
  const totalWords = post.content.reduce((acc, block) => {
    if (block.text) acc += block.text.split(/\s+/).length;
    if (block.items) acc += block.items.join(' ').split(/\s+/).length;
    return acc;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(totalWords / 200));

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-[#FFFFFF]">
      <SEO 
        title={`${post.title} | Morphnex Blog`} 
        description={post.excerpt} 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C9A96E]/10 via-[#0F0F0F] to-[#0F0F0F] opacity-70"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#A0A0A0] hover:text-[#C9A96E] transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1.5 transition-transform" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <span className="inline-block bg-[rgba(255,255,255,0.03)] border border-[#C9A96E]/30 text-[#C9A96E] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1.5 mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-[1.1]">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#A0A0A0] uppercase tracking-widest pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-[#C9A96E]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#C9A96E]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#C9A96E]" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Article Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden w-full h-[24rem] md:h-[32rem] border border-[rgba(255,255,255,0.08)] mb-16 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              width={800}
              height={512}
              loading="eager"
              fetchpriority="high"
            />
          </motion.div>

          {/* Article Text Content */}
          <div className="prose prose-invert max-w-3xl mx-auto">
            {post.content.map((block, idx) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p 
                      key={idx} 
                      className="text-[#A0A0A0] text-base md:text-lg leading-relaxed font-medium mb-8"
                    >
                      {renderTextWithLinks(block.text || '')}
                    </p>
                  );
                case 'heading':
                  if (block.level === 3) {
                    return (
                      <h3 
                        key={idx} 
                        className="text-xl md:text-2xl font-black text-[#FFFFFF] mt-10 mb-4 uppercase tracking-tight"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  return (
                    <h2 
                      key={idx} 
                      className="text-2xl md:text-3xl font-black text-[#FFFFFF] mt-14 mb-6 uppercase tracking-tight flex items-center gap-3 border-l-2 border-[#C9A96E] pl-4"
                    >
                      {block.text}
                    </h2>
                  );
                case 'list':
                  return (
                    <ul key={idx} className="space-y-4 mb-8 pl-6">
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-[#A0A0A0] text-base md:text-lg leading-relaxed font-medium">
                          <span className="w-1.5 h-1.5 bg-[#C9A96E] mr-4 mt-2.5 flex-shrink-0"></span>
                          <span>
                            {/* Simple bold markdown parsing inside list items if needed */}
                            {item.startsWith('**') && item.includes('**: ') ? (
                              <>
                                <strong className="text-[#FFFFFF]">
                                  {item.substring(2, item.indexOf('**:'))}
                                </strong>
                                {renderTextWithLinks(item.substring(item.indexOf('**:') + 3))}
                              </>
                            ) : (
                              renderTextWithLinks(item)
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                case 'quote':
                  return (
                    <blockquote 
                      key={idx} 
                      className="border-l-4 border-[#C9A96E] bg-[#1A1A1A]/50 border-y-0 border-r-0 p-6 md:p-8 my-12 rounded-none italic text-lg md:text-xl text-[#FFFFFF] font-medium leading-relaxed relative"
                    >
                      <div className="absolute top-0 right-4 text-7xl font-serif text-[#C9A96E]/10 leading-none pointer-events-none select-none">“</div>
                      {renderTextWithLinks(block.text || '')}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Share / Back to list row */}
          <div className="max-w-3xl mx-auto border-t border-[rgba(255,255,255,0.08)] mt-16 pt-10 flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#A0A0A0] hover:text-[#C9A96E] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1.5 transition-transform" />
              Back to Blog
            </Link>
          </div>

        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-[#121212] border-t border-[rgba(255,255,255,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#FFFFFF] mb-12 tracking-tighter uppercase text-center md:text-left">
              Related <span className="text-[#C9A96E]">Insights</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group flex flex-col"
                >
                  <div className="relative overflow-hidden w-full h-44">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width={384}
                      height={176}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-[#C9A96E] text-[9px] uppercase font-bold tracking-widest mb-3 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-black text-[#FFFFFF] mb-3 uppercase tracking-tight line-clamp-2 leading-snug flex-grow">
                      {relatedPost.title}
                    </h3>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C9A96E] hover:text-[#FFFFFF] transition-colors mt-4 group/btn"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-12 md:p-24 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A96E]/10 blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase relative z-10">
              Need Elite Custom Solutions?
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-2xl mx-auto relative z-10">
              From high-performance cloud architectures to bespoke AI systems, let's build the future of your company.
            </p>
            <Link
              to="/contact"
              className="relative z-10 inline-flex h-16 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-12 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-95"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

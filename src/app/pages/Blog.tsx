import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

export function Blog() {
  const blogPosts = [
    {
      title: '10 Best Practices for Cloud Migration',
      excerpt:
        'Learn essential strategies for successfully migrating your infrastructure to the cloud without downtime.',
      author: 'Laxit jangid',
      date: 'March 15, 2026',
      category: 'Cloud Computing',
      image:
        'https://images.unsplash.com/photo-1668854096784-3ce7679fa841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRldm9wc3xlbnwxfHx8fDE3NzQ2MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'The Future of AI in Software Development',
      excerpt:
        'Exploring how artificial intelligence is transforming the way we build and deploy software applications.',
      author: 'Laxit jangid',
      date: 'March 12, 2026',
      category: 'AI & ML',
      image:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDU5MjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt:
        'A comprehensive guide to designing and implementing microservices that scale with your business.',
      author: 'Laxit jangid',
      date: 'March 8, 2026',
      category: 'Architecture',
      image:
        'https://images.unsplash.com/photo-1748256467077-c75ef01579aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDYxNTA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Securing Your Web Applications in 2026',
      excerpt:
        'Essential security practices every development team should implement to protect their applications.',
      author: 'Laxit jangid',
      date: 'March 5, 2026',
      category: 'Security',
      image:
        'https://images.unsplash.com/photo-1590286162167-70fb467846ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDU5OTYxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'DevOps Best Practices for Continuous Delivery',
      excerpt:
        'Streamline your development workflow with proven DevOps practices and automation strategies.',
      author: 'Laxit jangid',
      date: 'March 1, 2026',
      category: 'DevOps',
      image:
        'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwdGVjaG5vbG9neSUyMHdyaXRpbmd8ZW58MXx8fHwxNzc0NjE1MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'React Performance Optimization Techniques',
      excerpt:
        'Advanced techniques to improve the performance of your React applications and enhance user experience.',
      author: 'Laxit jangid',
      date: 'February 25, 2026',
      category: 'Web Development',
      image:
        'https://images.unsplash.com/photo-1759139681761-852dd24340df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBtb2JpbGUlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzQ2MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SEO title="Blog & Insights | Morphnex" description="Read the latest insights on software engineering, UI/UX trends, and enterprise architecture from the Morphnex team." />
      {/* Hero Section */}
      <section className="relative bg-[#0F0F0F] text-[#FFFFFF] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C9A96E]/10 via-[#0F0F0F] to-[#0F0F0F] opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Our <span className="text-[#C9A96E]">Blog</span></h1>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and industry news from our expert engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden w-full h-56">
                  <div className="absolute inset-0 bg-[#0F0F0F]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-[rgba(255,255,255,0.03)] border border-[#C9A96E]/30 text-[#C9A96E] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1.5 rounded-none">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-[#FFFFFF] mb-4 tracking-tight uppercase leading-tight line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed font-medium mb-6 line-clamp-3 overflow-hidden text-ellipsis flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col space-y-6 pt-6 border-t border-[rgba(255,255,255,0.08)] mt-auto">
                    <div className="flex items-center text-xs font-bold text-[#A0A0A0] uppercase tracking-widest justify-between max-w-full">
                      <div className="flex items-center truncate mr-2 text-ellipsis overflow-hidden">
                        <User className="w-3.5 h-3.5 mr-2 text-[#C9A96E] flex-shrink-0" />
                        <span className="truncate">{post.author}</span>
                      </div>
                      <div className="flex items-center flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5 mr-2 text-[#C9A96E]" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Link
                      to="#"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C9A96E] hover:text-[#FFFFFF] transition-colors group/btn"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-32 overflow-hidden bg-[#121212] border-t border-[rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#C9A96E]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase relative z-10">
              Subscribe to Insight
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Get the latest tech capabilities and architectural insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                required
                className="flex-grow px-6 py-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none text-[#FFFFFF] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 placeholder-[#555555] text-xs font-bold tracking-widest uppercase"
              />
              <button 
                type="submit"
                className="inline-flex h-14 items-center justify-center border border-[#C9A96E] bg-[#C9A96E] px-10 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:bg-transparent hover:text-[#C9A96E] active:scale-95 flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'E-Commerce Order Management System',
      /* client: 'RetailCorp',*/
      industry: 'E-Commerce',
      challenge:
        'Processing 100k+ daily orders across multiple channels with real-time inventory management',
      solution:
        'Built a scalable microservices architecture with Redis caching, PostgreSQL database, and real-time synchronization',
      results: ['50% faster order processing', '99.9% uptime', '30% cost reduction'],
      tags: ['E-COMMERCE', 'MICROSERVICES', 'REAL-TIME'],
      image:
        'https://images.unsplash.com/photo-1632297480951-7093254b8de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmRlciUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0NjE1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Cryptocurrency Payment Gateway',
      /* client: 'CryptoPayments Inc.',*/
      industry: 'FinTech',
      challenge:
        'Creating a secure, multi-chain payment gateway with instant settlement and fraud detection',
      solution:
        'Developed blockchain integration layer with smart contracts, multi-signature wallets, and AI-powered fraud detection',
      results: ['$100M+ processed monthly', 'Zero security breaches', '5-second settlements'],
      tags: ['BLOCKCHAIN', 'WEB3', 'SECURITY'],
      image:
        'https://images.unsplash.com/photo-1590286162167-70fb467846ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDU5OTYxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Digital Banking Platform',
      /* client: 'FinanceHub',*/
      industry: 'Banking',
      challenge:
        'Building a modern banking app serving 500k+ users with real-time transactions and compliance',
      solution:
        'Created cloud-native mobile banking platform with biometric authentication, real-time notifications, and regulatory compliance',
      results: ['500k+ active users', '4.8-star rating', 'PCI DSS compliant'],
      tags: ['FINTECH', 'MOBILE', 'COMPLIANCE'],
      image:
        'https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzQ2MTUwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'AI-Powered Analytics Platform',
      /* client: 'DataTech Solutions',*/
      industry: 'Technology',
      challenge:
        'Processing and analyzing terabytes of data daily with predictive insights for enterprise clients',
      solution:
        'Implemented ML-powered analytics engine with automated reporting, natural language querying, and predictive modeling',
      results: ['10x faster insights', '95% accuracy predictions', '70% time saved'],
      tags: ['AI/ML', 'BIG DATA', 'ANALYTICS'],
      image:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDU5MjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Cloud Migration & DevOps Transformation',
      /* client: 'Enterprise Systems Corp',*/
      industry: 'Enterprise',
      challenge:
        'Migrating legacy infrastructure to cloud with zero downtime and implementing DevOps practices',
      solution:
        'Orchestrated phased AWS migration with containerization, CI/CD pipelines, and infrastructure as code',
      results: ['Zero downtime migration', '60% cost savings', '10x faster deployments'],
      tags: ['CLOUD', 'DEVOPS', 'AWS'],
      image:
        'https://images.unsplash.com/photo-1668854096784-3ce7679fa841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRldm9wc3xlbnwxfHx8fDE3NzQ2MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Multiplayer Gaming Platform',
      /*client: 'GameStudio',*/
      industry: 'Gaming',
      challenge:
        'Creating a scalable multiplayer gaming platform with low latency and real-time synchronization',
      solution:
        'Built real-time gaming infrastructure with WebSocket servers, matchmaking algorithms, and distributed game state management',
      results: ['100k+ concurrent players', '<50ms latency', '99.95% uptime'],
      tags: ['GAMING', 'REAL-TIME', 'SCALABILITY'],
      image:
        'https://images.unsplash.com/photo-1759139681761-852dd24340df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzc0NjE1MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SEO title="Case Studies | Morphnex Success Stories" description="Read our case studies to see how Morphnex has transformed businesses through high-performance software engineering." />
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
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Case <span className="text-[#C9A96E]">Studies</span></h1>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Real-world success stories from our clients across diverse industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0F0F0F]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-[rgba(255,255,255,0.03)] border border-[#C9A96E]/30 text-[#C9A96E] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1.5 rounded-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4 tracking-tighter uppercase">{study.title}</h2>

                  <div className="grid grid-cols-1 gap-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                    {/* Challenge */}
                    <div>
                      <h3 className="font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-3">Challenge</h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed font-medium">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-3">Solution</h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed font-medium">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h3 className="font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-4">Results</h3>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-[#A0A0A0] font-medium">
                            <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-none mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="mt-8 inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C9A96E] hover:text-[#FFFFFF] transition-colors group/btn">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-12 md:p-24 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A96E]/10 blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase relative z-10">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Let's discuss how we can help transform your business with scalable, enterprise-grade technology solutions.
            </p>
            <a
              href="/contact"
              className="relative z-10 inline-flex h-16 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-12 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-95"
            >
              Start Your Project
              <ExternalLink className="w-4 h-4 ml-3" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

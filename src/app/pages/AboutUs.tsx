import { motion } from 'motion/react';
import { Award, Users, Target, TrendingUp, Globe, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

export function AboutUs() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SEO title="About Morphnex | Our Story & Vision" description="Learn about Morphnex, our mission, our values, and how we deliver luxury software solutions to leading enterprises." />
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
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">About <span className="text-[#C9A96E]">Morphnex</span></h1>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Leading the digital transformation with enterprise software solutions since 2019
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-24 bg-[#0F0F0F] relative border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-black text-[#FFFFFF] mb-4 tracking-tight uppercase">Our Journey</h2>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto">
              From a robust startup to a global software engineering partner
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: '2025',
                title: 'The Beginning',
                description:
                  'Founded by a team of passionate engineers with a vision to transform businesses through cutting-edge technology and intelligent solutions.',
              },
              {
                year: '2026',
                title: 'First Major Success',
                description:
                  'Secured and successfully delivered our first major enterprise project, establishing our reputation for high-quality engineering and reliability.',
              },
              {
                year: 'Present',
                title: 'Growing Impact',
                description:
                  'Rapidly expanded our footprint, now serving 5+ happy clients with innovative custom software, AI integrations, and digital transformation services.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0 w-32 border-b border-[rgba(255,255,255,0.08)] pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                  <div className="text-4xl font-black text-[#C9A96E] tracking-widest">{milestone.year}</div>
                </div>
                <div className="flex-grow">
                  <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-8 hover:border-[#C9A96E]/50 transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 tracking-widest uppercase text-sm">
                      {milestone.title}
                    </h3>
                    <p className="text-[#A0A0A0] font-medium leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#121212] py-32 border-t border-[rgba(255,255,255,0.08)] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C9A96E]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">What We Do</h2>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto">
              Comprehensive software engineering services for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Reach',
                description:
                  'Serving clients across 5 continents with 24/7 support and local presence',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description:
                  '100+ certified engineers specializing in cutting-edge technologies',
              },
              {
                icon: Zap,
                title: 'Agile Development',
                description:
                  'Fast-paced, iterative approach ensuring rapid time-to-market',
              },
              {
                icon: Target,
                title: 'Custom Solutions',
                description:
                  'Tailored software solutions designed specifically for your business needs',
              },
              {
                icon: TrendingUp,
                title: 'Scalable Systems',
                description:
                  'Building infrastructure that grows with your business',
              },
              {
                icon: Award,
                title: 'Quality Assured',
                description:
                  'Industry-leading QA processes ensuring bug-free deployments',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[rgba(255,255,255,0.03)] border border-[#C9A96E]/30 text-[#C9A96E] rounded-none flex items-center justify-center mb-8 group-hover:bg-[#C9A96E] group-hover:text-[#0F0F0F] transition-colors duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-4 tracking-tight">{item.title}</h3>
                <p className="text-[#A0A0A0] font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-32 bg-[#0F0F0F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">Our Achievements</h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl font-medium mx-auto">
              Recognition and milestones that define our excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Happy Clients' },
              { number: '5+', label: 'Projects Delivered' },
              { number: '25+', label: 'Technologies' },
              { number: '1', label: 'Global Offices' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '4', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center p-8 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-none hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-300"
              >
                <p className="text-5xl font-black text-[#FFFFFF] mb-3 tracking-tighter">{stat.number}</p>
                <p className="text-[#C9A96E] font-bold text-xs uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Image */}
      <section className="bg-[#121212] py-24 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden group border border-[rgba(255,255,255,0.08)]">
              <div className="absolute inset-0 bg-[#C9A96E]/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1080&auto=format&fit=crop"
                alt="Morphnex Corporate Office"
                className="w-full h-96 object-cover rounded-none grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                width={1200}
                height={384}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

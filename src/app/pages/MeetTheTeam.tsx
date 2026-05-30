import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

export function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Laxit Jangid',
      role: 'CEO & Founder',
      image: '../images/laxit.jpg',
      bio: '15+ years in software engineering and business strategy',
    },
    {
      name: 'Sanjay Bhati',
      role: 'CTO & Head of Marketing',
      image: '../images/sanjay.jpg',
      bio: 'Expert in digital growth, brand positioning, and video editing',
    },
    {
      name: '',
      role: 'Backend Developer',
      image: '',
      bio: 'Specializing in secure databases, API architectures, and performance optimization.',
    },
    {
      name: '',
      role: 'Cloud Engineer',
      image: '',
      bio: 'Designing scalable multi-cloud infrastructure and high-availability systems.',
    },
    {
      name: '',
      role: 'Full Stack Developer',
      image: '',
      bio: 'Building comprehensive client-side and server-side web systems with React and Node.js.',
    },
    {
      name: '',
      role: 'UI/UX Designer',
      image: '',
      bio: 'Crafting modern interfaces and interactive digital design layouts.',
    },
    {
      name: '',
      role: 'Frontend Developer',
      image: '',
      bio: 'Implementing responsive, accessible interfaces and smooth animations.',
    },
    {
      name: '',
      role: 'Mobile App Developer',
      image: '',
      bio: 'Developing native-feeling iOS and Android products using cross-platform tools.',
    },
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SEO title="Meet The Team | Morphnex" description="Meet the exceptional engineers, designers, and leaders behind Morphnex's premium software solutions." />
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
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Meet Our <span className="text-[#C9A96E]">Team</span></h1>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Talented individuals united by a passion for technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group"
              >
                <div className="relative overflow-hidden w-full h-72">
                  <div className="absolute inset-0 bg-[#0F0F0F]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name || member.role}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-[#FFFFFF] mb-2 uppercase tracking-tight">{member.name || 'Position Open'}</h3>
                  <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed font-medium mb-6">{member.bio}</p>
                  <div className="flex space-x-4 border-t border-[rgba(255,255,255,0.08)] pt-6">
                    <a
                      href={member.name ? `mailto:${member.name.toLowerCase().replace(' ', '.')}@morphnex.com` : 'mailto:contact@morphnex.com'}
                      className="w-10 h-10 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center text-[#A0A0A0] hover:text-[#0F0F0F] hover:bg-[#C9A96E] hover:border-[#C9A96E] transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center text-[#A0A0A0] hover:text-[#0F0F0F] hover:bg-[#C9A96E] hover:border-[#C9A96E] transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="bg-[#121212] py-32 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">Working Together</h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto font-medium">
              Collaboration and innovation drive everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden group border border-[rgba(255,255,255,0.08)] w-full"
          >
            <div className="absolute inset-0 bg-[#C9A96E]/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzc0NTkyOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team Meeting"
              className="w-full h-[32rem] object-cover rounded-none grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
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
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-2xl mx-auto relative z-10">
              We're always looking for talented individuals to join our mission of transforming businesses through digital excellence.
            </p>
            <a
              href="/career"
              className="relative z-10 inline-flex h-16 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-12 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-95"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

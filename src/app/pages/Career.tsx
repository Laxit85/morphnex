import { motion } from 'motion/react';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export function Career() {
  const openPositions = [
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Jodhpur, Rajasthan, India / Remote',
      type: 'Full-time',
      description:
        'Build modern, responsive web applications using React, TypeScript, and Tailwind CSS.',
      requirements: [
        '3+ years React experience',
        'TypeScript proficiency',
        'Modern CSS frameworks',
        'REST API integration',
      ],
    },
    {
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'Jodhpur, Rajasthan, India / Remote',
      type: 'Full-time',
      description:
        'Design and develop scalable backend services using Node.js, Python, and cloud platforms.',
      requirements: [
        '4+ years backend development',
        'Node.js or Python expertise',
        'Database design (SQL/NoSQL)',
        'Microservices architecture',
      ],
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Jodhpur, Rajasthan, India / Remote',
      type: 'Full-time',
      description:
        'Build and maintain CI/CD pipelines, cloud infrastructure, and monitoring systems.',
      requirements: [
        'AWS/Azure/GCP experience',
        'Docker & Kubernetes',
        'Infrastructure as Code',
        'CI/CD tools (Jenkins, GitLab)',
      ],
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Jodhpur, Rajasthan, India / Remote',
      type: 'Full-time',
      description:
        'Work across the entire technology stack building end-to-end features for our clients.',
      requirements: [
        '3+ years full-stack development',
        'React & Node.js',
        'Database management',
        'Cloud platforms experience',
      ],
    },
    {
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'Jodhpur, Rajasthan, India / Remote',
      type: 'Full-time',
      description:
        'Develop machine learning models and AI solutions for enterprise applications.',
      requirements: [
        'ML frameworks (TensorFlow, PyTorch)',
        'Python & data science libraries',
        'Model deployment experience',
        'Strong mathematics background',
      ],
    },
    {
      title: 'Mobile Developer (iOS/Android)',
      department: 'Engineering',
      location: 'Jodhpur, Rajasthan, India / Remote',
      type: 'Full-time',
      description:
        'Create native mobile applications for iOS and Android with exceptional user experiences.',
      requirements: [
        'Swift/Kotlin experience',
        'Mobile UI/UX best practices',
        'REST API integration',
        'App store deployment',
      ],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Jodhpur, Rajasthan, India / Remote',
      type: 'Full-time',
      description:
        'Design beautiful, intuitive user interfaces and experiences for web and mobile applications.',
      requirements: [
        'Figma/Sketch proficiency',
        'User research & testing',
        'Design system creation',
        'Portfolio of work',
      ],
    },
    {
      title: 'Solutions Architect',
      department: 'Engineering',
      location: 'Jodhpur, Rajasthan, India',
      type: 'Full-time',
      description:
        'Design technical solutions and architecture for enterprise clients across industries.',
      requirements: [
        '7+ years software architecture',
        'Cloud architecture expertise',
        'Client-facing experience',
        'Technical leadership',
      ],
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Flexible remote work options',
    'Health, dental, and vision insurance',
    'Unlimited PTO policy',
    'Professional development budget',
    'Latest tech equipment',
    'Team building events',
    'Collaborative culture',
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SEO title="Careers at Morphnex | Join Our Team" description="Looking for a new challenge? Join Morphnex and work on premium, high-impact enterprise software projects." />
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
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Join Our <span className="text-[#C9A96E]">Team</span></h1>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Build the future of technology with talented individuals who share your passion for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">Why Work With Us?</h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto font-medium">
              Benefits and perks that make Morphnex a great place to grow your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[rgba(255,255,255,0.03)] border border-[#C9A96E]/30 rounded-none flex items-center justify-center mb-6">
                  <div className="w-2 h-2 bg-[#C9A96E] rounded-none"></div>
                </div>
                <p className="text-[#FFFFFF] font-bold text-sm leading-relaxed uppercase tracking-widest">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-[#121212] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">Open Positions</h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto font-medium">
              Find your next career opportunity with us.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-10 hover:border-[#C9A96E]/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <h3 className="text-2xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight">{position.title}</h3>
                    <div className="flex flex-wrap gap-6 text-xs text-[#A0A0A0] font-bold uppercase tracking-widest">
                      <div className="flex items-center text-[#C9A96E]">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-6 md:mt-0 inline-flex h-12 items-center justify-center border border-[#C9A96E] bg-transparent px-8 font-bold uppercase tracking-widest text-[#C9A96E] text-xs transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0F0F0F] active:scale-95 flex-shrink-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </Link>
                </div>

                <p className="text-[#A0A0A0] mb-8 font-medium leading-relaxed">{position.description}</p>

                <div>
                  <h4 className="font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-4">Requirements</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-[#A0A0A0] text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-none mr-3 mt-1.5 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
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
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-2xl mx-auto relative z-10">
              We're always looking for talented individuals. Send us your resume and let's talk about how you can join our team.
            </p>
            <Link
              to="/contact"
              className="relative z-10 inline-flex h-16 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-12 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-95"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

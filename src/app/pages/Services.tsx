import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Shield,
  Zap,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Build modern, responsive web applications using cutting-edge frameworks like React, Vue, and Angular.',
      features: [
        'Custom web applications',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'Content Management Systems',
      ],
      image:
        'https://images.unsplash.com/photo-1759139681761-852dd24340df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBtb2JpbGUlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzQ2MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Create native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
      features: [
        'Native iOS & Android apps',
        'React Native & Flutter',
        'Mobile app optimization',
        'App store deployment',
      ],
      image:
        'https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzQ2MTUwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Harness the power of AI and ML to automate processes, gain insights, and drive innovation.',
      features: [
        'Machine learning models',
        'Natural Language Processing',
        'Computer vision',
        'Predictive analytics',
      ],
      image:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDU5MjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Migrate and optimize your infrastructure with AWS, Azure, and Google Cloud Platform.',
      features: [
        'Cloud migration',
        'Infrastructure as Code',
        'Multi-cloud strategy',
        'Cost optimization',
      ],
      image:
        'https://images.unsplash.com/photo-1668854096784-3ce7679fa841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRldm9wc3xlbnwxfHx8fDE3NzQ2MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Database,
      title: 'Digitak Marketing',
      description:
        'We provide comprehensive digital marketing services to help businesses grow their online presence and reach their target audience.',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing (SMM)',
        'Content Marketing',
        'Pay-Per-Click (PPC) Advertising',
      ],
      image:
        'https://images.unsplash.com/photo-1632297480951-7093254b8de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmRlciUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0NjE1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Zap,
      title: 'DevOps Services',
      description:
        'Streamline your development workflow with CI/CD pipelines and infrastructure automation.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure monitoring',
        'Automated testing',
      ],
      image:
        'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwdGVjaG5vbG9neSUyMHdyaXRpbmd8ZW58MXx8fHwxNzc0NjE1MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Shield,
      title: 'Cunsulting',
      description:
        'We provide expert consulting services to help businesses optimize their operations and achieve their goals.',
      features: [
        'Business Analysis',
        'Market Research',
        'Competitor Analysis',
        'Strategy Development',
      ],
      image:
        'https://images.unsplash.com/photo-1590286162167-70fb467846ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDU5OTYxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Globe,
      title: 'Web3 & Blockchain',
      description:
        'Build decentralized applications and leverage blockchain technology for your business.',
      features: [
        'Smart contract development',
        'DApp development',
        'NFT platforms',
        'Cryptocurrency integration',
      ],
      image:
        'https://images.unsplash.com/photo-1590286162167-70fb467846ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDU5OTYxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SEO title="Services | Morphnex Technologies" description="Explore our premium services including Full-Stack Development, UI/UX Design, Cloud Architecture, and AI solutions." />
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
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Our <span className="text-[#C9A96E]">Services</span></h1>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Comprehensive software engineering solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-14 items-center group`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-none border border-[rgba(255,255,255,0.08)] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-[#0F0F0F]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="w-16 h-16 bg-[rgba(255,255,255,0.03)] border border-[#C9A96E]/30 rounded-none flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-[#C9A96E] group-hover:border-[#C9A96E]">
                    <service.icon className="w-8 h-8 text-[#C9A96E] group-hover:text-[#0F0F0F] transition-colors duration-500" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[#A0A0A0] mb-8 font-medium leading-relaxed max-w-lg">{service.description}</p>
                  
                  <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-8 mb-10 w-full max-w-lg">
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[#FFFFFF] font-medium">
                          <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-none mr-4"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex h-14 items-center justify-center border border-[#C9A96E] bg-transparent px-8 font-bold uppercase tracking-widest text-[#C9A96E] text-xs transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0F0F0F] shadow-none active:scale-95"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </Link>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Let's discuss how our services can help transform your business and elevate your digital presence.
            </p>
            <Link
              to="/contact"
              className="relative z-10 inline-flex h-16 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-12 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-95"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

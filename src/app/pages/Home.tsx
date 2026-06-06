import { lazy, Suspense } from 'react';
import { Link } from 'react-router';
import { Check, ArrowRight, Users, Target, Award, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { TiltCard } from '../components/ui/TiltCard';

const HeroCanvas = lazy(() =>
  import('../components/ui/HeroCanvas').then((m) => ({ default: m.HeroCanvas }))
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="bg-background text-foreground overflow-hidden">
      <SEO title="Morphnex" description="Morphnex provides top-tier software engineering, AI/ML solutions, and premium UI/UX transformations." />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0F0F0F] -z-10" />}>
          <HeroCanvas />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 border border-[#C9A96E] bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-none mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#C9A96E] relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A96E] opacity-75"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9A96E]">
                  Building the Future of Web
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-[#FFFFFF] mb-6 leading-[1.1] tracking-tighter uppercase"
              >
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96E] to-[#FFFFFF]">
                  Excellence
                </span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-[#A0A0A0] font-medium mb-10 leading-relaxed max-w-lg">
                We transform businesses with cutting-edge technology. Our expert team delivers scalable software, AI-driven insights, and cloud infrastructure that powers your digital evolution.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto relative inline-flex h-14 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-8 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs shadow-[0_4px_14px_0_rgba(201,169,110,0.39)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(201,169,110,0.23)] active:scale-95 group"
                >
                  <span className="mr-2">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0] w-full sm:w-auto px-4 mt-4 sm:mt-0">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-none border border-[rgba(255,255,255,0.08)]" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client avatar 1" width={32} height={32} loading="eager" />
                  <img className="inline-block h-8 w-8 rounded-none border border-[rgba(255,255,255,0.08)]" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client avatar 2" width={32} height={32} loading="eager" />
                  <img className="inline-block h-8 w-8 rounded-none border border-[rgba(255,255,255,0.08)]" src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client avatar 3" width={32} height={32} loading="eager" />
                </div>
                  <span>Trusted by innovative brands</span>
                </div>
              </motion.div>
            </div>

            {/* Right - 3D Service Cards */}
            <motion.div style={{ y: yParallax }} className="grid gap-6 perspective-1000 mt-12 lg:mt-0">
              <motion.div variants={itemVariants}>
                <TiltCard className="p-2">
                  <div className="relative h-48 rounded-lg overflow-hidden group">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1080&auto=format&fit=crop"
                      alt="AI & ML"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={540}
                      height={192}
                      loading="eager"
                      fetchpriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <h2 className="text-white font-semibold text-xl">AI & ML Data Engineering</h2>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pointer-events-none">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

              <motion.div variants={itemVariants} className="ml-0 lg:ml-12">
                <TiltCard className="p-2">
                  <div className="relative h-48 rounded-lg overflow-hidden group">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop"
                      alt="Web Development"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={540}
                      height={192}
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <h2 className="text-white font-semibold text-xl">Web & Mobile Development</h2>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pointer-events-none">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logo Strip - Premium Style */}
      <section className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm py-12 border-y border-[rgba(255,255,255,0.08)] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#A0A0A0] font-bold mb-10 text-[10px] tracking-[0.2em] uppercase">
            Powering Next-Gen Companies
          </p>
          
        </div> 
      </section>

      {/* Our Services - Dark Luxury Redesign */}
      <section className="bg-[#121212] py-32 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase">
              Build Better, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96E] to-[#FFFFFF]">Scale Smarter</span>
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-2xl mx-auto leading-relaxed">
              Comprehensive software solutions tailored to elevate your business operations and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Scalable website solutions with modern frameworks and best practices for performance optimization.',
                icon: Award,
                image: 'https://images.unsplash.com/photo-1759139681761-852dd24340df?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBtb2JpbGUlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzQ2MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                title: 'MVP Development',
                description: 'Launch your product quickly with rapid development services that validate your idea to early users.',
                icon: Target,
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdnB8ZW58MHx8fHwxNzc0NjE1MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                title: 'SEO & Digital Marketing',
                description: 'Drive growth with data-driven marketing strategies and execution plans that maximize ROI.',
                icon: ArrowUpRight,
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW98ZW58MHx8fHwxNzc0NjE1MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                title: 'Strategic Consulting',
                description: 'Expert guidance to navigate digital transformation, optimize IT infrastructure, and align technology with business goals.',
                icon: Users,
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080&auto=format&fit=crop',
              },
              {
                title: 'AI Automation',
                description: 'Optimize workflows with AI-powered automation and intelligent systems that increase efficiency.',
                icon: Check,
                image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fHx8MTc3NDU5MjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                title: 'DevOps Services',
                description: 'Streamline deployment with CI/CD pipelines and robust cloud infrastructure management.',
                icon: Award,
                image: 'https://images.unsplash.com/photo-1668854096784-3ce7679fa841?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyxlbnwwfHx8fDE3NzQ2MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
              >
                <TiltCard className="relative h-full group bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-none hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={400} height={250} loading="lazy" />
                  </div>
                  {/* Glassmorphism Plate Overlay */}
                  <div className="absolute inset-0 bg-[#0F0F0F]/80 backdrop-blur-sm transition-opacity duration-500 group-hover:bg-[#0F0F0F]/70"></div>
                  
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full p-8">
                    <div className="w-14 h-14 bg-[rgba(255,255,255,0.05)] border border-[#C9A96E]/30 rounded-none flex items-center justify-center mb-8 text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#0F0F0F] group-hover:border-[#C9A96E] transition-all duration-500 backdrop-blur-md">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 tracking-tight drop-shadow-md">{service.title}</h3>
                    <p className="text-[#E0E0E0] font-medium mb-8 leading-relaxed flex-grow drop-shadow-sm">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C9A96E] group-hover:text-[#FFFFFF] transition-colors mt-auto drop-shadow-md"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - WE CARE Style */}
      <section className="bg-[#0F0F0F] py-32 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-24"
          >
            {/* BIG Image-Filled Typography */}
            <h2
              className="text-[4.5rem] sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12 drop-shadow-2xl opacity-90"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              WE CARE <br className="hidden md:block"/>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem]">ABOUT IMPACT.</span>
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-[#C9A96E] pl-6 md:pl-8">
              <p className="text-xl md:text-2xl text-[#B0B0B0] max-w-2xl font-medium leading-relaxed">
                Discover how we deliver enterprise-grade digital solutions that transform businesses and drive measurable success worldwide.
              </p>
              <Link
                to="/case-studies"
                className="inline-flex h-14 items-center justify-center border border-[rgba(255,255,255,0.08)] bg-[#1A1A1A] px-8 font-bold uppercase tracking-widest text-[#FFFFFF] transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E]"
              >
                View All Cases
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {[
              {
                tag: 'E-COMMERCE',
                title: 'Order Management System',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080&auto=format&fit=crop',
              },
              {
                tag: 'HR TECH / AI SAAS',
                title: 'Smart Recruitment Platform',
                image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1080&auto=format&fit=crop',
              },
              {
                tag: 'HEALTHCARE AI / ML',
                title: 'Predictive Diagnostics System',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1080&auto=format&fit=crop',
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              >
                <Link to="/case-studies" className="block relative h-[28rem] rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    width={384}
                    height={448}
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0F0F0F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <span className="px-6 py-3 border border-[#C9A96E] text-[#C9A96E] uppercase tracking-widest font-bold text-sm bg-black/40 backdrop-blur-sm rounded-none">
                      Read Case Study
                    </span>
                  </div>
                  
                  {/* Top Tag and Bottom Title container ensuring they sit above overlays */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                    <div className="self-start">
                      <span className="inline-block px-3 py-1.5 bg-[#0F0F0F]/80 backdrop-blur-md text-[#C9A96E] text-[10px] font-bold uppercase tracking-widest border border-[rgba(255,255,255,0.08)]">
                        {story.tag}
                      </span>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight drop-shadow-md">
                        {story.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Immersive Design */}
      <section className="bg-[rgba(255,255,255,0.02)] border-y border-[rgba(255,255,255,0.08)] py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">
              Client Outcomes
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto font-medium">
              Real stories from leaders who transformed their digital presence.
            </p>
          </motion.div>

          <div className="overflow-hidden relative -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none hidden sm:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none hidden sm:block"></div>
            
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
            >
              {[1, 2].flatMap((i) => [
                {
                  quote: "Their team rebuilt our core infrastructure with a level of polish and performance we didn't think was possible. Engagement has skyrocketed.",
                  author: 'Rohit Jangid',
                  role: 'CEO, NexusTech',
                  image: '/images/rohit.webp',
                },
                {
                  quote: "Working with them felt like an extension of our own team. Seamless communication and an incredibly beautiful, functional end product.",
                  author: 'Sanjay Bhati',
                  role: 'Founder, CloudSync',
                  image: '/images/sanjay.webp',
                },
                {
                  quote: "The UI/UX overhaul not only looks Apple-tier premium, but conversion rates have increased by 40% in just two months.",
                  author: 'Yashraj Singh',
                  role: 'Head of Product',
                  image: '/images/yashraj.webp',
                },
              ]).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-10 min-w-[380px] max-w-[380px] transition-shadow duration-300 flex flex-col hover:border-[#C9A96E]/50 group"
                >
                  <svg className="w-8 h-8 text-[#C9A96E]/40 mb-8 transition-colors duration-300 group-hover:text-[#C9A96E]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <p className="text-[#A0A0A0] font-medium text-lg leading-relaxed mb-10 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center space-x-5 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-none object-cover border border-[#C9A96E]"
                      width={56}
                      height={56}
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-[#FFFFFF] tracking-widest uppercase text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C9A96E] mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#0F0F0F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none p-12 md:p-24 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A96E]/10 blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase relative z-10">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-xl text-[#A0A0A0] mb-12 max-w-2xl mx-auto leading-relaxed font-medium relative z-10">
              Let's build something exceptional together. Schedule a free discovery session to discuss your next big leap.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-10 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 group mb-20 relative z-10"
            >
              <span className="mr-3">Start the Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-3xl mx-auto pt-10 border-t border-[rgba(255,255,255,0.08)] relative z-10">
              <div>
                <p className="text-4xl font-black text-[#FFFFFF] mb-2 tracking-widest">2025</p>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-[0.2em]">Established</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#FFFFFF] mb-2 tracking-widest">99<span className="text-[#C9A96E]">%</span></p>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-[0.2em]">Client Success</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#FFFFFF] mb-2 tracking-widest">25<span className="text-[#C9A96E]">+</span></p>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-[0.2em]">Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

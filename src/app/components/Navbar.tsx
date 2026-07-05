import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'motion/react';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Career', path: '/career' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'));
  const isAboutActive = isActive('/about') || isActive('/team') || location.pathname.startsWith('/blog') || isActive('/terms');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F0F]/80 backdrop-blur-lg py-2 border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center border border-[#C9A96E] bg-[rgba(255,255,255,0.03)] rounded-none transition-all duration-300 overflow-hidden ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
            >
              <img src="/images/logo.webp" alt="Morphnex Logo" className="w-full h-full object-cover" width={40} height={40} fetchpriority="high" loading="eager" />
            </motion.div>
            <span className={`font-black text-[#FFFFFF] tracking-tight transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Morphnex
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {/* About Dropdown */}
            <div
              className="relative px-3 py-2"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`group relative flex items-center space-x-1 px-3 py-2 transition-colors rounded-none font-bold tracking-widest uppercase text-xs ${
                  isAboutActive ? 'text-[#C9A96E]' : 'text-[#A0A0A0] hover:text-[#FFFFFF]'
                }`}
              >
                <span className="relative z-10 transition-transform group-hover:-translate-y-0.5">About</span>
                <ChevronDown className={`w-4 h-4 relative z-10 transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                {isAboutActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 border-b-2 border-[#C9A96E] -z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-[100%] left-0 w-56 bg-[#1A1A1A]/95 backdrop-blur-xl rounded-none shadow-2xl border border-[rgba(255,255,255,0.08)] py-3 overflow-hidden origin-top-left"
                  >
                    {[
                      { name: 'About Us', path: '/about' },
                      { name: 'Meet the Team', path: '/team' },
                      { name: 'Blog', path: '/blog' },
                      { name: 'Terms & Conditions', path: '/terms' },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#A0A0A0] hover:text-[#C9A96E] hover:bg-black/20 transition-all w-full relative"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 transition-colors rounded-none group font-bold tracking-widest uppercase text-xs ${
                    active ? 'text-[#C9A96E]' : 'text-[#A0A0A0] hover:text-[#FFFFFF]'
                  }`}
                >
                  <span className="relative z-10 transition-transform group-hover:-translate-y-0.5 inline-block">
                    {link.name}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 border-b-2 border-[#C9A96E] -z-0"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side - Email & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="mailto:contact@morphnex.com"
              className="text-xs font-bold tracking-widest uppercase text-[#A0A0A0] hover:text-[#C9A96E] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#C9A96E] hover:after:w-full after:transition-all after:duration-300"
            >
              laxitjangid2k5@gmail.com
            </a>
            <Link
              to="/contact"
              className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-none border border-[#C9A96E] bg-transparent px-6 font-bold uppercase tracking-widest text-xs text-[#C9A96E] transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0F0F0F] shadow-[0_0_15px_rgba(201,169,110,0.15)] hover:shadow-[0_0_25px_rgba(201,169,110,0.3)] active:scale-95"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#FFFFFF] p-2 hover:text-[#C9A96E] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'circOut' }}
            className="md:hidden bg-[#0F0F0F]/95 backdrop-blur-xl border-t border-[rgba(255,255,255,0.08)] shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="space-y-2">
                <p className="px-4 text-[10px] font-bold text-[#A0A0A0]/60 uppercase tracking-[0.2em] mb-4">Company</p>
                {['/about', '/team', '/blog', '/terms'].map((path, idx) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-[#C9A96E] transition-colors font-bold uppercase tracking-widest text-xs"
                  >
                    {idx === 0 ? 'About Us' : idx === 1 ? 'Meet the Team' : idx === 2 ? 'Blog' : 'Terms & Conditions'}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <p className="px-4 text-[10px] font-bold text-[#A0A0A0]/60 uppercase tracking-[0.2em] mb-4">Links</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-[#C9A96E] transition-colors font-bold uppercase tracking-widest text-xs"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-6 pb-2 px-4 border-t border-[rgba(255,255,255,0.08)]">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full border border-[#C9A96E] text-[#C9A96E] px-6 py-4 text-center font-bold uppercase tracking-widest text-xs hover:bg-[#C9A96E] hover:text-[#0F0F0F] transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

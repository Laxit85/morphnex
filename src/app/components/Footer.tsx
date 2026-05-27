import { Link } from 'react-router';
import { Mail, Phone, Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#A0A0A0] relative overflow-hidden group">
      {/* Subtle interactive background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Services */}
          <div>
            <h3 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">Services</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Mobile Development</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">AI & ML</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">DevOps</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">UI/UX Design</Link></li>
               <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Consulting</Link></li>
               <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Custom Software Development</Link></li>
               <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Enterprise Solutions</Link></li>
               <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Blockchain</Link></li>
               <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h3 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">Domains</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">FinTech</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">E-Commerce</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Healthcare</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Education</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Entertainment</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Real Estate</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Travel & Hospitality</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Manufacturing</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Retail & E-Commerce</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A96E] transition-colors">Startups & Tech Innovators</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">Industries</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Banking</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Retail</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Manufacturing</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Logistics</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Technology</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Healthcare</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Education</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">FinTech</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Startups & Tech Innovators</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#C9A96E] transition-colors">Travel & Hospitality</Link></li>
              
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">About</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/about" className="hover:text-[#C9A96E] transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-[#C9A96E] transition-colors">Our Team</Link></li>
              <li><Link to="/career" className="hover:text-[#C9A96E] transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-[#C9A96E] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#C9A96E] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">Offices</h3>
            <p className="font-medium leading-relaxed">Jodhpur,<br/>Rajasthan, India</p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">Insights & Updates</h3>
            <p className="text-sm mb-6 font-medium leading-relaxed">Subscribe to receive exclusive insights into enterprise digital transformation. </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter corporate email"
                className="px-4 py-3 rounded-none bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] text-[#FFFFFF] focus:outline-none focus:border-[#C9A96E] transition-colors"
                autoComplete="email"
              />
              <button className="bg-[#C9A96E] text-[#0F0F0F] px-4 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#FFFFFF] transition-colors duration-300 shadow-[0_0_15px_rgba(201,169,110,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-10">
           <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

            {/* Logo Mark for Footer */}
             <div className="flex items-center space-x-2">
               <div className="flex items-center justify-center border border-[#C9A96E] bg-[rgba(255,255,255,0.03)] w-8 h-8 overflow-hidden">
                 <img src="/images/logo.jpeg" alt="Morphnex Logo" className="w-full h-full object-cover" />
               </div>
               <span className="text-[#FFFFFF] font-black tracking-tight text-xl">Morphnex.</span>
            </div>

            {/* Contact */}
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 font-medium text-sm">
              <a href="tel:+917878429752" className="flex items-center space-x-2 hover:text-[#C9A96E] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="tracking-widest">+91 7878429752</span>
              </a>
              <a href="mailto:laxitjangid2k5@gmail.com" className="flex items-center space-x-2 hover:text-[#C9A96E] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="tracking-widest">laxitjangid2k5@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              
              <a href="https://linkedin.com/in/Laxit-jangid" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors hover:-translate-y-1 transform duration-300">
                <Linkedin className="w-5 h-5" />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors hover:-translate-y-1 transform duration-300">
                <Twitter className="w-5 h-5" />
              </a>

              <a href="https://wa.me/917878429752" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors hover:-translate-y-1 transform duration-300">
                <FaWhatsapp className="w-5 h-5" />
              </a>

              <a href="https://instagram.com/thewebcraft25" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors hover:-translate-y-1 transform duration-300">
                <Instagram className="w-5 h-5" />
              </a>

              <a href="https://github.com/Laxit85" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors hover:-translate-y-1 transform duration-300">
                <Github className="w-5 h-5" />
              </a>

            </div>
          </div>

          <div className="mt-12 text-center text-xs font-medium uppercase tracking-widest text-[#A0A0A0]/60">
            <p>© 2026 Morphnex Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
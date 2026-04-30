import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-4 relative overflow-hidden">
      <SEO title="Page Not Found | Morphnex" description="The page you are looking for does not exist." />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A96E]/5 via-[#0F0F0F] to-[#0F0F0F] opacity-70"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <h1 className="text-9xl font-black text-[#C9A96E] mb-6 tracking-tighter">404</h1>
        <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase">Page Not Found</h2>
        <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-md mx-auto leading-relaxed">
          The requested resource could not be found or has been relocated.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/"
            className="inline-flex h-14 items-center justify-center bg-[#C9A96E] px-8 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-95 rounded-none"
          >
            <Home className="w-4 h-4 mr-3" />
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex h-14 items-center justify-center border border-[rgba(255,255,255,0.08)] bg-[#1A1A1A] px-8 font-bold uppercase tracking-widest text-[#FFFFFF] text-xs transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E] active:scale-95 rounded-none"
          >
            <ArrowLeft className="w-4 h-4 mr-3" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

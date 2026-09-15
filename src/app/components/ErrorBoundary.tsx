import { useRouteError, Link } from 'react-router';
import { RotateCw, Home as HomeIcon, Mail } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function ErrorBoundary() {
  const error = useRouteError();

  // Log error in production monitoring if available, without exposing stack traces to end users
  if (process.env.NODE_ENV !== 'production') {
    console.error('Route ErrorBoundary caught an error:', error);
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-[#FFFFFF]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Luxury Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A96E]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-xl w-full text-center bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-8 sm:p-12 shadow-2xl relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 bg-[rgba(255,255,255,0.03)] border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]">
            <RotateCw className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 text-[#FFFFFF]">
            Something Went Wrong
          </h1>

          <p className="text-[#A0A0A0] text-base font-medium leading-relaxed mb-8 max-w-md mx-auto">
            We encountered an unexpected issue while loading this page. Please try refreshing or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleRefresh}
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center bg-[#C9A96E] px-6 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:bg-[#FFFFFF] active:scale-95"
            >
              <RotateCw className="w-4 h-4 mr-2" />
              Refresh Page
            </button>

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center border border-[rgba(255,255,255,0.2)] bg-transparent px-6 font-bold uppercase tracking-widest text-[#FFFFFF] text-xs transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E] active:scale-95"
            >
              <HomeIcon className="w-4 h-4 mr-2" />
              Go Home
            </Link>

            <Link
              to="/contact/"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center border border-[rgba(255,255,255,0.2)] bg-transparent px-6 font-bold uppercase tracking-widest text-[#FFFFFF] text-xs transition-all duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E] active:scale-95"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://morphnex.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'An error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SEO title="Contact Morphnex | Let's Build Together" description="Get in touch with Morphnex to discuss your next big software project or enterprise transformation." />
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
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Get in <span className="text-[#C9A96E]">Touch</span></h1>
            <p className="text-xl text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-[#0F0F0F] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black text-[#FFFFFF] mb-8 tracking-tighter uppercase">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-widest mb-3">
                    Full Name <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none text-[#FFFFFF] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 placeholder-[#555555]"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-widest mb-3">
                    Email Address <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none text-[#FFFFFF] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 placeholder-[#555555]"
                    placeholder="HELLO@EMAIL.COM"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-widest mb-3"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none text-[#FFFFFF] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 placeholder-[#555555]"
                    placeholder="YOUR COMPANY"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-widest mb-3"
                  >
                    Message <span className="text-[#C9A96E]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none text-[#FFFFFF] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all duration-300 placeholder-[#555555] resize-none"
                    placeholder="TELL US ABOUT YOUR PROJECT..."
                  />
                </div>

                {submitStatus.type && (
                  <div className={`p-4 mb-4 text-sm font-bold uppercase tracking-widest border ${submitStatus.type === 'success' ? 'bg-[#C9A96E]/10 border-[#C9A96E] text-[#C9A96E]' : 'bg-red-900/20 border-red-500 text-red-500'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-16 border px-6 py-4 rounded-none flex items-center justify-center font-bold uppercase tracking-widest text-xs transition-all duration-300 active:scale-[0.98] ${
                    isSubmitting 
                      ? 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-[#555555] cursor-not-allowed' 
                      : 'bg-transparent border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0F0F0F]'
                  }`}
                >
                  <Send className={`w-4 h-4 mr-3 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-black text-[#FFFFFF] mb-10 tracking-tighter uppercase">Contact Information</h2>

              <div className="space-y-12 mb-12">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-none flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/5 transition-all duration-300">
                    <Phone className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#FFFFFF] mb-2 uppercase tracking-widest text-xs">Phone</h3>
                    <a
                      href="tel:+14155551234"
                      className="text-[#A0A0A0] text-lg hover:text-[#C9A96E] transition-colors"
                    >
                      +91 7878429752
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-none flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/5 transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#FFFFFF] mb-2 uppercase tracking-widest text-xs">Email</h3>
                    <a
                      href="mailto:laxitjangid2k5@gmail.com"
                      className="text-[#A0A0A0] text-lg hover:text-[#C9A96E] transition-colors break-all"
                    >
                      laxitjangid2k5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-none flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/5 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#FFFFFF] mb-2 uppercase tracking-widest text-xs">Headquarters</h3>
                    <p className="text-[#A0A0A0] text-lg leading-relaxed">
                      Ummed Chowk,
                      <br />
                      Jodhpur 342001, Rajasthan.
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#121212] py-24 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-[#FFFFFF] mb-12 tracking-tighter uppercase text-center">
              Find Us Here
            </h2>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-2 shadow-2xl overflow-hidden group">
              <iframe
                src="https://www.google.com/maps?q=Ummed%20Chowk%20Jodhpur%20Rajasthan%20342001&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              ></iframe>
            </div>
          </motion.div>
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
              Prefer a Phone Call?
            </h2>
            <p className="text-xl text-[#A0A0A0] font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Our team is available Monday to Friday, 9 AM - 6 PM IST.
            </p>
            <a
              href="tel:+917878429752"
              className="relative z-10 inline-flex h-16 items-center justify-center overflow-hidden rounded-none bg-[#C9A96E] px-12 font-bold uppercase tracking-widest text-[#0F0F0F] text-xs transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFFFFF] shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-95"
            >
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

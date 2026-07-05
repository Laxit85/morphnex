import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Shield, FileText, Coins, Scale, AlertCircle, Key, HeartHandshake, EyeOff, Gavel, Printer, Search, ChevronDown, Check, Maximize2, Minimize2, CheckSquare, Award, Clock, FileCheck, X } from 'lucide-react';

export function TermsAndConditions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    billing: true // Expand billing terms by default to highlight the 30% advance deposit
  });
  const [activeSection, setActiveSection] = useState('engagement');

  // Signature Block States
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [signatureHash, setSignatureHash] = useState<string | null>(null);
  const [signedDate, setSignedDate] = useState<string | null>(null);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const termsSections = [
    {
      id: 'engagement',
      num: '01',
      icon: FileText,
      tag: 'Scope & Setup',
      title: 'Project Engagement & Statement of Work',
      summary: 'All software design and development services are executed under a formal Statement of Work (SOW), defining specifications, communication loops, and delivery milestones.',
      detailedPoints: [
        {
          heading: 'Statement of Work (SOW)',
          text: 'Every project requires a signed SOW detailing features, third-party integrations, design specifications, and agreed timelines before engineering kickoff.'
        },
        {
          heading: 'Communication Channels',
          text: 'Primary correspondence is conducted via official email, corporate Slack channels, and scheduled weekly video syncs (Google Meet/Zoom) to ensure continuous feedback loops.'
        },
        {
          heading: 'Timeline Calculations',
          text: 'All timelines are estimated in business days (excluding Saturdays, Sundays, and public holidays). Delivery dates are contingent upon immediate provision of assets and approvals.'
        }
      ]
    },
    {
      id: 'billing',
      num: '02',
      icon: Coins,
      tag: 'Financial Terms',
      title: 'Payment Terms & Milestone Billing',
      summary: 'A mandatory 30% advance deposit is required to initiate design and development. The remaining 70% balance is structured into negotiable milestones based on project progress.',
      isSpecial: true,
      detailedPoints: [
        {
          heading: '30% Advance Payment Requirement',
          text: 'All custom software projects require a mandatory 30% advance deposit. Work, including architectural setup and UI wireframing, will not commence until the advance payment is cleared in our bank.'
        },
        {
          heading: 'Negotiable Milestone Billing Cycles',
          text: 'The remaining 70% of the project budget is broken into logical milestones (e.g. Design Approval, Beta Release, Integration Phase, and Launch). These milestone divisions, criteria, and payment schedules are fully negotiable and customized to the client’s project requirements in the SOW.'
        },
        {
          heading: 'Invoicing & Late Penalties',
          text: 'Invoices are issued upon milestone completion and must be cleared within 7 calendar days. Late payments (exceeding 14 days) incur a late penalty fee of 2% per month on the outstanding amount and may trigger a temporary freeze on development.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      num: '03',
      icon: Shield,
      tag: 'Legal Rights',
      title: 'Intellectual Property & Source Code Rights',
      summary: 'All ownership of custom code, design assets, and database schemas transfers to the Client upon clearance of all outstanding project payments.',
      detailedPoints: [
        {
          heading: 'IP Transfer Protocol',
          text: 'Full intellectual property rights, copyright ownership, and repository transfer of the custom code and asset files are executed exclusively upon receipt and clearing of the final invoice payment.'
        },
        {
          heading: 'Pre-existing Code & Open Source',
          text: 'Morphnex Technologies retains the rights to its pre-existing internal libraries, base boilerplates, and utility helper scripts. Any open-source third-party dependencies are licensed directly to the Client.'
        },
        {
          heading: 'Portfolio & Marketing Rights',
          text: 'Morphnex Technologies reserves the right to showcase screenshots, video walkthroughs, and description write-ups of the completed system in its portfolio and case studies, unless restricted by a signed NDA.'
        }
      ]
    },
    {
      id: 'revisions',
      num: '04',
      icon: Scale,
      tag: 'Modifications',
      title: 'Revisions & Scope of Work Changes',
      summary: 'Minor visual adjustments are covered under SOW terms. Significant additions or structural feature changes require a separate Change Order or hourly billing.',
      detailedPoints: [
        {
          heading: 'Minor Revisions vs. Scope Changes',
          text: 'Minor revisions include text corrections, color tone adjustments, and visual spacing updates. Scope changes refer to adding new features, altering database schemas, or changing third-party API configurations mid-project.'
        },
        {
          heading: 'Scope Modification Process',
          text: 'Any change in scope must be documented in a digital Change Order. We will provide an estimate of additional hours and cost, which must be signed by the Client before the out-of-scope work begins.'
        },
        {
          heading: 'Out-of-Scope Hourly Rates',
          text: 'Any development, design, or consulting task requested outside the SOW boundary that is not covered under a milestone will be billed at our standard hourly engineering rate.'
        }
      ]
    },
    {
      id: 'cancellation',
      num: '05',
      icon: AlertCircle,
      tag: 'Termination',
      title: 'Project Cancellation & Refund Policies',
      summary: 'Engagements can be canceled with a 14-day written notice. The 30% deposit is non-refundable, and completed work is billed on a pro-rata basis.',
      detailedPoints: [
        {
          heading: 'Termination Notice',
          text: 'Either party may terminate the development contract with 14 calendar days of written notice via email or registered mail.'
        },
        {
          heading: 'Non-Refundable Deposit',
          text: 'The 30% advance deposit is non-refundable. This covers the initial allocation of engineering resources, project setup, requirements discovery sessions, and wireframing.'
        },
        {
          heading: 'Pro-Rata Settlement & Asset Handover',
          text: 'In the event of cancellation, the Client will be billed for all milestones completed or hours logged up to the cancellation date. Upon payment of the final settlement, all completed files and code will be handed over to the Client.'
        }
      ]
    },
    {
      id: 'client-responsibilities',
      num: '06',
      icon: Key,
      tag: 'Client Input',
      title: 'Client Responsibilities & Asset Provision',
      summary: 'Clients must provide required access credentials, database keys, branding assets, and feedback within 5 business days to avoid timeline delays.',
      detailedPoints: [
        {
          heading: 'Access & Credentials',
          text: 'The Client must provide necessary developer credentials (e.g. AWS, Vercel, Netlify, Domain DNS control, Stripe keys) and assets (logos, high-res images, copywriting) in a timely manner.'
        },
        {
          heading: 'Feedback Response Time limits',
          text: 'To keep development cycles on track, the Client agrees to review designs and builds and provide consolidated feedback within 5 business days of delivery.'
        },
        {
          heading: 'Delay Liability & Rescheduling',
          text: 'Delays in asset provision or reviews exceeding 10 business days will shift the final delivery date and may incur a rescheduling fee to re-allocate our development resources.'
        }
      ]
    },
    {
      id: 'warranty',
      num: '07',
      icon: HeartHandshake,
      tag: 'Support & SLAs',
      title: 'Bug Support & Post-Launch Maintenance',
      summary: 'A free 30-day bug-fixing support window is provided post-launch. Extended server management, scaling, and updates require a Service Level Agreement (SLA).',
      detailedPoints: [
        {
          heading: '30-Day Bug Support Window',
          text: 'We provide a 30-day post-launch support period where we resolve, free of charge, any codebase bugs, scripting crashes, or design discrepancies that deviate from the signed SOW specifications.'
        },
        {
          heading: 'Excluded Issues',
          text: 'Our free support does not cover bugs caused by Client modifications, hosting failures, browser version updates released post-launch, or alterations to third-party APIs.'
        },
        {
          heading: 'SLA Maintenance Packages',
          text: 'After the 30-day window, Clients can enroll in our monthly Service Level Agreement (SLA) maintenance packages covering security updates, server resource scaling, database backups, and feature modifications.'
        }
      ]
    },
    {
      id: 'confidentiality',
      num: '08',
      icon: EyeOff,
      tag: 'Confidentiality',
      title: 'Confidentiality & Non-Disclosure (NDA) Agreements',
      summary: 'We maintain strict confidentiality regarding client business processes, proprietary concepts, and user data during and after the project.',
      detailedPoints: [
        {
          heading: 'Non-Disclosure Compliance',
          text: 'We keep all proprietary business structures, algorithms, databases, design assets, and communication records shared by the Client confidential.'
        },
        {
          heading: 'Data Handling Policies',
          text: 'All client databases, API keys, and server credentials are encrypted and stored in secure password vaults. Access is limited only to developers directly assigned to the project.'
        },
        {
          heading: 'NDA Duration',
          text: 'Our confidentiality obligations remain in effect for 3 years following project completion or termination of the contract.'
        }
      ]
    },
    {
      id: 'governing-law',
      num: '09',
      icon: Gavel,
      tag: 'Jurisdiction',
      title: 'Governing Law, Dispute Resolution & Liability Caps',
      summary: 'All agreements are governed by Indian law, subject to Jodhpur, Rajasthan jurisdiction. Total liability is capped at the total amount paid.',
      detailedPoints: [
        {
          heading: 'Governing Jurisdiction',
          text: 'These terms and conditions are governed by, and construed in accordance with, the laws of India. Any legal dispute arising under this agreement is subject to the exclusive jurisdiction of the courts of Jodhpur, Rajasthan, India.'
        },
        {
          heading: 'Amicable Resolution & Arbitration',
          text: 'Before escalating to legal proceedings, both parties agree to attempt to resolve any dispute amicably through mediation and consultation with senior leadership.'
        },
        {
          heading: 'Engineering Liability Caps',
          text: 'In no event shall Morphnex Technologies be liable for any indirect, incidental, or consequential damages (including loss of profits). Total liability under any claim shall not exceed the total amount paid by the Client to Morphnex Technologies for that specific statement of work.'
        }
      ]
    }
  ];

  // IntersectionObserver to setup ScrollSpy tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    termsSections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [searchQuery]);

  // Filtering terms dynamically
  const filteredSections = termsSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.detailedPoints.some(pt => pt.heading.toLowerCase().includes(searchQuery.toLowerCase()) || pt.text.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleExpand = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const expanded: Record<string, boolean> = {};
    termsSections.forEach(sec => {
      expanded[sec.id] = true;
    });
    setExpandedSections(expanded);
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  const scrollToSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleSignatureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !agreedToTerms) return;

    // Generate verified receipt data
    const hash = 'MNX-SGN-' + Math.random().toString(36).substring(3, 9).toUpperCase() + '-' + Date.now().toString().slice(-4);
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    setSignatureHash(hash);
    setSignedDate(dateStr);
    setIsCertificateModalOpen(true);
  };

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-[#FFFFFF] font-sans pb-24">
      <SEO title="Terms & Conditions | Morphnex Technologies" description="Review the terms and conditions for partnering with Morphnex Technologies for custom software development, mobile apps, and IT consulting." />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-[rgba(255,255,255,0.08)] bg-[#0F0F0F]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C9A96E]/10 via-[#0F0F0F] to-[#0F0F0F] opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest block mb-4">Legal Agreements</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-display">Terms & <span className="text-[#C9A96E]">Conditions</span></h1>
            <p className="text-lg text-[#A0A0A0] font-medium max-w-3xl mx-auto leading-relaxed">
              Transparent, professional, and reliable terms guiding our engineering partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Dashboard Widget */}
      <section className="py-12 bg-[#121212] border-b border-[rgba(255,255,255,0.08)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Coins, title: '30% Deposit', text: 'Required upfront to allocate server architectures and UI setups.' },
              { icon: Scale, title: 'Negotiable Split', text: 'The remaining 70% is customized to specific milestone releases.' },
              { icon: Clock, title: '30-Day Support', text: 'Complimentary codebase maintenance for bugs post-launch.' },
              { icon: Gavel, title: 'Jodhpur Courts', text: 'Disputes are governed under exclusive Rajasthan jurisdiction.' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-6 hover:border-[#C9A96E]/30 transition-all duration-300">
                <div className="w-10 h-10 bg-[rgba(255,255,255,0.02)] border border-[#C9A96E]/30 text-[#C9A96E] flex items-center justify-center mb-4">
                  <stat.icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{stat.title}</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search, Filter & Expand All Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 pb-8 border-b border-[rgba(255,255,255,0.08)]">
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0] group-focus-within:text-[#C9A96E] transition-colors" />
            <input
              type="text"
              placeholder="Search legal clauses (e.g. advance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-none py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            {/* Global Expand/Collapse Buttons */}
            <div className="flex items-center border border-[rgba(255,255,255,0.08)] bg-[#1A1A1A] p-1 gap-1">
              <button
                onClick={expandAll}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#A0A0A0] hover:text-white transition-colors"
                title="Expand All Sections"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span className="hidden sm:inline">Expand All</span>
              </button>
              <div className="w-[1px] h-4 bg-[rgba(255,255,255,0.08)]"></div>
              <button
                onClick={collapseAll}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#A0A0A0] hover:text-white transition-colors"
                title="Collapse All Sections"
              >
                <Minimize2 className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span className="hidden sm:inline">Collapse All</span>
              </button>
            </div>

            <button
              onClick={() => window.print()}
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-3 border border-[#C9A96E]/40 hover:border-[#C9A96E] bg-[rgba(255,255,255,0.02)] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-[#0F0F0F] active:scale-95"
            >
              <Printer className="w-4 h-4" />
              Print Agreement
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Navigation Index Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-[#1A1A1A]/50 border border-[rgba(255,255,255,0.08)] p-8">
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-6 pb-4 border-b border-[rgba(255,255,255,0.08)]">
              Document Index
            </h3>
            <nav className="space-y-1">
              {termsSections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3.5 text-xs font-bold uppercase tracking-wider border-l transition-all duration-300 group ${
                      isActive 
                        ? 'text-white border-[#C9A96E] bg-gradient-to-r from-[#C9A96E]/5 to-transparent' 
                        : 'text-[#A0A0A0] border-transparent hover:text-[#C9A96E] hover:bg-black/10'
                    }`}
                  >
                    <span className="flex items-center gap-3.5">
                      <span className={`font-mono transition-colors duration-300 ${isActive ? 'text-[#C9A96E]' : 'text-[#A0A0A0]/40 group-hover:text-[#C9A96E]/60'}`}>
                        {section.num}
                      </span>
                      <span>{section.title.split(' & ')[0].split(' | ')[0]}</span>
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 -rotate-95 transition-transform duration-300 ${isActive ? 'translate-x-0.5 text-[#C9A96E]' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-[#A0A0A0]'}`} />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Clauses Content (Right Area) */}
          <main className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredSections.length > 0 ? (
                filteredSections.map((section, idx) => {
                  const Icon = section.icon;
                  const isExpanded = !!expandedSections[section.id];
                  const isActive = activeSection === section.id;
                  return (
                    <motion.article
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className={`bg-[#1A1A1A]/80 backdrop-blur-sm border p-8 md:p-10 transition-all duration-500 relative group cursor-pointer ${
                        isActive
                          ? 'border-[#C9A96E] shadow-[0_15px_40px_rgba(201,169,110,0.04)] bg-[#1D1D1D]/90'
                          : section.isSpecial
                          ? 'border-[#C9A96E]/30 hover:border-[#C9A96E]/60 bg-[#1A1A1A]/90'
                          : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]'
                      }`}
                      onClick={() => toggleExpand(section.id)}
                    >
                      {section.isSpecial && (
                        <div className="absolute top-0 right-0 bg-[#C9A96E] text-[#0F0F0F] font-bold text-[9px] uppercase tracking-widest px-4 py-1.5 font-mono">
                          Financial
                        </div>
                      )}
                      
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                            isActive || section.isSpecial
                              ? 'border-[#C9A96E] text-[#C9A96E] bg-[rgba(201,169,110,0.04)]' 
                              : 'border-[rgba(255,255,255,0.08)] text-[#A0A0A0] group-hover:border-[#C9A96E]/40 group-hover:text-[#C9A96E]'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase font-mono">Section {section.num}</span>
                              <span className="w-1 h-1 bg-[rgba(255,255,255,0.15)] rounded-full"></span>
                              <span className="text-[#A0A0A0] text-[9px] font-bold tracking-widest uppercase">{section.tag}</span>
                            </div>
                            <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">{section.title}</h2>
                          </div>
                        </div>

                        <ChevronDown className={`w-5 h-5 text-[#A0A0A0] group-hover:text-white transition-transform duration-300 mt-2 flex-shrink-0 ${isExpanded ? 'rotate-180 text-[#C9A96E]' : ''}`} />
                      </div>

                      {/* Brief Summary always visible */}
                      <p className="text-[#A0A0A0] font-medium leading-relaxed mt-6 text-sm">
                        {section.summary}
                      </p>

                      {/* Expandable detailed content wrapper */}
                      <motion.div
                        initial={false}
                        animate={isExpanded ? { height: 'auto', opacity: 1, marginTop: '24px' } : { height: 0, opacity: 0, marginTop: '0px' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-[rgba(255,255,255,0.05)]"
                      >
                        <div className="pt-6 space-y-6">
                          {section.detailedPoints.map((pt, pidx) => (
                            <div key={pidx} className="space-y-2 bg-black/10 border border-[rgba(255,255,255,0.01)] p-5 hover:border-[rgba(201,169,110,0.15)] transition-all duration-300">
                              <h3 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-3.5">
                                <div className="w-5 h-5 border border-[#C9A96E]/20 text-[#C9A96E] flex items-center justify-center flex-shrink-0 bg-[rgba(201,169,110,0.02)]">
                                  <Check className="w-3 h-3" />
                                </div>
                                {pt.heading}
                              </h3>
                              <p className="text-[#A0A0A0] text-sm leading-relaxed pl-8.5 font-medium">{pt.text}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.article>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-12 text-center text-[#A0A0A0]"
                >
                  <p className="text-lg font-bold mb-2">No matching legal clauses found.</p>
                  <p className="text-sm">Try searching for other terms like "advance", "payment", or "SLA".</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interactive Digital Signature Block (At the bottom of terms content) */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#121212] border border-[rgba(255,255,255,0.08)] p-8 md:p-12 mt-12 relative overflow-hidden"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A96E]/5 blur-[80px] pointer-events-none"></div>
              
              <h2 className="text-2xl font-black uppercase text-white mb-4 tracking-tight">Agreement Acceptance</h2>
              <p className="text-sm text-[#A0A0A0] font-medium leading-relaxed mb-8">
                If you are a Client preparing to engage with Morphnex, you may digitally sign this document to confirm alignment on the project setup, including the **30% advance deposit** and **negotiable milestone schedules**.
              </p>

              <form onSubmit={handleSignatureSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-white uppercase tracking-widest">Signatory Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Laxit Jangid"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="w-full bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] py-3 px-4 text-sm text-white focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-white uppercase tracking-widest">Company / Entity Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Morphnex Technologies"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] py-3 px-4 text-sm text-white focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="accept-checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                    className="w-4 h-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] accent-[#C9A96E] mt-1 cursor-pointer"
                  />
                  <label htmlFor="accept-checkbox" className="text-xs text-[#A0A0A0] leading-relaxed cursor-pointer font-medium select-none">
                    I have thoroughly read, understood, and agree to follow these Terms and Conditions, including the 30% deposit policies.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!clientName.trim() || !agreedToTerms}
                  className={`w-full inline-flex items-center justify-center gap-3 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                    clientName.trim() && agreedToTerms
                      ? 'bg-[#C9A96E] text-[#0F0F0F] hover:bg-white cursor-pointer shadow-[0_0_20px_rgba(201,169,110,0.15)] active:scale-98'
                      : 'bg-[#1A1A1A] text-[#A0A0A0]/40 border border-[rgba(255,255,255,0.04)] cursor-not-allowed'
                  }`}
                >
                  <FileCheck className="w-4 h-4" />
                  Sign & Accept Terms
                </button>
              </form>
            </motion.section>
          </main>
        </div>
      </section>

      {/* Signature Certificate Modal (Overlay) */}
      <AnimatePresence>
        {isCertificateModalOpen && signatureHash && signedDate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertificateModalOpen(false)}
              className="absolute inset-0 bg-[#0F0F0F]/90 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="bg-[#1A1A1A] border border-[#C9A96E] max-w-lg w-full p-8 md:p-10 shadow-2xl relative overflow-hidden text-center z-10"
            >
              <button 
                onClick={() => setIsCertificateModalOpen(false)}
                className="absolute top-4 right-4 text-[#A0A0A0] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 border border-[#C9A96E] bg-[rgba(201,169,110,0.03)] text-[#C9A96E] flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black uppercase text-white mb-2 tracking-tight">Terms Authorized</h3>
              <p className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-8 font-mono">Reference Hash: {signatureHash}</p>

              <div className="border-y border-[rgba(255,255,255,0.08)] py-6 mb-8 text-left space-y-4 font-medium text-sm text-[#A0A0A0]">
                <div className="flex justify-between">
                  <span>Signatory Name:</span>
                  <span className="text-white font-bold">{clientName}</span>
                </div>
                {clientCompany && (
                  <div className="flex justify-between">
                    <span>Company Name:</span>
                    <span className="text-white font-bold">{clientCompany}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Signed Timestamp:</span>
                  <span className="text-white font-bold">{signedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scope Protected:</span>
                  <span className="text-white font-bold">Confidential & Encrypted</span>
                </div>
                <div className="flex justify-between">
                  <span>Deposit Standard:</span>
                  <span className="text-[#C9A96E] font-bold">30% Advance deposit agreed</span>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="w-full inline-flex items-center justify-center gap-3 border border-[#C9A96E] bg-transparent py-4 text-xs font-bold uppercase tracking-widest text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0F0F0F] transition-all duration-300"
              >
                <Printer className="w-4 h-4" />
                Print Certificate
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

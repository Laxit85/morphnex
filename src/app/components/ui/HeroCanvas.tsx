export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#C9A96E]/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#1A1A1A] rounded-full blur-[160px] pointer-events-none" />

      {/* GPU 3D Floating Geometric Elements */}
      <div className="hidden md:block absolute right-[10%] top-[25%] w-80 h-80 perspective-1000">
        {/* Element 1: Gold Metallic 3D Ring */}
        <div 
          className="absolute top-0 right-4 w-44 h-44 rounded-full border border-[#C9A96E]/50 bg-gradient-to-br from-[#C9A96E]/20 via-transparent to-[#C9A96E]/5 shadow-[0_0_50px_rgba(201,169,110,0.15)] backdrop-blur-sm"
          style={{
            transform: 'rotateX(45deg) rotateY(-15deg) translateZ(30px)',
            animation: 'heroFloat 6s ease-in-out infinite'
          }}
        />

        {/* Element 2: Dark Architectural Diamond Card */}
        <div 
          className="absolute bottom-4 left-0 w-48 h-48 border border-[rgba(255,255,255,0.1)] bg-[#1A1A1A]/90 backdrop-blur-xl shadow-2xl p-5"
          style={{
            transform: 'rotateX(25deg) rotateY(25deg) rotateZ(-10deg)',
            animation: 'heroFloat 8s ease-in-out infinite 1s'
          }}
        >
          <div className="w-full h-full border border-[#C9A96E]/30 flex flex-col justify-between p-3">
            <div className="flex justify-between items-center">
              <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
              <span className="text-[9px] font-mono text-[#A0A0A0] tracking-widest uppercase">MORPHNEX v2.0</span>
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#FFFFFF] uppercase tracking-widest">Enterprise Architecture</div>
              <div className="text-[8px] text-[#C9A96E] font-mono mt-1">99.99% UPTIME</div>
            </div>
          </div>
        </div>

        {/* Element 3: Gold Glowing Sphere Pill */}
        <div 
          className="absolute top-1/2 right-0 w-24 h-24 rounded-full bg-gradient-to-tr from-[#C9A96E] to-[#FFFFFF] opacity-80 blur-[2px] shadow-[0_0_40px_rgba(201,169,110,0.4)]"
          style={{
            transform: 'translateZ(60px)',
            animation: 'heroFloat 5s ease-in-out infinite 2s'
          }}
        />
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px) rotateX(25deg) rotateY(15deg);
          }
          50% {
            transform: translateY(-18px) rotateX(20deg) rotateY(20deg);
          }
        }
      `}</style>
    </div>
  );
}

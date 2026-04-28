import heroBg from '../assets/picnic-friends.jpeg';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Darker Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-bg-cream/90" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 flex flex-col items-center max-w-4xl mt-20">
        <span 
          className="text-bg-cream uppercase tracking-[0.5em] text-xs md:text-sm mb-6 font-bold animate-fade-in" 
          style={{ animationDelay: '0.5s', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
        >
          Diseño de Experiencias Exclusivas
        </span>
        
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-12 tracking-tight leading-[0.9] animate-slide-up" 
          style={{ animationDelay: '0.8s', textShadow: '0 8px 24px rgba(0,0,0,0.6)' }}
        >
          El arte de <br/> <span className="italic font-light">celebrar</span>
        </h1>
        
        <button 
          onClick={scrollToServices}
          className="group flex flex-col items-center gap-4 text-white mt-8 animate-fade-in"
          style={{ animationDelay: '1.5s', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          <span className="text-xs tracking-[0.4em] uppercase font-bold opacity-90 group-hover:opacity-100 transition-opacity">
            Explorar Experiencias
          </span>
          <div className="w-[2px] h-12 bg-white/30 overflow-hidden relative shadow-lg">
            <div className="w-full h-full bg-white absolute top-0 left-0 animate-[scroll-down_2s_ease-in-out_infinite]" />
          </div>
        </button>
      </div>

      {/* Global styles for these animations */}
      <style jsx global>{`
        @keyframes slow-pan {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.1) translate(-1%, -1%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import logo from '../assets/avila_picnic_sin_blanco.svg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src={logo} 
            alt="Ávila Picnic Logo" 
            className={`transition-all duration-500 ease-in-out ${scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'}`}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {['CÓMO FUNCIONA', 'SERVICIOS', 'AVILA KITS', 'NOSOTROS', 'CONTACTO'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="text-xs tracking-[0.3em] font-sans font-bold text-primary hover:text-accent transition-colors duration-300"
              style={{ textShadow: scrolled ? 'none' : '0px 2px 4px rgba(255,255,255,0.8)' }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-primary hover:text-accent transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg animate-in fade-in zoom-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

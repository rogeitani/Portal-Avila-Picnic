import { useEffect, useRef } from 'react';
import friendsImg from '../assets/PICNICS_TYPES/PICNIC_WITH_FRIENDS/Picnic_with_Friends_1.png';
import paintImg from '../assets/PICNICS_TYPES/PICNIC_AND_PAINT/Picnic_and_Paint_1.png';
import baseImg from '../assets/picnic-base.png';

const servicesData = [
  {
    id: "friends",
    title: "Picnic with Friends",
    subtitle: "CONEXIÓN & ELEGANCIA",
    description: "Diseñado para compartir y crear recuerdos. Vajilla premium, cojines de lujo y un ambiente creado meticulosamente para ti y los tuyos.",
    image: friendsImg,
    align: "left"
  },
  {
    id: "paint",
    title: "Picnic & Paint",
    subtitle: "ARTE EN LA NATURALEZA",
    description: "Despierta tu lado creativo. Caballetes de madera, lienzos y una exquisita tabla de quesos para inspirar tu obra maestra.",
    image: paintImg,
    align: "right"
  },
  {
    id: "base",
    title: "Picnic Base",
    subtitle: "LA ESENCIA DEL LUJO",
    description: "Minimalismo en su máxima expresión. Una manta de lino, canasta artesanal y el escenario perfecto para desconectar del mundo.",
    image: baseImg,
    align: "left"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="w-full bg-bg-cream">
      {servicesData.map((service, index) => (
        <div key={service.id} className="relative h-screen w-full flex items-center overflow-hidden sticky top-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 scale-105 transition-transform duration-[10s] hover:scale-100"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
          
          {/* Stronger Gradient for Text Readability */}
          <div className="absolute inset-0 z-10 bg-black/20" />
          <div className={`absolute inset-0 z-10 bg-gradient-to-${service.align === 'left' ? 'r' : 'l'} from-black/80 via-black/40 to-transparent md:w-2/3 lg:w-1/2`} />
          <div className="absolute inset-0 z-10 bg-black/50 md:hidden" />

          {/* Content */}
          <div className={`relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16 flex ${service.align === 'right' ? 'justify-end' : 'justify-start'}`}>
            <div className="max-w-xl text-white">
              <span 
                className="text-xs md:text-sm tracking-[0.4em] font-bold uppercase opacity-90 mb-4 block"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
              >
                {service.subtitle}
              </span>
              <h2 
                className="text-6xl md:text-8xl font-serif mb-8 tracking-tighter leading-none"
                style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}
              >
                {service.title}
              </h2>
              <p 
                className="font-sans text-lg md:text-xl font-light leading-relaxed opacity-100 mb-10"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
              >
                {service.description}
              </p>
              
              <button 
                className="border-2 border-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

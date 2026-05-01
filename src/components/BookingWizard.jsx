import React, { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';

// Color Palette Assets
import azules from '../assets/Paleta_de_Colores/Azules.png';
import beigeNaranja from '../assets/Paleta_de_Colores/Beige_Naranja.png';
import rojoBeige from '../assets/Paleta_de_Colores/Rojo_Beige.png';
import rojoNaranjaBeige from '../assets/Paleta_de_Colores/Rojo_Naranja_Beige.png';
import rosados from '../assets/Paleta_de_Colores/Rosados.png';

// Picnic Type Assets (using existing ones)
import friendsImg from '../assets/PICNICS_TYPES/PICNIC_WITH_FRIENDS/Picnic_with_Friends_1.png';
import paintImg from '../assets/PICNICS_TYPES/PICNIC_AND_PAINT/Picnic_and_Paint_1.png';
import baseImg from '../assets/picnic-base.png';

const PICNIC_TYPES = [
  {
    id: "friends",
    title: "Picnic with Friends",
    description: "Conexión y elegancia para compartir.",
    details: ["Mesa de picnic", "Alfombra y cojines", "Vajilla completa", "Arreglo floral"],
    image: friendsImg
  },
  {
    id: "paint",
    title: "Picnic & Paint",
    description: "Despierta tu lado creativo al aire libre.",
    details: ["Caballetes y lienzos", "Pinturas y pinceles", "Mesa de picnic", "Hielera y copas"],
    image: paintImg
  },
  {
    id: "base",
    title: "Picnic Base",
    description: "La esencia minimalista del picnic.",
    details: ["Mesas de picnic", "Alfombra y cojines", "Camino de mesa", "Arreglo floral"],
    image: baseImg
  },
  {
    id: "custom",
    title: "Personalizado",
    description: "Crea el picnic de tus sueños desde cero.",
    details: ["Diseño a medida", "Logística personalizada", "Tú eliges cada detalle"],
    image: null // Will use a placeholder or icon
  }
];

const COLORS = [
  { name: 'Azules', hex: '#A5C4D4', image: azules },
  { name: 'Beige & Naranja', hex: '#E6B89C', image: beigeNaranja },
  { name: 'Rojo & Beige', hex: '#C1666B', image: rojoBeige },
  { name: 'Mezcla Cálida', hex: '#D4A373', image: rojoNaranjaBeige },
  { name: 'Rosados', hex: '#E5C7C0', image: rosados }
];

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    guests: 2,
    date: '',
    location: '',
    type: null,
    color: COLORS[0],
    customDetails: '',
    name: '',
    phone: ''
  });

  const carouselRef = useRef(null);

  // Dynamic SEO Microdata (GEO Optimization)
  React.useEffect(() => {
    const schemaId = 'dynamic-booking-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Reserva de Picnic Personalizado",
      "description": `Configuración de experiencia para ${formData.guests} personas con paleta ${formData.color.name}.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Ávila Picnic"
      },
      "offers": {
        "@type": "Offer",
        "category": formData.type?.title || "Personalizado"
      }
    };
    script.innerHTML = JSON.stringify(schema);
  }, [formData]);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const generateWhatsAppLink = () => {
    const phone = "584125889894";
    let message = "¡Hola! Quisiera solicitar una cotización para un picnic personalizado:%0A%0A";
    message += `• *Nombre*: ${formData.name}%0A`;
    message += `• *WhatsApp*: ${formData.phone}%0A`;
    message += `• *Invitados*: ${formData.guests}%0A`;
    message += `• *Fecha*: ${formData.date || 'Por definir'}%0A`;
    message += `• *Tipo*: ${formData.type?.title || 'Personalizado'}%0A`;
    message += `• *Paleta*: ${formData.color.name}%0A`;
    if (formData.customDetails) {
      message += `• *Detalles*: ${formData.customDetails}%0A`;
    }
    message += "%0A¿Podrían contactarme para los detalles finales?";
    
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <section id="como-funciona" className="w-full bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            {[1, 2, 3].map(s => (
              <div 
                key={s} 
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-accent' : 'bg-primary/10'}`}
              />
            ))}
          </div>
          <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-2 block">
            Paso 0{step} de 03
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary tracking-tighter">
            {step === 1 && "Comencemos con lo básico"}
            {step === 2 && "Diseña tu Estética"}
            {step === 3 && "Hazlo Realidad"}
          </h2>
        </div>

        {/* Step 1: Lo Básico */}
        {step === 1 && (
          <div className="space-y-12 animate-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Guests */}
              <div className="space-y-6">
                <label className="text-xs uppercase tracking-widest text-primary/40 font-bold">Cantidad de Personas</label>
                <div className="flex items-center gap-8">
                  <button 
                    onClick={() => updateFormData('guests', Math.max(1, formData.guests - 1))}
                    className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all"
                  >
                    -
                  </button>
                  <span className="text-6xl font-serif text-primary w-20 text-center">{formData.guests}</span>
                  <button 
                    onClick={() => updateFormData('guests', formData.guests + 1)}
                    className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Date */}
              <div className="space-y-6">
                <label className="text-xs uppercase tracking-widest text-primary/40 font-bold">Fecha Ideal (Opcional)</label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => updateFormData('date', e.target.value)}
                    className="w-full bg-primary/[0.02] border-b border-primary/10 py-4 px-2 outline-none focus:border-accent transition-colors font-light"
                  />
                  <p className="text-[10px] text-primary/30 mt-2 uppercase tracking-widest">*Sujeto a disponibilidad</p>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <button 
                onClick={handleNext}
                className="bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all duration-500 shadow-xl"
              >
                Continuar al diseño
              </button>
            </div>
          </div>
        )}

        {/* Step 2: La Estética */}
        {step === 2 && (
          <div className="space-y-16 animate-premium">
            {/* Picnic Type Selector */}
            <div className="space-y-8">
              <label className="text-xs uppercase tracking-widest text-primary/40 font-bold">Tipo de Experiencia</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PICNIC_TYPES.map(type => (
                  <button 
                    key={type.id}
                    onClick={() => updateFormData('type', type)}
                    className={`p-6 rounded-[30px] border text-left transition-all duration-500 ${
                      formData.type?.id === type.id 
                        ? 'border-accent bg-accent/5 shadow-lg' 
                        : 'border-primary/5 bg-white hover:border-accent/30'
                    }`}
                  >
                    <h3 className="font-serif text-xl text-primary mb-2">{type.title}</h3>
                    <p className="text-[10px] text-primary/50 uppercase tracking-widest leading-relaxed">
                      {type.id === 'custom' ? "Crea el picnic de tus sueños desde cero" : type.description}
                    </p>
                    {formData.type?.id === type.id && (
                      <ul className="mt-4 space-y-1 animate-premium">
                        {type.details.map((d, i) => (
                          <li key={i} className="text-[9px] text-accent uppercase tracking-tighter">• {d}</li>
                        ))}
                      </ul>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Pantone Color Picker */}
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <label className="text-xs uppercase tracking-widest text-primary/40 font-bold">Paleta de Colores</label>
                <div className="flex gap-4">
                  <button onClick={() => scrollCarousel('left')} className="p-2 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button onClick={() => scrollCarousel('right')} className="p-2 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-4">
                {COLORS.map(color => (
                  <button 
                    key={color.name}
                    onClick={() => updateFormData('color', color)}
                    className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-500 ${
                      formData.color.name === color.name ? 'ring-2 ring-accent ring-offset-4' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="absolute inset-0" style={{ backgroundColor: color.hex }} />
                    <div className="absolute inset-x-0 bottom-0 bg-white p-2 text-center">
                      <span className="text-[8px] font-bold uppercase tracking-tighter text-primary">{color.name}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Filtered Carousel */}
              <div 
                ref={carouselRef}
                className="flex gap-6 overflow-x-hidden no-scrollbar"
              >
                <div className="flex-shrink-0 w-full md:w-[600px] aspect-video rounded-[40px] overflow-hidden bg-primary/5">
                  <img 
                    key={formData.color.name}
                    src={formData.color.image} 
                    alt={formData.color.name} 
                    className="w-full h-full object-cover animate-premium"
                  />
                </div>
                {/* Adding a few placeholder/extra slides for the same palette to show carousel effect */}
                <div className="flex-shrink-0 w-full md:w-[600px] aspect-video rounded-[40px] overflow-hidden bg-primary/5 opacity-50">
                  <img src={formData.color.image} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <button onClick={handleBack} className="px-8 py-5 rounded-full border border-primary/10 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/5 transition-all">
                Volver
              </button>
              <button 
                onClick={handleNext}
                className="flex-1 bg-primary text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all duration-500 shadow-xl"
              >
                Personalizar detalles
              </button>
            </div>
          </div>
        )}

        {/* Step 3: El Sueño */}
        {step === 3 && (
          <div className="space-y-12 animate-premium">
            {/* Lienzo en Blanco */}
            <div className="space-y-6">
              <label className="text-xs uppercase tracking-widest text-primary/40 font-bold">Lienzo en Blanco</label>
              <textarea 
                placeholder="Todos los detalles de como soñaste tu picnic aquí..."
                value={formData.customDetails}
                onChange={(e) => updateFormData('customDetails', e.target.value)}
                className="w-full bg-primary/[0.02] border border-primary/10 rounded-[30px] p-8 min-h-[200px] outline-none focus:border-accent transition-colors font-light text-lg"
              />
            </div>

            {/* Final Contact Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-primary/40 font-bold">Tu Nombre</label>
                <input 
                  type="text" 
                  placeholder="Ej. Maria Perez"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full bg-transparent border-b border-primary/10 py-4 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-primary/40 font-bold">Tu WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="Ej. +58 412..."
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full bg-transparent border-b border-primary/10 py-4 outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-12">
              <button onClick={handleBack} className="px-8 py-5 rounded-full border border-primary/10 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/5 transition-all">
                Volver
              </button>
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 flex items-center justify-center bg-primary text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all duration-500 shadow-xl ${
                  (!formData.name || !formData.phone) ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                Enviar Solicitud vía WhatsApp
              </a>
            </div>
            
            <p className="text-center text-[10px] text-primary/30 uppercase tracking-widest">
              Al enviar, nos pondremos en contacto contigo vía WhatsApp para confirmar disponibilidad y presupuesto final.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

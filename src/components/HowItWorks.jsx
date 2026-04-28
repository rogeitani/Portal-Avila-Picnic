import React, { useEffect } from 'react';

const steps = [
  {
    number: "01",
    title: "Define tu Momento",
    description: "Indícanos la cantidad de invitados, la fecha ideal y el lugar en Caracas donde deseas crear esta experiencia única.",
    details: ["Manejo de logística integral", "Selección de locaciones exclusivas"]
  },
  {
    number: "02",
    title: "Personaliza tu Estilo",
    description: "Elige entre nuestros tipos de picnic y la paleta de colores que mejor represente tu visión (Rosados, Azules, Beige y más).",
    details: ["Curaduría estética", "Detalles personalizados"]
  },
  {
    number: "03",
    title: "Reserva con Detalles",
    description: "Confirmamos cada elemento de tu reserva para asegurar que la ejecución sea impecable y sofisticada.",
    details: ["Atención al detalle", "Garantía de calidad"]
  },
  {
    number: "04",
    title: "Vive la Experiencia",
    description: "Nosotros nos encargamos de todo el montaje. Tú solo llegas a disfrutar de un momento inolvidable.",
    details: ["Montaje profesional", "Desmontaje incluido"]
  }
];

export default function HowItWorks() {
  // Schema.org HowTo for GEO/SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo reservar una experiencia de picnic de lujo en Caracas",
    "description": "Sigue estos 4 pasos para crear un momento inolvidable con Ávila Picnic en Caracas.",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": step.description
      }]
    }))
  };

  return (
    <section id="como-funciona" className="w-full bg-[#FDFBF7] py-32 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Metodología</span>
          <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tighter leading-tight">
            ¿Cómo Funciona?
          </h2>
          <p className="mt-6 text-xl font-light text-primary/70 max-w-xl">
            Diseñamos experiencias sin complicaciones. Tu único trabajo es elegir el momento; nosotros creamos la magia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/50 backdrop-blur-sm rounded-[30px] border border-primary/5 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-serif text-accent/30 group-hover:text-accent/60 transition-colors duration-500">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-primary mb-4">{step.title}</h3>
              <p className="text-primary/70 font-light text-sm leading-relaxed mb-6">
                {step.description}
              </p>
              
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-[10px] uppercase tracking-widest text-primary/40">
                    <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Local SEO Text Box */}
        <div className="mt-20 p-8 border-l border-accent/20 bg-primary/[0.02]">
          <p className="text-sm italic text-primary/60 font-light max-w-3xl">
            *Servicio exclusivo para la zona metropolitana de Caracas. Especialistas en transformar espacios cotidianos en escenarios de cuentos. Cada detalle es curado para garantizar experiencias sensoriales únicas.
          </p>
        </div>
      </div>
    </section>
  );
}

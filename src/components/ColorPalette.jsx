import React from 'react';
import azules from '../assets/Paleta_de_Colores/Azules.png';
import beigeNaranja from '../assets/Paleta_de_Colores/Beige_Naranja.png';
import rojoBeige from '../assets/Paleta_de_Colores/Rojo_Beige.png';
import rojoNaranjaBeige from '../assets/Paleta_de_Colores/Rojo_Naranja_Beige.png';
import rosados from '../assets/Paleta_de_Colores/Rosados.png';

const palettes = [
  { name: 'Azules', image: azules, description: 'Serenidad y elegancia clásica.' },
  { name: 'Beige & Naranja', image: beigeNaranja, description: 'Calidez terrenal y calidez natural.' },
  { name: 'Rojo & Beige', image: rojoBeige, description: 'Pasión equilibrada con neutralidad.' },
  { name: 'Mezcla Cálida', image: rojoNaranjaBeige, description: 'Energía vibrante y acogedora.' },
  { name: 'Rosados', image: rosados, description: 'Delicadeza, romance y suavidad.' }
];

export default function ColorPalette() {
  return (
    <section className="w-full bg-[#FDFBF7] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Personalización</span>
          <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tighter leading-tight">
            Nuestras Paletas
          </h2>
          <p className="mt-6 text-xl font-light text-primary/70 max-w-2xl mx-auto">
            Elige el alma de tu evento. Cada paleta está diseñada para armonizar con el entorno y crear la atmósfera perfecta.
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
          {palettes.map((palette, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[400px] snap-center group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[30px] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img
                  src={palette.image}
                  alt={palette.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="px-4">
                <h3 className="text-2xl font-serif text-primary mb-2">{palette.name}</h3>
                <p className="text-sm text-primary/50 font-light">{palette.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/30 flex items-center">
            <span className="mr-4">Desliza para explorar</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
}

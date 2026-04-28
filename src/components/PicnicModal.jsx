import React from 'react';

export default function PicnicModal({ isOpen, onClose, picnic }) {
  if (!isOpen || !picnic) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
        <div className="absolute top-6 right-6 z-10">
          <button 
            onClick={onClose}
            className="p-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-300 shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Sidebar */}
          <div className="hidden md:block h-full min-h-[400px]">
            <img src={picnic.image} alt={picnic.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-10 md:p-12 overflow-y-auto max-h-[80vh]">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4 block">Detalles de la Experiencia</span>
            <h3 className="text-4xl font-serif text-primary mb-8 tracking-tighter">{picnic.title}</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/40 font-bold mb-4">¿Qué incluye?</p>
                <ul className="space-y-3">
                  {picnic.items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-primary/70 font-light">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {picnic.extra && (
                <div className="pt-6 border-t border-primary/5">
                  <p className="text-xs uppercase tracking-widest text-primary/40 font-bold mb-2">Además:</p>
                  <p className="text-sm text-primary/60 italic font-light">
                    {picnic.extra}
                  </p>
                </div>
              )}
            </div>

            <button 
              onClick={() => {
                onClose();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-12 w-full bg-primary text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-accent transition-all duration-500 shadow-xl"
            >
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

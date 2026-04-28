export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/584125889894" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500/20 rounded-full scale-150 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-full text-xs font-bold tracking-widest text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        ¿Hablamos?
      </span>

      <div className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-500">
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </div>
    </a>
  )
}

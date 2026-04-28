export default function ContactForm() {
  return (
    <section id="contacto" className="py-32 px-6 bg-white border-t border-primary/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Contact Info */}
        <div className="flex-1">
          <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Hablemos</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 tracking-tighter text-primary">Diseñemos tu experiencia</h2>
          <p className="text-primary/70 font-light leading-relaxed mb-12">
            Cuéntanos qué tienes en mente. Ya sea una cita romántica, un cumpleaños o simplemente un atardecer diferente, estamos aquí para hacerlo realidad.
          </p>
          
          <div className="space-y-6 text-sm font-sans tracking-widest text-primary/80">
            <div>
              <p className="font-bold text-primary mb-1 uppercase text-xs">Email</p>
              <p>hola@avilapicnic.com</p>
            </div>
            <div>
              <p className="font-bold text-primary mb-1 uppercase text-xs">WhatsApp</p>
              <p>+58 412 588 9894</p>
            </div>
            <div>
              <p className="font-bold text-primary mb-1 uppercase text-xs">Ubicación</p>
              <p>Caracas, Venezuela</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 bg-bg-cream/50 p-8 md:p-12 rounded-[30px] border border-primary/5">
          <form className="space-y-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Nombre Completo"
                className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors font-light text-base placeholder:text-primary/40"
              />
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Correo Electrónico"
                className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors font-light text-base placeholder:text-primary/40"
              />
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Fecha del Evento"
                className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors font-light text-base placeholder:text-primary/40"
              />
            </div>
            
            <div className="relative">
              <textarea 
                placeholder="Háblanos sobre tu idea..."
                rows="4"
                className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors font-light text-base resize-none placeholder:text-primary/40"
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button className="w-full bg-primary text-bg-cream py-4 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-all duration-500 font-bold">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

import nosotrosImg from '../assets/picnic-detail.jpeg';

export default function AboutUs() {
  return (
    <section id="nosotros" className="w-full bg-bg-cream py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 lg:pr-12">
          <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Nuestra Historia</span>
          <h2 className="text-6xl md:text-7xl font-serif text-primary tracking-tighter mb-10 leading-tight">
            Creamos momentos que inspiran
          </h2>
          <div className="space-y-6 text-primary/80 font-sans font-light text-lg leading-relaxed">
            <p>
              En Ávila Picnic creemos que la belleza de la vida se encuentra en las pausas. Nacimos con el deseo de transformar lo cotidiano en algo extraordinario, fusionando la naturaleza con el lujo de los pequeños detalles.
            </p>
            <p>
              Cada experiencia que diseñamos es única, curada meticulosamente para reflejar tu personalidad y hacerte sentir en un ambiente de confort absoluto, rodeado de belleza y buen gusto.
            </p>
          </div>
          <div className="mt-12">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Oslo_signature.svg/1200px-Oslo_signature.svg.png" 
              alt="Firma" 
              className="h-16 opacity-40 filter mix-blend-multiply"
            />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[20px_100px_20px_100px] shadow-xl">
            <img 
              src={nosotrosImg} 
              alt="Sobre Nosotros" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[1px] border-white/30 m-6 rounded-[10px_80px_10px_80px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

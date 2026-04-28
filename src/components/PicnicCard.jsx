export default function PicnicCard({ image, title, vibe, features }) {
  return (
    <div className="group flex flex-col items-center text-center space-y-8 mb-20">
      <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-[80px_20px_80px_20px] shadow-2xl transition-all duration-1000 ease-in-out group-hover:rounded-[20px_80px_20px_80px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
      </div>
      
      <div className="max-w-lg px-4">
        <h3 className="text-4xl md:text-5xl font-serif mb-4 tracking-wide text-primary">{title}</h3>
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-6 font-medium">{vibe}</p>
        
        <p className="text-primary/70 font-light leading-relaxed mb-8 text-lg">
          {features.join(" • ")}
        </p>
        
        <button className="inline-block border-b border-primary pb-1 text-sm tracking-widest uppercase hover:text-accent hover:border-accent transition-all duration-500 font-semibold">
          Descubrir Detalles
        </button>
      </div>
    </div>
  )
}

import { useCart } from '../context/CartContext';
import lovelyKit from '../assets/AVILA_KITS/LOVELY_KIT/Lovely_Kit_Avila_Picnic_1.png';
import paintKit from '../assets/AVILA_KITS/PAINT_KIT/Paint_Kit_Avila_Picnic_1.png';
import fullPaintKit from '../assets/AVILA_KITS/FULL_PAINT_KIT/Full_Paint_Kit_Avila_Picnic_1.png';

const KITS = [
  {
    id: 'paint-kit',
    name: 'Paint Kit',
    price: 35.00,
    description: 'El lienzo perfecto para tu creatividad. Incluye caballete, pinturas y todos los esenciales.',
    image: paintKit,
    delay: 'md:mt-12'
  },
  {
    id: 'lovely-kit',
    name: 'Lovely Kit',
    price: 40.00,
    description: 'Un toque de sofisticación y delicadeza en cada detalle. Perfecto para momentos memorables.',
    image: lovelyKit,
    delay: ''
  },
  {
    id: 'full-paint-kit',
    name: 'Full Paint Kit',
    price: 45.00,
    description: 'La experiencia completa: arte, curaduría y degustación en un solo paquete inigualable.',
    image: fullPaintKit,
    delay: 'md:mt-12'
  }
];

export default function AvilaKits() {
  const { addToCart } = useCart();

  return (
    <section id="avila-kits" className="w-full bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Colección Exclusiva</span>
          <h2 className="text-6xl md:text-8xl font-serif text-primary tracking-tighter">Ávila Kits</h2>
          <p className="mt-8 text-xl font-light text-primary/70 max-w-2xl mx-auto">
            La esencia de nuestras experiencias, empaquetada con distinción para elevar cualquier espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {KITS.map((kit) => (
            <div key={kit.id} className={`group ${kit.delay}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-sm mb-8 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={kit.image} 
                  alt={kit.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                   <p className="text-white text-sm font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {kit.description}
                   </p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-serif text-primary mb-2">{kit.name}</h3>
                <p className="text-accent font-bold mb-6 text-lg tracking-tight">{kit.price.toFixed(2)}€</p>
                
                <button 
                  onClick={() => addToCart(kit)}
                  className="w-full py-4 border border-primary/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-primary hover:bg-primary hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

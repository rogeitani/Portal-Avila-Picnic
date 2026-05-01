import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import BookingWizard from './components/BookingWizard'
import Services from './components/Services'
import ColorPalette from './components/ColorPalette'
import AvilaKits from './components/AvilaKits'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import WhatsAppButton from './components/WhatsAppButton'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-bg-cream font-sans text-primary selection:bg-accent/30 overflow-x-hidden">
        <Header />
        
        <main>
          <Hero />
          <BookingWizard />
          <Services />
          <ColorPalette />
          <AvilaKits />
          <AboutUs />
          <ContactForm />
        </main>
        
        <WhatsAppButton />
        <CartDrawer />
      
      <footer className="py-20 border-t border-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* Social Links */}
          <div className="flex gap-8 mb-12">
            <a href="https://www.instagram.com/avilapicnic/" target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.tiktok.com/@avilapicnic" target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>

          <div className="text-center">
            <span className="text-accent uppercase tracking-[0.8em] text-[10px] md:text-xs mb-4 block font-bold">Ávila Picnic Boutique</span>
            <p className="text-[10px] font-medium tracking-[0.4em] uppercase opacity-40">
              © 2026 ÁVILA PICNIC. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </CartProvider>
  )
}

export default App

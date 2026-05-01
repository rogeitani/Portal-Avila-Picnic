import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { db, REQUESTS_PATH } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleFirestoreSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Por favor completa tu nombre y WhatsApp.");
      return false;
    }

    setIsSubmitting(true);
    try {
      // Save each kit as a separate request as per instructions
      const promises = cart.map(item => {
        const payload = {
          type: "kit",
          customerName: formData.name,
          phone: formData.phone,
          date: new Date().toISOString().split('T')[0], // Default to today or we could add a date picker
          kitType: item.originalName || `KIT: ${item.name.toUpperCase()}`,
          quantity: item.quantity,
          message: formData.message || "",
          read: false,
          createdAt: new Date().toISOString()
        };
        return addDoc(collection(db, REQUESTS_PATH), payload);
      });

      await Promise.all(promises);
      return true;
    } catch (error) {
      console.error("Error saving kit requests:", error);
      alert("Hubo un error al procesar tu pedido. Intenta de nuevo.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppCheckout = async () => {
    if (!showForm) {
      setShowForm(true);
      return;
    }

    const saved = await handleFirestoreSubmit();
    if (!saved) return;

    const phone = "584125889894";
    let messageText = `¡Hola! Quisiera realizar un pedido de Ávila Kits:%0A%0A`;
    messageText += `• *Cliente*: ${formData.name}%0A`;
    messageText += `• *WhatsApp*: ${formData.phone}%0A%0A`;
    
    cart.forEach(item => {
      messageText += `• *${item.name}* (x${item.quantity}) - ${(item.price * item.quantity).toFixed(2)}€%0A`;
    });
    
    messageText += `%0A*Total: ${cartTotal.toFixed(2)}€*%0A`;
    if (formData.message) messageText += `%0A*Nota*: ${formData.message}`;
    
    window.open(`https://wa.me/${phone}?text=${messageText}`, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-500" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out">
        <div className="p-8 flex justify-between items-center border-b border-primary/5">
          <div>
            <h2 className="text-3xl font-serif text-primary">Tu Carrito</h2>
            <p className="text-xs uppercase tracking-widest text-accent font-bold mt-1">Ávila Kits Exclusive</p>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
              </div>
              <p className="text-primary/60 font-light">Aún no has añadido momentos mágicos a tu carrito.</p>
              <button onClick={() => setIsCartOpen(false)} className="mt-8 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent pb-1">Seguir Explorando</button>
            </div>
          ) : (
            <div className="space-y-8">
              {showForm && (
                <div className="bg-primary/5 p-6 rounded-[30px] space-y-4 mb-8 animate-premium">
                  <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-primary/40 mb-4">Detalles de Entrega</h4>
                  <input 
                    type="text" placeholder="Tu Nombre completo" 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-primary/10 rounded-full px-6 py-3 text-sm focus:border-accent outline-none transition-colors"
                  />
                  <input 
                    type="tel" placeholder="Tu WhatsApp" 
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border border-primary/10 rounded-full px-6 py-3 text-sm focus:border-accent outline-none transition-colors"
                  />
                  <textarea 
                    placeholder="Dirección o nota adicional" 
                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-primary/10 rounded-[20px] px-6 py-3 text-sm focus:border-accent outline-none transition-colors min-h-[80px]"
                  />
                </div>
              )}
              
              {!showForm && cart.map((item) => (
                <div key={item.id} className="flex gap-6 group animate-premium">
                  <div className="w-24 h-24 bg-primary/5 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif text-xl text-primary">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-primary/20 hover:text-red-400 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                      </button>
                    </div>
                    <p className="text-accent font-bold text-sm mb-4">{item.price.toFixed(2)}€</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-primary/10 rounded-full px-3 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-primary/40 hover:text-primary transition-colors">-</button>
                        <span className="mx-4 text-xs font-bold text-primary w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-primary/40 hover:text-primary transition-colors">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-primary/5 space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase tracking-widest text-primary/40 font-bold">Inversión Total</span>
              <span className="text-4xl font-serif text-primary tracking-tighter">{cartTotal.toFixed(2)}€</span>
            </div>
            
            <button 
              onClick={handleWhatsAppCheckout}
              disabled={isSubmitting}
              className={`w-full bg-primary text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-xl ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-accent'}`}
            >
              {isSubmitting ? 'Procesando...' : showForm ? 'Confirmar Pedido' : 'Finalizar Pedido'}
            </button>
            {showForm && (
              <button onClick={() => setShowForm(false)} className="w-full text-[10px] uppercase tracking-widest text-primary/40 font-bold hover:text-primary transition-colors">Volver al carrito</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

# Ávila Picnic - Memory Bank

Este archivo centraliza todo el conocimiento, reglas de diseño y progreso del proyecto **Portal Ávila Picnic**. Debe ser actualizado constantemente a medida que el proyecto evolucione para mantener la coherencia técnica y visual.

## 1. Identidad Visual ("Vibe" Apple Cálido)
El diseño busca un estilo de landing page moderno y de alto impacto (inspirado en el *Storytelling Visual* de Apple), pero manteniendo la esencia **acogedora, chic y girly** de la marca.

*   **Paleta de Colores**:
    *   `primary`: **#2D4032** (Verde oscuro elegante, usado para textos principales).
    *   `accent`: **#E5C7C0** (Rosa pálido/nude, usado para detalles, botones y hover).
    *   `bg-cream`: **#FDFBF7** (Crema muy suave, usado como fondo principal para dar calidez).
*   **Tipografías**:
    *   **Títulos (Serif)**: `Cormorant Garamond` (Elegante, usada con mucho interletrado).
    *   **Cuerpo (Sans)**: `Josefin Sans` (Moderna, geométrica, limpia).
*   **Logotipo**: 
    *   Archivo principal: `avila_picnic_sin_blanco.svg` (Fondo transparente para integrarse con la web).

## 2. Estructura de Navegación
La arquitectura de información actual es una landing page de una sola página (Single Page Application) con desplazamiento suave (smooth scroll) hacia las siguientes secciones:
1.  **SERVICIOS** (`#servicios`): Experiencias inmersivas (*Picnic with Friends*, *Picnic & Paint*, *Picnic Base*).
2.  **AVILA KITS** (`#avila-kits`): Catálogo de productos (*Paint Kit*, *Lovely Kit*, *Full Paint Kit*).
3.  **NOSOTROS** (`#nosotros`): Historia de la marca.
4.  **CONTACTO** (`#contacto`): Formulario minimalista y botón flotante de WhatsApp.

## 3. Reglas de Diseño (Design Guidelines)
*   **Storytelling Visual**: Abandonar las cuadrículas simples en favor de layouts de pantalla completa (`h-screen`). Las imágenes reales deben "vender" la experiencia.
*   **Contraste y Legibilidad**: Cuando se coloquen textos blancos sobre imágenes de fondo, SIEMPRE usar un gradiente oscuro detrás (`bg-black/40` o similar) y aplicar sombras de texto fuertes (`text-shadow: 0 4px 12px rgba(0,0,0,0.6)`) para garantizar lectura.
*   **Formas Orgánicas**: Uso de bordes redondeados pronunciados o asimétricos (ej. `rounded-[20px_100px_20px_100px]`) en lugar de rectángulos rígidos.
*   **Interactividad**: Incluir micro-animaciones (fade-in, slide-up, zoom lento en imágenes de fondo tipo "slow-pan") y botones con efectos sutiles al hacer hover.
*   **Espacios en Blanco**: Usar márgenes amplios (whitespace) para transmitir lujo y exclusividad.

## 4. Progreso Técnico
*   **Stack Tecnológico**: React 19 + Vite (v8.0.10) + Tailwind CSS v4.
*   **Configuración Tailwind**: Tailwind v4 está integrado a través del plugin `@tailwindcss/vite` en `vite.config.js`. Los colores y tipografías se manejan nativamente en `index.css` usando directivas `@theme`.
*   **Componentes Construidos**:
    *   `App.jsx`: Orquestador principal.
    *   `Header.jsx`: Menú superior fijo con efecto `backdrop-blur` al hacer scroll.
    *   `Hero.jsx`: Portada 100vh animada.
    *   `Services.jsx`: Secciones inmersivas individuales.
    *   `AvilaKits.jsx`: Cuadrícula de 3 columnas para productos.
    *   `AboutUs.jsx`: Sección de historia con diseño asimétrico.
    *   `ContactForm.jsx`: Interfaz de formulario (UI lista, falta conectar backend).
    *   `WhatsAppButton.jsx`: Botón flotante pulsante enlazado a `wa.me/584125889894`.
*   **Gestión de Íconos**: Para evitar errores de resolución de dependencias en Vite, se están utilizando SVG inline en lugar de librerías externas pesadas como `lucide-react`.
*   **Skills Instaladas**:
    *   `seo-geo` (Estrategias de SEO Local)
    *   `seo` (Estrategias de SEO General)

---
*Última actualización: Diseño Base, Storytelling Visual y Configuración SEO (Fase 1 completada).*

## 5. Historial de Cambios (Incremental)

### [2026-04-28] - Sección "¿Cómo Funciona?" y Carrito de Compras
*   **¿Cómo Funciona?**: Implementada sección de 4 pasos optimizada para el mercado de Caracas.
    *   Tono: Sofisticado, enfocado en "experiencias exclusivas" y "momentos únicos".
    *   GEO: Inclusión de Schema `HowTo` para visibilidad en IA.
*   **Carrito de Compras (Avila Kits)**:
    *   `CartContext`: Gestión de estado global con React Context.
    *   `CartDrawer`: Panel lateral estilo Apple para revisión de pedidos.
    *   Checkout: Integración con WhatsApp para envío de pedidos estructurados.
*   **Ajustes SEO**: Eliminación de términos genéricos como "romántico" en favor de un lenguaje más curado y local.

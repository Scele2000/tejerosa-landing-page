<script>
  import { writable } from 'svelte/store';
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './routes/Home.svelte';
  import Catalog from './routes/Catalog.svelte';
  import About from './routes/About.svelte';
  import Contact from './routes/Contact.svelte';
  
  // Enrutamiento simple
  const route = writable('/');
  
  // Actualizar la ruta cuando cambia la URL
  function updateRoute() {
    const path = window.location.pathname || '/';
    route.set(path);
  }
  
  // Escuchar cambios en la historia del navegador
  if (typeof window !== 'undefined') {
    updateRoute();
    window.addEventListener('popstate', updateRoute);
  }
  
  let currentComponent;
  
  // Mapear rutas a componentes
  $: {
    switch($route) {
      case '/':
        currentComponent = Home;
        break;
      case '/catalogo':
        currentComponent = Catalog;
        break;
      case '/nosotros':
        currentComponent = About;
        break;
      case '/contacto':
        currentComponent = Contact;
        break;
      default:
        currentComponent = Home;
    }
  }
  
  // Función para navegar sin recargar la página
  function navigate(path) {
    window.history.pushState({}, '', path);
    route.set(path);
    return false;
  }
  
  // Exportar la función navigate para usarla en los componentes
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.appNavigate = navigate;
  }
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  
  <main class="flex-grow">
    <svelte:component this={currentComponent} />
  </main>
  
  <Footer />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    margin: 0;
    font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    /* Colores principales */
    --color-primary: #E27990;
    --color-primary-light: #F2B5C8;
    --color-primary-dark: #C95775;
    
    /* Color agua marina y variaciones */
    --color-secondary: #5ABFBD;
    --color-secondary-light: #8FD3D2;
    --color-secondary-dark: #4AA09E;
    
    /* Color acento */
    --color-accent: #F8E1A9;
    
    /* Colores neutrales */
    --color-neutral-light: #F7F5F8;
    --color-neutral: #E9E4ED;
    --color-neutral-dark: #D1CBD9;
    
    /* Variables para glassmorphism */
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(255, 255, 255, 0.5);
    --glass-shadow: rgba(0, 0, 0, 0.05);
    
    background-color: white;
    color: #333;
    line-height: 1.6;
  }
  
  /* Estilos globales para glassmorphism */
  :global(.glass) {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
  }
  
  /* Estilos para animaciones */
  :global(.fade-in) {
    animation: fadeIn 0.5s ease-in;
  }
  
  :global(.slide-up) {
    animation: slideUp 0.5s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  /* Mejoras de interacción */
  :global(.hover-lift) {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  :global(.hover-lift:hover) {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  /* Efectos de texto avanzados */
  :global(.gradient-text) {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  }
  
  :global(.text-shadow) {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Bordes con gradiente */
  :global(.gradient-border) {
    position: relative;
    border-radius: 0.5rem;
    padding: 1px;
    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  }
  
  :global(.gradient-border::before) {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 0.4rem;
    background: white;
    z-index: -1;
  }
  
  :global(.gradient-border > *) {
    position: relative;
    z-index: 1;
  }
  
  /* Ajustes responsive adicionales */
  @media (max-width: 640px) {
    :global(.container) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    :global(h1) {
      font-size: 2rem !important;
    }
    
    :global(h2) {
      font-size: 1.75rem !important;
    }
  }
  
  /* Scroll estilizado */
  :global(::-webkit-scrollbar) {
    width: 8px;
    height: 8px;
  }
  
  :global(::-webkit-scrollbar-track) {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  :global(::-webkit-scrollbar-thumb) {
    background: linear-gradient(var(--color-primary-light), var(--color-primary));
    border-radius: 4px;
  }
  
  :global(::-webkit-scrollbar-thumb:hover) {
    background: var(--color-primary-dark);
  }
  
  /* Efectos de transición para enlaces */
  :global(a) {
    position: relative;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  :global(a:not(.btn):after) {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background: currentColor;
    transition: width 0.3s;
  }
  
  :global(a:not(.btn):hover:after) {
    width: 100%;
  }
  
  /* Estilos para botones con efecto de animación */
  :global(.btn-animated) {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  :global(.btn-animated::before) {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.7s;
    z-index: -1;
  }
  
  :global(.btn-animated:hover::before) {
    left: 100%;
  }
</style>

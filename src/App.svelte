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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
    --glass-bg: rgba(255, 255, 255, 0.8);
    --glass-border: rgba(255, 255, 255, 0.5);
    --glass-shadow: rgba(0, 0, 0, 0.05);
    
    background-color: white;
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
  
  /* Mejoras responsive */
  @media (max-width: 640px) {
    :global(.container) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>

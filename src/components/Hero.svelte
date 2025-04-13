<script>
  import { onMount } from 'svelte';
  
  // Propiedades personalizables para el hero
  export let title = "Arte y Decoración";
  export let subtitle = "Transforma tus espacios con nuestros productos artísticos y decorativos";
  
  // Función de navegación
  let navigate;
  
  onMount(() => {
    // Obtener la función de navegación del componente padre
    // @ts-ignore
    navigate = window.appNavigate;
  });
  
  function handleNavigation(path, e) {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    }
  }
</script>

<section class="relative overflow-hidden py-20 md:py-32">
  <!-- Fondo con patrón y gradiente -->
  <div class="absolute inset-0 bg-gradient-to-br from-primary-light/40 to-secondary-light/30 z-0"></div>
  
  <!-- Círculos decorativos -->
  <div class="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"></div>
  <div class="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary/30 blur-xl"></div>
  <div class="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-accent/20 blur-lg"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-800 slide-up">
        {title}
      </h1>
      
      <p class="text-lg md:text-xl text-gray-600 mb-10 fade-in" style="animation-delay: 0.2s">
        {subtitle}
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in" style="animation-delay: 0.4s">
        <a 
          href="/catalogo" 
          on:click={(e) => handleNavigation('/catalogo', e)}
          class="glass hover-lift px-8 py-3 rounded-full text-primary-dark font-medium transition-all"
        >
          Ver Catálogo
        </a>
        
        <a 
          href="/nosotros" 
          on:click={(e) => handleNavigation('/nosotros', e)}
          class="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover-lift transition-all"
        >
          Sobre Nosotros
        </a>
      </div>
    </div>
  </div>
  
  <!-- Elemento decorativo inferior -->
  <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 z-0"></div>
</section>

<style>
  /* Nombres de variables de colores para mayor legibilidad */
  :root {
    --primary: var(--color-primary);
    --primary-light: var(--color-primary-light);
    --primary-dark: var(--color-primary-dark);
    --secondary: var(--color-secondary);
    --secondary-light: var(--color-secondary-light);
    --accent: var(--color-accent);
  }
  
  /* Animaciones específicas para este componente */
  .slide-up {
    animation: heroSlideUp 0.8s ease-out forwards;
  }
  
  .fade-in {
    animation: heroFadeIn 0.8s ease-in forwards;
    opacity: 0;
  }
  
  @keyframes heroSlideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes heroFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
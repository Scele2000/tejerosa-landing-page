<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;

  // Función de navegación
  let navigate;
  
  onMount(() => {
    // Obtener la función de navegación del componente padre
    // @ts-ignore
    navigate = window.appNavigate;
  });
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
  }
  
  function handleNavigation(path, e) {
    e.preventDefault();
    if (navigate) {
      navigate(path);
      closeMenu();
    }
  }
</script>

<nav class="bg-white/90 backdrop-blur-sm fixed w-full z-10 transition-all duration-300 shadow-sm">
  <div class="container mx-auto px-4 py-3">
    <div class="flex justify-between items-center">
      <a href="/" on:click={(e) => handleNavigation('/', e)} class="text-3xl font-serif tracking-wider text-[#E27990] hover:text-[#C95775] transition-colors">
        Tejerosa
      </a>
      
      <!-- Menu para desktop -->
      <div class="hidden md:flex space-x-8">
        <a href="/" on:click={(e) => handleNavigation('/', e)} class="text-gray-700 hover:text-[#E27990] font-medium transition-colors duration-200">Inicio</a>
        <a href="/catalogo" on:click={(e) => handleNavigation('/catalogo', e)} class="text-gray-700 hover:text-[#E27990] font-medium transition-colors duration-200">Catálogo</a>
        <a href="/nosotros" on:click={(e) => handleNavigation('/nosotros', e)} class="text-gray-700 hover:text-[#E27990] font-medium transition-colors duration-200">Nosotros</a>
        <a href="/contacto" on:click={(e) => handleNavigation('/contacto', e)} class="text-gray-700 hover:text-[#E27990] font-medium transition-colors duration-200">Contacto</a>
      </div>
      
      <!-- Botón de menú para móvil -->
      <button 
        class="md:hidden text-gray-800 focus:outline-none" 
        on:click={toggleMenu}
        aria-label="Menú de navegación"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Menú móvil desplegable -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 transition-all duration-500 ease-in-out" 
           transition:slide={{ duration: 300 }}>
        <div class="flex flex-col space-y-3">
          <a href="/" on:click={(e) => handleNavigation('/', e)} class="text-gray-700 hover:text-[#E27990] font-medium py-2 transition-colors duration-200">Inicio</a>
          <a href="/catalogo" on:click={(e) => handleNavigation('/catalogo', e)} class="text-gray-700 hover:text-[#E27990] font-medium py-2 transition-colors duration-200">Catálogo</a>
          <a href="/nosotros" on:click={(e) => handleNavigation('/nosotros', e)} class="text-gray-700 hover:text-[#E27990] font-medium py-2 transition-colors duration-200">Nosotros</a>
          <a href="/contacto" on:click={(e) => handleNavigation('/contacto', e)} class="text-gray-700 hover:text-[#E27990] font-medium py-2 transition-colors duration-200">Contacto</a>
        </div>
      </div>
    {/if}
  </div>
</nav>
<script lang="ts">
  import { onMount } from 'svelte';
  
  let menuOpen = false;
  let navigate: Function;
  
  onMount(() => {
    // Obtenemos la función de navegación desde el componente padre
    window.addEventListener('navigationReady', (event: CustomEvent) => {
      navigate = event.detail.navigate;
    });
  });
  
  // Manejador de navegación para prevenir comportamiento predeterminado
  function handleNavigation(path: string, e: Event) {
    if (!navigate) return;
    e.preventDefault();
    navigate(path);
    // Cerramos el menú móvil si está abierto
    menuOpen = false;
  }
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" on:click={(e) => handleNavigation('/', e)} class="flex items-center">
          <span class="text-2xl font-serif font-bold text-primary">Tejerosa</span>
        </a>
      </div>
      
      <!-- Navegación Desktop -->
      <nav class="hidden md:flex space-x-8">
        <a href="/" on:click={(e) => handleNavigation('/', e)} class="text-neutral-700 hover:text-primary font-medium transition-colors">Inicio</a>
        <a href="/catalogo" on:click={(e) => handleNavigation('/catalogo', e)} class="text-neutral-700 hover:text-primary font-medium transition-colors">Catálogo</a>
        <a href="/nosotros" on:click={(e) => handleNavigation('/nosotros', e)} class="text-neutral-700 hover:text-primary font-medium transition-colors">Nosotros</a>
        <a href="/contacto" on:click={(e) => handleNavigation('/contacto', e)} class="text-neutral-700 hover:text-primary font-medium transition-colors">Contacto</a>
      </nav>
      
      <!-- Botón Menú Móvil -->
      <div class="md:hidden">
        <button 
          on:click={toggleMenu} 
          type="button" 
          class="text-neutral-700 hover:text-primary"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if menuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Menú Móvil -->
  {#if menuOpen}
    <div class="md:hidden bg-white border-t border-neutral-100 shadow-lg">
      <div class="container mx-auto px-4 py-3">
        <nav class="flex flex-col space-y-3">
          <a 
            href="/" 
            on:click={(e) => handleNavigation('/', e)} 
            class="block px-3 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-md"
          >
            Inicio
          </a>
          <a 
            href="/catalogo" 
            on:click={(e) => handleNavigation('/catalogo', e)} 
            class="block px-3 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-md"
          >
            Catálogo
          </a>
          <a 
            href="/nosotros" 
            on:click={(e) => handleNavigation('/nosotros', e)} 
            class="block px-3 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-md"
          >
            Nosotros
          </a>
          <a 
            href="/contacto" 
            on:click={(e) => handleNavigation('/contacto', e)} 
            class="block px-3 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-md"
          >
            Contacto
          </a>
        </nav>
      </div>
    </div>
  {/if}
</header> 
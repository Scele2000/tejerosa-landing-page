<script>
  import { currentView, isAdmin, cartItemCount, cartTotal } from '../store.js';
  // Importaremos el store del carrito cuando esté listo
  // import { cartItems } from '../store.js'; 
  // let itemCount = 0;
  // cartItems.subscribe(items => itemCount = items.reduce((sum, item) => sum + item.quantity, 0));

  function navigateTo(view) {
    currentView.set(view);
  }

  let mobileMenuOpen = false;

  const cartIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>`;
</script>

<nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 transition-all duration-300">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <button on:click={() => navigateTo('catalog')} class="flex items-center group">
        <span style="font-family: 'Playfair Display', serif;" class="text-3xl font-bold text-pink-600 dark:text-pink-400 group-hover:text-pink-500 dark:group-hover:text-pink-300 transition-colors duration-300">
          Tejerosa
        </span>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-4 lg:space-x-6">
        <button 
          on:click={() => navigateTo('catalog')} 
          class="px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 
                 {$currentView === 'catalog' ? 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30 shadow-inner' : 'text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30'}">
          Catálogo
        </button>
        <button 
          on:click={() => navigateTo('contact')} 
          class="px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 
                 {$currentView === 'contact' ? 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30 shadow-inner' : 'text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30'}">
          Contacto
        </button>
        
        {#if $isAdmin}
          <button on:click={() => navigateTo('admin')} class="px-4 py-2 rounded-lg text-base font-medium bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-px active:translate-y-0">
            Panel Admin
          </button>
        {:else}
          <button 
            on:click={() => navigateTo('admin')} 
            class="px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 
                   {$currentView === 'admin' ? 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30 shadow-inner' : 'text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30'}">
            Login
          </button>
        {/if}

        <div class="flex items-center">
          {#if $cartItemCount > 0}
            <span class="mr-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
              Total: ${$cartTotal.toFixed(2)}
            </span>
          {/if}
          <button 
            on:click={() => navigateTo('cart')} 
            class="relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-50 dark:focus:ring-offset-slate-800 focus:ring-pink-500 transition-all duration-300 ease-in-out transform hover:scale-110 {$currentView === 'cart' ? 'text-pink-600 bg-pink-100 dark:text-pink-300 dark:bg-pink-800/60' : ''}"
            aria-label="Ver carrito"
          >
            {@html cartIconSvg}
            {#if $cartItemCount > 0}
              <span class="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {$cartItemCount}
              </span>
            {/if}
          </button>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
         {#if $cartItemCount > 0}
            <span class="mr-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
              ${$cartTotal.toFixed(2)}
            </span>
          {/if}
         <button 
          on:click={() => navigateTo('cart')} 
          class="relative mr-2 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-800/50 focus:outline-none transition-colors duration-200 {$currentView === 'cart' ? 'text-pink-600 bg-pink-100 dark:text-pink-300 dark:bg-pink-800/60' : ''}"
          aria-label="Ver carrito"
        >
          {@html cartIconSvg}
           {#if $cartItemCount > 0}
            <span class="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {$cartItemCount}
            </span>
          {/if}
        </button>
        <button on:click={() => mobileMenuOpen = !mobileMenuOpen} type="button" class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-colors duration-200" aria-expanded={mobileMenuOpen}>
          <span class="sr-only">Abrir menú principal</span>
          {#if mobileMenuOpen}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu, show/hide based on menu state. -->
  {#if mobileMenuOpen}
    <div class="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-xl rounded-b-lg ring-1 ring-black ring-opacity-5 overflow-hidden transition-transform duration-300 ease-in-out {mobileMenuOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'}" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button 
          on:click={() => {navigateTo('catalog'); mobileMenuOpen = false;}} 
          class="w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 
                 {$currentView === 'catalog' ? 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300' : 'text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400'}">
          Catálogo
        </button>
        <button 
          on:click={() => {navigateTo('contact'); mobileMenuOpen = false;}} 
          class="w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 
                 {$currentView === 'contact' ? 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300' : 'text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400'}">
          Contacto
        </button>
        
        {#if $isAdmin}
          <button on:click={() => {navigateTo('admin'); mobileMenuOpen = false;}} class="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-150 mt-2">
            Panel Admin
          </button>
        {:else}
          <button 
            on:click={() => {navigateTo('admin'); mobileMenuOpen = false;}} 
            class="w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 
                   {$currentView === 'admin' ? 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300' : 'text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400'}">
            Login
          </button>
        {/if}
      </div>
    </div>
  {/if}
</nav>

<style>
  /* Asegurarse de que la tipografía Playfair Display esté cargada globalmente o importarla aquí si es necesario */
  /* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap'); */
</style> 
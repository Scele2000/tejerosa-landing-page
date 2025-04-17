<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from '../router';
  
  let isLoggedIn = false;
  let username = '';
  let showLoginModal = false;
  
  function toggleLoginModal() {
    showLoginModal = !showLoginModal;
  }
  
  function login(e: Event) {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    isLoggedIn = true;
    showLoginModal = false;
  }
  
  function logout() {
    isLoggedIn = false;
    username = '';
  }
  
  function goToAdmin() {
    navigate('/admin/productos');
  }
</script>

<header class="w-full bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50 border-b border-white/50">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-[var(--color-primary)] flex items-center">
      <span class="text-3xl mr-1">✿</span>
      TejeRosa
    </a>
    
    <div class="flex-1 mx-auto max-w-md px-6">
      <div class="relative">
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          class="w-full py-2 px-4 rounded-full border border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-turquesa)] transition-all bg-white/80"
        />
        <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[var(--color-turquesa)] text-white p-1.5 rounded-full hover:bg-[var(--color-turquesa-dark)] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
    
    <nav class="flex items-center space-x-6">
      <a href="/" class="text-[var(--color-text)] hover:text-[var(--color-turquesa)] transition-colors font-medium">Inicio</a>
      <a href="/contacto" class="text-[var(--color-text)] hover:text-[var(--color-turquesa)] transition-colors font-medium">Contacto</a>
      
      {#if isLoggedIn}
        <div class="relative group">
          <button class="flex items-center space-x-1 text-[var(--color-text)] hover:text-[var(--color-turquesa)] font-medium">
            <span>Admin</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-gray-100">
            <a href="/admin/productos" class="block px-4 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-background)] hover:text-[var(--color-turquesa)]">
              Administrar Productos
            </a>
            <button on:click={logout} class="w-full text-left px-4 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-background)] hover:text-[var(--color-turquesa)]">
              Cerrar Sesión
            </button>
          </div>
        </div>
      {:else}
        <button on:click={toggleLoginModal} class="px-4 py-2 bg-[var(--color-turquesa)] text-white rounded-md hover:bg-[var(--color-turquesa-dark)] transition-colors shadow-sm font-medium">
          Iniciar Sesión
        </button>
      {/if}
    </nav>
  </div>
</header>

{#if showLoginModal}
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border border-gray-100">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-[var(--color-text)]">Iniciar Sesión</h2>
        <button on:click={toggleLoginModal} class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <form on:submit={login} class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-[var(--color-text)]">Usuario</label>
          <input bind:value={username} id="username" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--color-turquesa)] focus:ring focus:ring-[var(--color-turquesa)] focus:ring-opacity-50" />
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-[var(--color-text)]">Contraseña</label>
          <input id="password" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--color-turquesa)] focus:ring focus:ring-[var(--color-turquesa)] focus:ring-opacity-50" />
        </div>
        
        <button type="submit" class="w-full bg-[var(--color-turquesa)] text-white py-2 px-4 rounded-md hover:bg-[var(--color-turquesa-dark)] transition-colors font-medium">
          Ingresar
        </button>
      </form>
    </div>
  </div>
{/if}

<!-- Espacio para compensar el header fijo -->
<div class="h-[70px]"></div> 
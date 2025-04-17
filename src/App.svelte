<script lang="ts">
  import { onMount } from 'svelte';
  import { currentRoute, initRouter } from './lib/router';
  import Home from './routes/Home.svelte';
  import Contact from './routes/Contact.svelte';
  import Admin from './routes/Admin.svelte';
  import NotFound from './routes/NotFound.svelte';
  import './app.css';
  
  // Inicializar el router al montar el componente
  onMount(() => {
    initRouter();
  });
</script>

<div class="app">
  {#if $currentRoute === '/' || $currentRoute === '/index.html'}
    <Home />
  {:else if $currentRoute === '/contacto'}
    <Contact />
  {:else if $currentRoute === '/admin/productos'}
    <Admin />
  {:else}
    <NotFound />
  {/if}
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  :global(body) {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
  }
  
  :global(*) {
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    :global(html) {
      font-size: 14px;
    }
  }
</style>
<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import { navigate } from '../lib/router';
</script>

<main class="min-h-screen bg-[var(--color-background)]">
  <Navbar />
  
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-md mx-auto">
        <h1 class="text-9xl font-bold text-[var(--color-primary)]">404</h1>
        <h2 class="text-2xl font-semibold text-[var(--color-text)] mt-4 mb-6">Página no encontrada</h2>
        <p class="text-gray-600 mb-8">La página que estás buscando no existe o ha sido movida.</p>
        
        <button 
          on:click={() => navigate('/')}
          class="px-6 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-accent)] transition-colors shadow-md inline-block"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  </section>
  
  <Footer />
</main> 
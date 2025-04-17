<script lang="ts">
  import { onMount } from 'svelte';
  import Banner from '../lib/components/Banner.svelte';
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import ProductCard from '../lib/components/ProductCard.svelte';
  import Filters from '../lib/components/Filters.svelte';
  import { productStore, type Product } from '../lib/stores/products';
  
  let filteredProducts: Product[] = [];
  let searchQuery = '';
  let currentFilters = {
    temporada: '',
    tipo: '',
    precio: { min: 0, max: 10000 },
    search: ''
  };
  
  function handleFilter(event: CustomEvent) {
    currentFilters = { ...currentFilters, ...event.detail, search: searchQuery };
    applyFilters();
  }
  
  function handleSearch() {
    currentFilters.search = searchQuery;
    applyFilters();
  }
  
  function clearFilters() {
    currentFilters = {
      temporada: '',
      tipo: '',
      precio: { min: 0, max: 10000 },
      search: ''
    };
    searchQuery = '';
    applyFilters();
  }
  
  function applyFilters() {
    filteredProducts = productStore.filterProducts(currentFilters);
  }
  
  onMount(() => {
    applyFilters();
  });
</script>

<main class="min-h-screen bg-gradient-to-b from-[var(--color-background)] to-white">
  <Navbar />
  
  <Banner />
  
  <section id="catalogo" class="py-16" style="background-image: url('/bg1.jpg'); background-attachment: fixed; background-size: cover; background-position: center;">
    <div class="absolute inset-0 backdrop-blur-sm bg-white/50"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex items-center justify-center mb-10">
        <div class="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-md inline-block">
          <h2 class="text-3xl font-bold text-center text-[var(--color-text)]">Nuestro Catálogo</h2>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Sidebar con filtros -->
        <div class="md:w-1/4">
          <div class="sticky top-24">
            <Filters on:filter={handleFilter} on:clearFilters={clearFilters} />
          </div>
        </div>
        
        <!-- Catálogo de productos -->
        <div class="md:w-3/4">
          <!-- Barra de búsqueda -->
          <div class="mb-6 relative">
            <input 
              type="text" 
              bind:value={searchQuery}
              placeholder="Buscar productos..." 
              class="w-full p-4 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-turquesa)] transition-all bg-white/70 backdrop-blur-sm shadow-md"
            />
            <button 
              on:click={handleSearch}
              class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[var(--color-turquesa)] text-white p-2 rounded-full hover:bg-[var(--color-turquesa-dark)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <!-- Grid de productos -->
          {#if filteredProducts.length > 0}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {#each filteredProducts as product}
                <div class="h-full">
                  <ProductCard {...product} />
                </div>
              {/each}
            </div>
          {:else}
            <div class="bg-white/70 backdrop-blur-sm p-10 rounded-lg shadow-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-[var(--color-coral)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-lg text-gray-700 mb-4">No se encontraron productos que coincidan con los filtros seleccionados.</p>
              <button 
                on:click={clearFilters}
                class="mt-2 px-6 py-3 bg-[var(--color-coral)] text-white rounded-md hover:brightness-95 transition-colors font-medium inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Limpiar filtros
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
  <Footer />
</main> 
<script>
  import { onMount } from 'svelte';
  import { products, categories } from '../lib/data/products';
  import ProductCard from '../components/ProductCard.svelte';
  import ProductFilters from '../components/ProductFilters.svelte';
  
  let loading = false;
  let filteredProducts = [...products];
  let activeCategory = 'Todos';
  let priceRange = { min: 0, max: 1000 };
  
  function handleFilter(event) {
    const { category, priceRange: newPriceRange } = event.detail;
    activeCategory = category;
    priceRange = newPriceRange;
    
    applyFilters();
  }
  
  function handleReset() {
    activeCategory = 'Todos';
    priceRange = { min: 0, max: 1000 };
    filteredProducts = [...products];
  }
  
  function applyFilters() {
    filteredProducts = products.filter(product => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesPrice = product.price <= priceRange.max;
      
      return matchesCategory && matchesPrice;
    });
  }
</script>

<div class="min-h-screen pt-16 pb-10">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl md:text-4xl font-serif text-[#E27990] mb-8 text-center">Catálogo de productos</h1>
    
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-1/4">
        <ProductFilters 
          {categories} 
          {activeCategory}
          {priceRange}
          on:filter={handleFilter}
          on:reset={handleReset}
        />
      </div>
      
      <div class="lg:w-3/4">
        <div class="mb-6">
          <p class="text-gray-700">
            Mostrando {filteredProducts.length} 
            {filteredProducts.length === 1 ? 'producto' : 'productos'}
          </p>
        </div>
        
        {#if filteredProducts.length === 0}
          <div class="bg-[#F7F5F8] rounded-md p-8 text-center">
            <p class="text-gray-700 mb-4">No se encontraron productos con los filtros seleccionados.</p>
            <button 
              class="text-[#E27990] hover:text-[#C95775] font-medium"
              on:click={handleReset}
            >
              Eliminar filtros
            </button>
          </div>
        {:else}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredProducts as product}
              <ProductCard {product} />
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <section class="bg-gradient-to-r from-[#F7F5F8] to-[#F2B5C8]/30 mt-16 py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl md:text-3xl font-serif text-[#E27990] mb-4">¿Estás buscando algo especial?</h2>
      <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
        Si estás buscando una pieza personalizada o tienes alguna pregunta sobre nuestros productos, 
        no dudes en contactarnos. Estaremos encantados de ayudarte.
      </p>
      <a 
        href="/contacto" 
        class="inline-block px-6 py-3 bg-[#E27990] hover:bg-[#C95775] text-white font-medium rounded-md transition-colors shadow-sm"
      >
        Contactar
      </a>
    </div>
  </section>
</div>
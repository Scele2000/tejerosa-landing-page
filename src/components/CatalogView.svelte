<script>
  import { products as productsStore, currentView, selectedProduct, searchTerm, selectedCategories, selectedTypes, priceRange } from '../store.js';
  import ProductCard from './ProductCard.svelte';
  import FilterSidebar from './FilterSidebar.svelte';

  export let categories = [];
  export let types = [];

  let allProducts = [];
  productsStore.subscribe(value => { allProducts = value; });

  let filteredProducts = [];

  $: {
    let productsToFilter = allProducts;

    // Filtrar por término de búsqueda
    if ($searchTerm) {
      productsToFilter = productsToFilter.filter(p => 
        p.name.toLowerCase().includes($searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes($searchTerm.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes($searchTerm.toLowerCase()))
      );
    }

    // Filtrar por categorías
    if ($selectedCategories.length > 0) {
      productsToFilter = productsToFilter.filter(p => $selectedCategories.includes(p.category));
    }

    // Filtrar por tipos
    if ($selectedTypes.length > 0) {
      productsToFilter = productsToFilter.filter(p => $selectedTypes.includes(p.type));
    }

    // Filtrar por rango de precios
    productsToFilter = productsToFilter.filter(p => p.price >= $priceRange.min && p.price <= $priceRange.max);

    filteredProducts = productsToFilter;
  }

  function viewProduct(product) {
    selectedProduct.set(product);
    currentView.set('productDetail');
  }
</script>

<div class="flex flex-col md:flex-row gap-8">
  <FilterSidebar {categories} {types} />
  
  <div class="w-full md:w-3/4">
    <h1 class="text-3xl font-bold text-pink-600 mb-8">Catálogo de Productos</h1>
    {#if filteredProducts.length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredProducts as product (product.id)}
          <div on:click={() => viewProduct(product)} class="cursor-pointer">
            <ProductCard {product} />
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-gray-600 text-lg">No se encontraron productos con los filtros seleccionados. ¡Intenta ampliar tu búsqueda!</p>
    {/if}
  </div>
</div> 
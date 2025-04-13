<script>
  import { createEventDispatcher } from 'svelte';
  
  export let categories = [];
  export let activeCategory = 'Todos';
  export let priceRange = { min: 0, max: 1000 };
  
  let localCategory = activeCategory;
  let localPriceRange = { ...priceRange };
  
  const dispatch = createEventDispatcher();
  
  function applyFilters() {
    dispatch('filter', {
      category: localCategory,
      priceRange: localPriceRange
    });
  }
  
  function resetFilters() {
    localCategory = 'Todos';
    localPriceRange = { min: 0, max: 1000 };
    dispatch('reset');
  }
</script>

<div class="bg-[#F7F5F8] p-6 rounded-md">
  <h2 class="text-xl font-serif text-[#E27990] mb-6">Filtros</h2>
  
  <div class="mb-6">
    <h3 class="font-medium text-gray-800 mb-3">Categorías</h3>
    <div class="space-y-2">
      {#each categories as category}
        <label class="flex items-center">
          <input 
            type="radio" 
            bind:group={localCategory}
            value={category} 
            class="mr-2 accent-[#E27990]"
          />
          <span class="text-gray-700">{category}</span>
        </label>
      {/each}
    </div>
  </div>
  
  <div class="mb-6">
    <h3 class="font-medium text-gray-800 mb-3">Precio máximo: ${localPriceRange.max}</h3>
    <input 
      type="range" 
      bind:value={localPriceRange.max} 
      min="0" 
      max="1000" 
      step="10" 
      class="w-full accent-[#E27990]"
    />
  </div>
  
  <div class="flex flex-col gap-2">
    <button
      on:click={applyFilters}
      class="w-full py-2 bg-[#E27990] hover:bg-[#C95775] text-white rounded-md transition-colors"
    >
      Aplicar filtros
    </button>
    
    <button
      on:click={resetFilters}
      class="w-full py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-md transition-colors"
    >
      Reiniciar filtros
    </button>
  </div>
</div>
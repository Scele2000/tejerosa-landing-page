<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let temporadas = ['Primavera', 'Verano', 'Otoño', 'Invierno', 'Todo el año'];
  export let tipos = ['Decoración', 'Manualidad', 'Arte'];
  
  let selectedTemporada = '';
  let selectedTipo = '';
  let precioMin = 0;
  let precioMax = 10000;
  
  const dispatch = createEventDispatcher();
  
  function aplicarFiltros() {
    dispatch('filter', {
      temporada: selectedTemporada,
      tipo: selectedTipo,
      precio: {
        min: precioMin,
        max: precioMax
      }
    });
  }
  
  function limpiarFiltros() {
    selectedTemporada = '';
    selectedTipo = '';
    precioMin = 0;
    precioMax = 10000;
    dispatch('clearFilters');
  }
  
  $: {
    // Aplicar filtros automáticamente cuando cambian los valores
    aplicarFiltros();
  }
</script>

<div class="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
  <h2 class="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-turquesa)]" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
    </svg>
    Filtros
  </h2>
  
  <div class="space-y-6">
    <!-- Filtro por temporada -->
    <div class="bg-[var(--color-background)] p-4 rounded-lg shadow-sm">
      <label for="temporada" class="block text-sm font-semibold text-[var(--color-text)] mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Temporada
      </label>
      <div class="flex flex-wrap gap-2">
        <button 
          class={`px-3 py-1.5 rounded-full text-sm transition-all ${selectedTemporada === '' ? 'bg-[var(--color-turquesa)] text-white font-medium' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          on:click={() => selectedTemporada = ''}
        >
          Todas
        </button>
        {#each temporadas as temporada}
          <button 
            class={`px-3 py-1.5 rounded-full text-sm transition-all ${selectedTemporada === temporada ? 'bg-[var(--color-turquesa)] text-white font-medium' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            on:click={() => selectedTemporada = temporada}
          >
            {temporada}
          </button>
        {/each}
      </div>
    </div>
    
    <!-- Filtro por tipo -->
    <div class="bg-[var(--color-background)] p-4 rounded-lg shadow-sm">
      <label for="tipo" class="block text-sm font-semibold text-[var(--color-text)] mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        Tipo de producto
      </label>
      <div class="flex flex-wrap gap-2">
        <button 
          class={`px-3 py-1.5 rounded-full text-sm transition-all ${selectedTipo === '' ? 'bg-[var(--color-turquesa)] text-white font-medium' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          on:click={() => selectedTipo = ''}
        >
          Todos
        </button>
        {#each tipos as tipo}
          <button 
            class={`px-3 py-1.5 rounded-full text-sm transition-all ${selectedTipo === tipo ? 'bg-[var(--color-turquesa)] text-white font-medium' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            on:click={() => selectedTipo = tipo}
          >
            {tipo}
          </button>
        {/each}
      </div>
    </div>
    
    <!-- Filtro por precio -->
    <div class="bg-[var(--color-background)] p-4 rounded-lg shadow-sm">
      <label class="block text-sm font-semibold text-[var(--color-text)] mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Rango de precio
      </label>
      
      <div class="mt-4 mb-1">
        <input 
          type="range" 
          bind:value={precioMax} 
          min="1000" 
          max="20000" 
          step="500"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-turquesa)]"
        />
      </div>
      
      <div class="flex justify-between text-xs text-gray-500 mb-3">
        <span>$ 0</span>
        <span>$ {precioMax}</span>
      </div>
      
      <div class="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between">
        <div class="text-[var(--color-text)] font-medium text-sm">
          Hasta $ {precioMax.toLocaleString('es-AR')}
        </div>
        <div class="flex gap-2">
          <button 
            on:click={() => precioMax = Math.max(precioMax - 1000, 1000)}
            class="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
          >-</button>
          <button 
            on:click={() => precioMax = Math.min(precioMax + 1000, 20000)}
            class="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
          >+</button>
        </div>
      </div>
    </div>
    
    <!-- Botón para limpiar filtros -->
    <button
      on:click={limpiarFiltros}
      class="w-full py-3 px-4 mt-4 bg-[var(--color-coral)] hover:brightness-95 text-white rounded-full transition-colors font-semibold flex items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      Limpiar filtros
    </button>
  </div>
</div> 
<script>
  import { searchTerm, selectedCategories, selectedTypes, priceRange } from '../store.js';

  export let categories = []; // e.g., ['invierno', 'verano', 'otoño', 'primavera', 'decoracion']
  export let types = [];      // e.g., ['ropa', 'accesorios', 'decoracion', 'bordados']

  let currentSearchTerm = '';
  searchTerm.subscribe(value => currentSearchTerm = value);

  let currentSelectedCategories = [];
  selectedCategories.subscribe(value => currentSelectedCategories = value);

  let currentSelectedTypes = [];
  selectedTypes.subscribe(value => currentSelectedTypes = value);
  
  let currentPriceRange = { min: 0, max: 1000 };
  priceRange.subscribe(value => currentPriceRange = value);

  let maxPricePossible = 1000; // Podría ser dinámico basado en productos

  // Iconos (ejemplos, puedes buscar otros más específicos en Heroicons, Feathericons, etc.)
  const categoryIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" /></svg>`;
  const typeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" /></svg>`;
  const priceIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.219 12.768 11 12 11c-.768 0-1.536.219-2.121.727l-.879.659zM12 6a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0 12a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" /></svg>`;

  function updateSearch() {
    searchTerm.set(currentSearchTerm);
  }

  function toggleCategory(category) {
    const index = currentSelectedCategories.indexOf(category);
    if (index === -1) {
      selectedCategories.set([...currentSelectedCategories, category]);
    } else {
      selectedCategories.set(currentSelectedCategories.filter(c => c !== category));
    }
  }

  function toggleType(type) {
    const index = currentSelectedTypes.indexOf(type);
    if (index === -1) {
      selectedTypes.set([...currentSelectedTypes, type]);
    } else {
      selectedTypes.set(currentSelectedTypes.filter(t => t !== type));
    }
  }

  function updatePriceRange() {
    priceRange.set(currentPriceRange);
  }

  function clearFilters() {
    currentSearchTerm = '';
    searchTerm.set('');
    selectedCategories.set([]);
    selectedTypes.set([]);
    currentPriceRange = { min: 0, max: maxPricePossible };
    priceRange.set({ min: 0, max: maxPricePossible });
  }

  const seasons = ['invierno', 'verano', 'otoño', 'primavera'];
  // Puedes añadir más filtros aquí según la lógica de negocio
  const materials = ['lana', 'jean', 'reciclado', 'algodon'];
  const occasions = ['navidad', 'cumpleaños', 'regalo', 'diario'];

</script>

<aside class="w-full md:w-72 lg:w-80 p-5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700/70 space-y-6 sticky top-24 self-start transition-all duration-300">
  <h3 class="text-2xl font-semibold text-sky-700 dark:text-pink-400 border-b border-sky-200 dark:border-slate-700 pb-3 mb-5 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
    Filtrar Productos
  </h3>

  <div>
    <label for="search" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Buscar por nombre</label>
    <div class="relative">
      <input 
        type="text" 
        id="search" 
        bind:value={currentSearchTerm} 
        on:input={updateSearch} 
        placeholder="Ej: Bolso, Gorro..." 
        class="w-full pl-10 pr-3.5 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-700 dark:text-white sm:text-sm transition-all duration-200"
      />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 dark:text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
      </div>
    </div>
  </div>

  <div>
    <h4 class="text-lg font-medium text-gray-800 dark:text-pink-300 mb-2.5 flex items-center">
      {@html categoryIcon}
      Categorías (Temporada)
    </h4>
    <div class="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 styled-scrollbar">
      {#each categories as category}
        {@const isSelected = currentSelectedCategories.includes(category)}
        <button 
          on:click={() => toggleCategory(category)} 
          class="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out group flex items-center justify-center border
                 {isSelected ? 'bg-pink-500 text-white border-pink-500 shadow-md dark:bg-pink-600 dark:border-pink-600' : 'bg-sky-50 hover:bg-sky-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-gray-300 text-gray-700 border-gray-300 dark:border-slate-600 hover:shadow-sm'}"
        >
          <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          {#if isSelected}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 ml-1.5 opacity-75 group-hover:opacity-100 transition-opacity"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>
          {/if}
        </button>
      {/each}
    </div>
  </div>

  <div>
    <h4 class="text-lg font-medium text-gray-800 dark:text-pink-300 mb-2.5 flex items-center">
      {@html typeIcon}
      Tipos de Producto
    </h4>
    <div class="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 styled-scrollbar">
      {#each types as type}
        {@const isSelected = currentSelectedTypes.includes(type)}
        <button 
          on:click={() => toggleType(type)} 
          class="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out group flex items-center justify-center border
                 {isSelected ? 'bg-pink-500 text-white border-pink-500 shadow-md dark:bg-pink-600 dark:border-pink-600' : 'bg-sky-50 hover:bg-sky-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-gray-300 text-gray-700 border-gray-300 dark:border-slate-600 hover:shadow-sm'}"
        >
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
           {#if isSelected}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 ml-1.5 opacity-75 group-hover:opacity-100 transition-opacity"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>
          {/if}
        </button>
      {/each}
    </div>
  </div>

  <div>
    <h4 class="text-lg font-medium text-gray-800 dark:text-pink-300 mb-3 flex items-center">
      {@html priceIcon}
      Rango de Precios (ARS$)
    </h4>
    <div class="space-y-3 px-1">
      <input 
        type="range" 
        min="0" 
        max={maxPricePossible} 
        bind:value={currentPriceRange.max} 
        on:input={updatePriceRange} 
        class="w-full h-2.5 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer range-slider accent-pink-500 dark:accent-pink-400"
      />
       <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1.5">
        <span>$ {currentPriceRange.min}</span>
        <span>$ {currentPriceRange.max}</span>
      </div>
    </div>
  </div>

  <button 
    on:click={clearFilters}
    class="w-full mt-6 py-3 px-4 bg-rose-500 hover:bg-rose-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 inline-block align-middle">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
    Limpiar Filtros
  </button>

</aside>

<style>
  .styled-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .styled-scrollbar::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.05);
    border-radius: 10px;
  }
  .styled-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(236, 72, 153, 0.5); /* Tailwind pink-500 with opacity */
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  .styled-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(236, 72, 153, 0.7); /* pink-500 more opaque */
  }
  .dark .styled-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(219, 39, 119, 0.6); /* Tailwind pink-600 for dark mode */
  }
  .dark .styled-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(219, 39, 119, 0.8);
  }

  /* Custom range slider track */
  .range-slider::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
  }
  .range-slider::-moz-range-track {
    height: 6px;
    border-radius: 3px;
  }
  /* Custom range slider thumb */
  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -5px; /* align with track */
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ec4899; /* pink-500 */
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
  }
  .dark .range-slider::-webkit-slider-thumb {
    background: #db2777; /* pink-600 */
    border: 2px solid #334155; /* slate-700 */
  }
  .range-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ec4899; /* pink-500 */
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
  }
  .dark .range-slider::-moz-range-thumb {
     background: #db2777; /* pink-600 */
    border: 2px solid #334155; /* slate-700 */
  }

</style> 
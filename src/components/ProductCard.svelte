<script>
  export let product;
  import { currentView, selectedProduct, addToCart as addProductToCartStore } from '../store.js';
  import { fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';

  let showCard = false;
  onMount(() => {
    showCard = true;
  });

  function viewProductDetail() {
    selectedProduct.set(product);
    currentView.set('productDetail');
  }

  let addedFeedback = false;
  function handleAddToCart(event) {
    event.stopPropagation();
    addProductToCartStore(product);
    addedFeedback = true;
    setTimeout(() => {
      addedFeedback = false;
    }, 1500);
  }

  const cartIconMini = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>`;
  const checkIconMini = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>`;

</script>

{#if showCard}
<div 
  in:scale={{duration:300, delay: Math.random()*300 + 100, opacity:0, start:0.95}}
  class="bg-white/50 dark:bg-slate-800/60 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-out group border border-white/30 dark:border-slate-700/40 flex flex-col h-full"
>
  <div 
    on:click={viewProductDetail} 
    class="relative cursor-pointer flex-grow"
  >
    <img src={product.imageUrl || './images/placeholder-product.jpg'} alt={product.name} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out">
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
    <div class="absolute top-2 right-2">
        <span class="text-xs text-pink-100 dark:text-pink-200 bg-pink-500/80 dark:bg-pink-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </span>
    </div>
    <div class="absolute bottom-0 left-0 right-0 p-4">
      <h3 class="text-lg font-semibold text-white truncate group-hover:text-pink-200 dark:group-hover:text-pink-300 transition-colors duration-300" title={product.name}>{product.name}</h3>
    </div>
  </div>
  
  <div class="p-4 bg-white/70 dark:bg-slate-700/50 border-t border-pink-100 dark:border-slate-600/50">
    <div class="flex justify-between items-center mb-3">
      <p class="text-xl font-bold text-pink-600 dark:text-pink-400">${product.price.toFixed(2)}</p>
      <span class="text-xs text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-0.5 rounded-full">{product.type}</span>
    </div>

    {#if product.tags && product.tags.length > 0}
      <div class="mb-3 flex flex-wrap gap-1.5">
        {#each product.tags as tag}
          <span class="text-xs text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-700/50 px-2 py-0.5 rounded-full">
            #{tag}
          </span>
        {/each}
      </div>
    {/if}

    <div class="flex gap-2 mt-auto pt-3 border-t border-pink-100/50 dark:border-slate-600/40">
      <button 
        on:click={viewProductDetail}
        class="flex-grow bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-medium py-2 px-3 rounded-lg shadow hover:shadow-md transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-300 focus:ring-opacity-75"
      >
        Ver Detalles
      </button>
      <button 
        on:click={handleAddToCart} 
        disabled={addedFeedback} 
        class="relative flex-shrink-0 {addedFeedback ? 'bg-green-500' : 'bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500'} text-white font-medium p-2 rounded-lg shadow hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 {addedFeedback ? 'focus:ring-green-400' : 'focus:ring-pink-400 dark:focus:ring-pink-300'} focus:ring-opacity-75 disabled:opacity-80"
        aria-label="Añadir al carrito"
      >
        {#if addedFeedback}
          <span in:scale={{duration:200}} out:scale={{duration:100, delay:1200}}>{@html checkIconMini}</span>
        {:else}
          {@html cartIconMini}
        {/if}
      </button>
    </div>
  </div>
</div>
{/if}

<style>
  /* .group:hover {
    box-shadow: 0 0 12px rgba(236, 72, 153, 0.2), 0 0 20px rgba(219, 39, 119, 0.15); /* Pink glow */
  /* } */
</style> 
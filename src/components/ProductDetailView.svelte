<script>
  import { selectedProduct, currentView, products, addToCart as addProductToCartStore } from '../store.js';
  import { onDestroy, onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  let product = $selectedProduct;
  let show = false;
  let addedToCartFeedback = false;

  onMount(() => {
    show = true;
  });

  function goBackToCatalog() {
    show = false; // Para la animación de salida
    setTimeout(() => {
      selectedProduct.set(null);
      currentView.set('catalog');
    }, 300); // Debe coincidir con la duración de la animación de salida
  }

  // Limpiar el producto seleccionado al destruir el componente (ej. si se navega a otra parte directamente)
  onDestroy(() => {
      if ($selectedProduct) { // Solo limpiar si aún estaba seleccionado (evita error si ya se limpió)
        selectedProduct.set(null);
      }
  });

  function handleAddToCart() {
    addProductToCartStore(product);
    addedToCartFeedback = true;
    setTimeout(() => addedToCartFeedback = false, 2000);
  }

  // Simulación de productos relacionados (misma categoría, excluyendo el actual)
  let relatedProducts = [];
  products.subscribe(allProducts => {
      if (product) {
        relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
      }
  });

  function viewRelatedProduct(relatedProd) {
    show = false;
    setTimeout(() => {
        selectedProduct.set(relatedProd);
        // Forzar un remonte o cambio de clave para reactivar la animación de entrada si es necesario
        // Svelte normalmente maneja bien los cambios reactivos para 'product'
        // pero si la animación de entrada depende de onMount, puede necesitar un empujoncito
        // o simplemente confiar en que el cambio de 'product' redibuje la vista.
        show = true; // Reactivar para el nuevo producto
    }, 300);
  }

</script>

{#if product && show}
  <div 
    in:fly={{ y: 50, duration: 500, delay: 100, opacity: 0 }}
    out:fade={{ duration: 300 }}
    class="bg-gradient-to-br from-white/70 via-sky-50/70 to-pink-50/70 dark:from-slate-800/80 dark:via-sky-900/80 dark:to-slate-900/80 backdrop-blur-xl p-4 sm:p-6 md:p-10 rounded-2xl shadow-2xl max-w-5xl mx-auto border border-pink-100 dark:border-slate-700/70"
  >
    <button on:click={goBackToCatalog} class="mb-6 text-pink-600 hover:text-pink-500 dark:text-pink-400 dark:hover:text-pink-300 transition-colors duration-300 flex items-center group text-sm font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5 transform group-hover:-translate-x-0.5 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H15a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Volver al Catálogo
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
      <div class="md:sticky md:top-28  overflow-hidden rounded-xl shadow-xl border border-pink-100 dark:border-slate-700">
        <img 
          in:fade={{ duration: 600, delay: 300 }}
          src={product.imageUrl} 
          alt={product.name} 
          class="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain rounded-xl bg-white dark:bg-slate-800 p-2"
        />
      </div>
      
      <div class="flex flex-col justify-between space-y-6">
        <div in:fly={{ x: 50, duration: 500, delay: 400, opacity: 0 }}>
          <span class="inline-block bg-pink-100 dark:bg-pink-800/50 text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">{product.category} &bull; {product.type}</span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-700 dark:text-pink-400 mb-3" style="font-family: 'Playfair Display', serif;">{product.name}</h1>
          
          <p class="text-gray-600 dark:text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">{product.description}</p>
          
          <div class="mb-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
            <p><span class="font-semibold text-gray-700 dark:text-gray-300">Dimensiones:</span> {product.dimensions || 'No especificadas'}</p>
            <p><span class="font-semibold text-gray-700 dark:text-gray-300">Stock:</span> 
              {#if product.stock > 0}
                <span class="text-green-600 dark:text-green-400">{product.stock} unidades disponibles</span>
              {:else}
                <span class="text-red-500 dark:text-red-400">Agotado</span>
              {/if}
            </p>
          </div>
          <p class="text-4xl sm:text-5xl font-extrabold text-pink-600 dark:text-pink-400 mb-6">${product.price.toFixed(2)}</p>
        </div>
        
        <div in:fly={{ y: 20, duration: 500, delay: 600, opacity: 0 }}>
          {#if product.stock > 0}
            <button 
              on:click={handleAddToCart} 
              class="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 dark:from-pink-600 dark:to-rose-600 dark:hover:from-pink-500 dark:hover:to-rose-500 text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700 focus:ring-opacity-50 flex items-center justify-center space-x-2 relative overflow-hidden"
            >
              {#if addedToCartFeedback}
                <span class="absolute inset-0 flex items-center justify-center bg-green-500/80" in:fade={{duration:200}} out:fade={{duration:200, delay:1600}}>¡Añadido!</span>
              {/if}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 {addedToCartFeedback ? 'scale-0' : 'scale-100'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="transition-transform duration-300 {addedToCartFeedback ? 'scale-0' : 'scale-100'}">Añadir al Carrito</span>
            </button>
          {:else}
            <div class="w-full bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-400 font-semibold py-3.5 sm:py-4 px-6 rounded-xl shadow-inner text-lg sm:text-xl text-center">
              Producto Agotado
            </div>
          {/if}
        </div>
      </div>
    </div>

    {#if product.tags && product.tags.length > 0}
      <div class="mt-10 pt-6 border-t border-pink-200/70 dark:border-slate-700/50" in:fade={{delay: 700, duration: 400}}>
        <h3 class="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">Etiquetas:</h3>
        <div class="flex flex-wrap gap-2 sm:gap-3">
          {#each product.tags as tag}
            <span class="bg-pink-100 dark:bg-pink-900/60 text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full shadow-sm">{tag}</span>
          {/each}
        </div>
      </div>
    {/if}

    {#if relatedProducts.length > 0}
    <div class="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-pink-200/70 dark:border-slate-700/50" in:fade={{delay: 800, duration: 400}}>
      <h2 class="text-2xl sm:text-3xl font-semibold text-pink-600 dark:text-pink-400 mb-6 text-center md:text-left" style="font-family: 'Playfair Display', serif;">También te podría interesar...</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {#each relatedProducts as relatedProd (relatedProd.id)}
          <button on:click={() => viewRelatedProduct(relatedProd)} class="text-left bg-white/80 dark:bg-slate-800/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-out group p-4 border border-transparent hover:border-pink-200 dark:hover:border-pink-700/50">
            <div class="w-full h-48 sm:h-56 overflow-hidden rounded-lg mb-3">
                <img src={relatedProd.imageUrl} alt={relatedProd.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out">
            </div>
            <h4 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors truncate mb-1">{relatedProd.name}</h4>
            <p class="text-lg sm:text-xl font-bold text-pink-500 dark:text-pink-400">${relatedProd.price.toFixed(2)}</p>
          </button>
        {/each}
      </div>
    </div>
    {/if}

  </div>
{:else}
  <div class="text-center py-10">
    <p class="text-center text-xl text-gray-600 dark:text-gray-400">No hay ningún producto seleccionado.</p>
    <p class="text-sm text-gray-500 dark:text-gray-500 mb-6">Por favor, vuelve al catálogo para ver nuestros productos.</p>
    <button on:click={goBackToCatalog} class="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
      Ir al Catálogo
    </button>
  </div>
{/if} 
<script>
  import { cartItems, cartTotal, cartItemCount, removeFromCart, updateItemQuantity, clearCart, currentView } from '../store.js';
  import { fly, scale, fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { onMount } from 'svelte';

  let show = false;
  onMount(() => {
    show = true;
  });

  function proceedToCheckout() {
    alert('Procediendo al pago (Simulación). Total: $' + $cartTotal.toFixed(2));
    // Aquí se podría redirigir a una página de checkout real o limpiar el carrito
  }

  function continueShopping() {
    currentView.set('catalog');
  }

  const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.24.032 3.22.096m7.12 0c-.34-.059-.68-.114-1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.12 0c-.098.056-.194.112-.29.169m-14.002 0A94.035 94.035 0 0012 5.625c2.536 0 4.96.655 7.12 1.826A48.32 48.32 0 0112 18.75c-2.536 0-4.96-.655-7.12-1.826A48.095 48.095 0 004.772 5.79z" /></svg>`;
  const cartEmptyIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto text-pink-400 dark:text-pink-500 mb-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6M12 9.75A2.25 2.25 0 0114.25 12v0a2.25 2.25 0 01-2.25 2.25h-3A2.25 2.25 0 016.75 12v0A2.25 2.25 0 019 9.75h3z" /></svg>`;

</script>

{#if show}
<div in:fly={{ y: 50, duration: 500, opacity: 0}} class="max-w-4xl mx-auto bg-gradient-to-br from-white/70 via-sky-50/70 to-pink-50/70 dark:from-slate-800/80 dark:via-sky-900/80 dark:to-slate-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-pink-100 dark:border-slate-700/70">
  <h1 class="text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-8 text-center" style="font-family: 'Playfair Display', serif;">Tu Carrito de Compras</h1>

  {#if $cartItems.length === 0}
    <div in:fade class="text-center py-10">
      {@html cartEmptyIcon}
      <p class="text-xl text-gray-700 dark:text-gray-300 mb-3">Tu carrito está vacío.</p>
      <p class="text-gray-500 dark:text-gray-400 mb-6">Parece que aún no has añadido ningún tesoro. ¡Explora nuestro catálogo!</p>
      <button on:click={continueShopping} class="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
        Ver Catálogo
      </button>
    </div>
  {:else}
    <div class="space-y-6 mb-8">
      {#each $cartItems as item (item.id) }
        <div animate:flip={{duration: 300}} class="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white/80 dark:bg-slate-700/50 rounded-xl shadow-lg border border-pink-50 dark:border-slate-600/50">
          <img src={item.imageUrl} alt={item.name} class="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-lg shadow-md flex-shrink-0">
          <div class="flex-grow text-center sm:text-left">
            <h3 class="text-lg font-semibold text-pink-700 dark:text-pink-300">{item.name}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Precio: ${item.price.toFixed(2)}</p>
          </div>
          <div class="flex items-center space-x-3 my-2 sm:my-0">
            <button 
              on:click={() => updateItemQuantity(item.id, item.quantity - 1)} 
              disabled={item.quantity <= 1}
              class="p-1.5 rounded-full bg-pink-100 dark:bg-pink-700/50 text-pink-600 dark:text-pink-200 hover:bg-pink-200 dark:hover:bg-pink-600/70 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" /></svg>
            </button>
            <input 
              type="number" 
              min="1" 
              value={item.quantity} 
              on:change={(event) => updateItemQuantity(item.id, parseInt(event.currentTarget.value))}
              class="w-12 text-center border border-gray-300 dark:border-slate-500 rounded-md py-1 dark:bg-slate-600 dark:text-white focus:ring-pink-500 focus:border-pink-500"
            />
            <button 
              on:click={() => updateItemQuantity(item.id, item.quantity + 1)} 
              class="p-1.5 rounded-full bg-pink-100 dark:bg-pink-700/50 text-pink-600 dark:text-pink-200 hover:bg-pink-200 dark:hover:bg-pink-600/70 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
            </button>
          </div>
          <p class="text-md font-semibold text-gray-800 dark:text-gray-100 w-24 text-center sm:text-right">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          <button on:click={() => removeFromCart(item.id)} class="p-2 rounded-full text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700/50 transition-colors" aria-label="Eliminar producto">
            {@html trashIcon}
          </button>
        </div>
      {/each}
    </div>

    <div class="border-t border-pink-200 dark:border-slate-600 pt-6 space-y-4">
      <div class="flex justify-between items-center text-xl font-semibold">
        <span class="text-gray-700 dark:text-gray-200">Total Estimado:</span>
        <span class="text-pink-600 dark:text-pink-400">${$cartTotal.toFixed(2)}</span>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 text-right">Impuestos y envío calculados en el checkout (simulación).</p>
      
      <div class="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button on:click={continueShopping} class="w-full sm:w-auto order-2 sm:order-1 px-6 py-2.5 border border-pink-500 dark:border-pink-400 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
          Seguir Comprando
        </button>
        <button 
          on:click={proceedToCheckout} 
          disabled={$cartItemCount === 0}
          class="w-full sm:w-auto order-1 sm:order-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 dark:from-pink-600 dark:to-rose-600 dark:hover:from-pink-500 dark:hover:to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700 focus:ring-opacity-50 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          Proceder al Pago
        </button>
      </div>
       <button on:click={clearCart} class="w-full sm:w-auto mt-4 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center justify-center sm:float-right group">
        <span class="mr-1 group-hover:underline">Vaciar Carrito</span> 
        {@html trashIcon}
      </button>
    </div>
  {/if}
</div>
{/if} 
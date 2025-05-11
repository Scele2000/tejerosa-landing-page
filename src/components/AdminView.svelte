<script>
  import { isAdmin, products } from '../store.js';
  import { onDestroy } from 'svelte';

  // --- Lógica de Login ---
  let username = '';
  let password = '';
  let loginError = '';
  const ADMIN_USERNAME = 'rosa';
  const ADMIN_PASSWORD = 'tejerosa123';

  function handleLogin() {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      isAdmin.set(true);
      loginError = '';
      localStorage.setItem('tejerosa_isAdmin', 'true');
    } else {
      loginError = 'Usuario o contraseña incorrectos.';
      isAdmin.set(false);
    }
  }

  function handleLogout() {
    isAdmin.set(false);
    username = '';
    password = '';
    localStorage.removeItem('tejerosa_isAdmin');
    resetAndHideForm();
  }

  if (typeof localStorage !== 'undefined') {
    const storedIsAdmin = localStorage.getItem('tejerosa_isAdmin');
    if (storedIsAdmin === 'true') {
      isAdmin.set(true);
    }
  }

  // --- Lógica del Panel de Admin ---
  let localProducts = [];
  let allTags = [];

  const unsubscribeProducts = products.subscribe(value => {
    localProducts = JSON.parse(JSON.stringify(value));
    // Extraer todos los tags únicos de los productos existentes
    const existingTags = new Set();
    localProducts.forEach(product => {
      if (Array.isArray(product.tags)) {
        product.tags.forEach(tag => existingTags.add(tag.toLowerCase()));
      }
    });
    allTags = Array.from(existingTags).sort();
  });

  let showAddForm = false;
  let formProduct = {
    id: null, name: '', price: 0, imageUrl: '', description: '',
    category: 'invierno', type: 'ropa', tags: [], dimensions: '', stock: 0
  };
  let selectedFile = null;
  let imagePreviewUrl = null;
  let newTag = '';

  let isEditing = false;

  function generateId() {
    return Date.now().toString() + Math.random().toString(36).substring(2, 7);
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          imagePreviewUrl = e.target.result;
          formProduct.imageUrl = e.target.result;
        } else {
          console.error('Error al leer el archivo o tipo de resultado inesperado.');
          imagePreviewUrl = null;
        }
      };
      reader.readAsDataURL(file);
    } else {
      selectedFile = null;
      if (!isEditing || !formProduct.imageUrl) {
        formProduct.imageUrl = '';
        imagePreviewUrl = null;
      }
    }
  }

  function handleSubmitProduct() {
    if (!formProduct.name || formProduct.price === null || formProduct.price === undefined || formProduct.price < 0) {
        alert("Nombre y precio (válido) son obligatorios.");
        return;
    }

    const productData = {
        ...formProduct,
        id: isEditing && formProduct.id ? formProduct.id : generateId(),
        price: parseFloat(String(formProduct.price)),
        stock: parseInt(String(formProduct.stock), 10),
    };

    if (isEditing) {
        products.update(currentProducts => 
            currentProducts.map(p => p.id === productData.id ? productData : p)
        );
    } else {
        products.update(currentProducts => [...currentProducts, productData]);
    }
    resetAndHideForm();
  }
  
  function resetAndHideForm() {
    formProduct = { id: null, name: '', price: 0, imageUrl: '', description: '', category: 'invierno', type: 'ropa', tags: [], dimensions: '', stock: 0 };
    isEditing = false;
    showAddForm = false;
    selectedFile = null;
    imagePreviewUrl = null;
    const fileInput = document.getElementById('prodImageFile');
    if (fileInput && fileInput instanceof HTMLInputElement) {
      fileInput.value = '';
    }
  }

  function openEditForm(product) {
    formProduct = JSON.parse(JSON.stringify(product));
    formProduct.price = parseFloat(String(formProduct.price));
    formProduct.stock = parseInt(String(formProduct.stock), 10);
    if (typeof formProduct.tags === 'string') {
        formProduct.tags = String(formProduct.tags).split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    } else if (!Array.isArray(formProduct.tags)) {
        formProduct.tags = [];
    }
    
    imagePreviewUrl = product.imageUrl.startsWith('data:') || product.imageUrl.startsWith('blob:') ? product.imageUrl : product.imageUrl.includes('placeholder') ? null : product.imageUrl;
    if (product.imageUrl && (product.imageUrl.startsWith('data:') || product.imageUrl.startsWith('blob:'))) {
        formProduct.imageUrl = product.imageUrl;
    }

    selectedFile = null;
    isEditing = true;
    showAddForm = true;
  }

  function deleteProduct(productId) {
    if (confirm('¿Estás segura de que quieres eliminar este producto?')) {
      products.update(currentProducts => currentProducts.filter(p => p.id !== productId));
      if (isEditing && formProduct.id === productId) {
        resetAndHideForm();
      }
    }
  }
  
  function openNewProductForm() {
    resetAndHideForm();
    formProduct.id = null;
    showAddForm = true;
    isEditing = false;
  }

  onDestroy(() => {
    unsubscribeProducts();
  });

  const availableCategories = ['invierno', 'verano', 'otoño', 'primavera', 'decoracion', 'especial', 'infantil', 'hogar', 'manualidades', 'jardin', 'papeleria', 'accesorios', 'cocina', 'textil', 'iluminacion', 'almacenaje', 'joyeria', 'arte', 'kits'];
  const availableTypes = ['ropa', 'accesorios', 'decoracion', 'bordados', 'pinturas', 'colgantes', 'parches', 'bufandas', 'gorros', 'barbijos', 'bolsos', 'juguetes', 'arte', 'cocina', 'textil', 'iluminacion', 'almacenaje', 'joyeria', 'kits'];

  function addTagToProduct(tag) {
    tag = tag.trim().toLowerCase();
    if (tag && !formProduct.tags.includes(tag)) {
      formProduct.tags = [...formProduct.tags, tag];
    }
  }

  function removeTagFromProduct(tagToRemove) {
    formProduct.tags = formProduct.tags.filter(tag => tag !== tagToRemove);
  }

  function handleNewTagInput(event) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const newTagName = newTag.trim().toLowerCase();
      if (newTagName) {
        addTagToProduct(newTagName);
        if (!allTags.includes(newTagName)) {
          allTags = [...allTags, newTagName].sort();
        }
        newTag = '';
      }
    }
  }
  
  function toggleTagSelection(tag) {
    if (formProduct.tags.includes(tag)) {
      removeTagFromProduct(tag);
    } else {
      addTagToProduct(tag);
    }
  }

</script>

<div class="max-w-4xl mx-auto bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-6 md:p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700">
  {#if !$isAdmin}
    <div class="max-w-md mx-auto">
      <h1 class="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-8 text-center">Acceso Administradora</h1>
      <form on:submit|preventDefault={handleLogin} class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Usuario</label>
          <input type="text" id="username" bind:value={username} required class="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white transition" placeholder="Tu usuario (rosa)">
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contraseña</label>
          <input type="password" id="password" bind:value={password} required class="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white transition" placeholder="Tu contraseña (tejerosa123)">
        </div>
        {#if loginError}
          <p class="text-sm text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/50 p-3 rounded-md">{loginError}</p>
        {/if}
        <button type="submit" class="w-full bg-sky-500 hover:bg-sky-600 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg">
          Ingresar
        </button>
      </form>
    </div>
  {:else}
    <div class="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-300 dark:border-slate-700">
      <h1 class="text-3xl font-bold text-sky-700 dark:text-sky-400 mb-4 sm:mb-0">Panel de Administración</h1>
      <button on:click={handleLogout} class="bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors">
        Cerrar Sesión
      </button>
    </div>

    <div class="mb-6 text-right">
        <button 
            on:click={openNewProductForm} 
            class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={showAddForm && !isEditing}
        >
            Añadir Nuevo Producto
        </button>
    </div>

    {#if showAddForm}
      <div class="bg-sky-50/70 dark:bg-slate-800/50 backdrop-blur-md p-6 rounded-lg shadow-xl mb-8 border border-sky-200 dark:border-slate-700">
        <h2 class="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-6 pb-3 border-b border-sky-200 dark:border-slate-600">{isEditing ? 'Editar Producto' : 'Añadir Nuevo Producto'}</h2>
        <form on:submit|preventDefault={handleSubmitProduct} class="space-y-5">
          <div>
            <label for="prodName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre del Producto</label>
            <input type="text" id="prodName" bind:value={formProduct.name} required class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white sm:text-sm transition">
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label for="prodPrice" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Precio (ARS$)</label>
              <input type="number" step="0.01" min="0" id="prodPrice" bind:value={formProduct.price} required class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white sm:text-sm transition">
            </div>
            <div>
              <label for="prodStock" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Stock</label>
              <input type="number" min="0" id="prodStock" bind:value={formProduct.stock} required class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white sm:text-sm transition">
            </div>
          </div>
          
          <div>
            <label for="prodImageFile" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Imagen del Producto</label>
            <input type="file" id="prodImageFile" on:change={handleFileSelect} accept="image/*" class="mt-1 block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200 dark:file:bg-slate-700 dark:file:text-sky-300 dark:hover:file:bg-slate-600 transition"/>
            {#if imagePreviewUrl}
              <img src={imagePreviewUrl} alt="Previsualización" class="mt-3 max-h-40 rounded-lg shadow-md"/>
            {:else if formProduct.imageUrl && !formProduct.imageUrl.startsWith('data:') && !formProduct.imageUrl.startsWith('blob:') && !formProduct.imageUrl.includes('placeholder') && !formProduct.imageUrl.startsWith('images/')}
               <img src={formProduct.imageUrl} alt="Imagen actual" class="mt-3 max-h-40 rounded-lg shadow-md"/>
            {/if}
             <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Alternativamente, pega una URL de imagen abajo (si no subes un archivo):</p>
            <input type="text" id="prodImageUrl" bind:value={formProduct.imageUrl} class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white sm:text-sm transition" placeholder="https://ejemplo.com/imagen.jpg">
          </div>

          <div>
            <label for="prodDescription" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
            <textarea id="prodDescription" rows="3" bind:value={formProduct.description} class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white sm:text-sm transition"></textarea>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <label for="prodCategory" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Categoría (Temporada)</label>
                <select id="prodCategory" bind:value={formProduct.category} class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition">
                    {#each availableCategories as cat}
                    <option value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    {/each}
                </select>
            </div>
            <div>
                <label for="prodType" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo de Producto</label>
                <select id="prodType" bind:value={formProduct.type} class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition">
                    {#each availableTypes as typeOpt}
                    <option value={typeOpt}>{typeOpt.charAt(0).toUpperCase() + typeOpt.slice(1)}</option>
                    {/each}
                </select>
            </div>
          </div>
          <div>
            <label for="prodTags" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Etiquetas</label>
            <div class="mt-1 flex flex-wrap gap-2 items-center p-2 border border-gray-300 dark:border-slate-600 rounded-md min-h-[42px]">
              {#each formProduct.tags as tag (tag)}
                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-200">
                  {tag}
                  <button type="button" on:click={() => removeTagFromProduct(tag)} class="ml-1.5 flex-shrink-0 text-sky-500 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-100 focus:outline-none">
                    <svg class="h-3 w-3" stroke="currentColor" fill="none" viewBox="0 0 8 8"><path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" /></svg>
                  </button>
                </span>
              {/each}
              <input 
                type="text" 
                bind:value={newTag} 
                on:keydown={handleNewTagInput}
                class="flex-grow px-1 py-0.5 border-none focus:ring-0 dark:bg-transparent dark:text-white sm:text-sm placeholder-gray-400 dark:placeholder-gray-500" 
                placeholder="Añadir etiqueta y Enter...">
            </div>
            
            <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">Selecciona etiquetas existentes o escribe nuevas y presiona Enter.</p>
            <div class="mt-2 flex flex-wrap gap-2">
              {#each allTags as globalTag (globalTag)}
                {#if !formProduct.tags.includes(globalTag)}
                  <button 
                    type="button" 
                    on:click={() => toggleTagSelection(globalTag)}
                    class="px-2.5 py-1 rounded-full text-xs font-medium border
                           bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-300
                           dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-gray-300 dark:border-slate-500
                           transition-colors duration-150">
                    {globalTag}
                  </button>
                {/if}
              {/each}
            </div>
          </div>
           <div>
            <label for="prodDimensions" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Dimensiones</label>
            <input type="text" id="prodDimensions" bind:value={formProduct.dimensions} class="mt-1 block w-full px-3 py-2.5 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white sm:text-sm transition" placeholder="Talla única / 20cm x 15cm">
          </div>
          <div class="flex justify-end space-x-3 pt-3">
            <button type="button" on:click={resetAndHideForm} class="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition">
              Cancelar
            </button>
            <button type="submit" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-teal-500 transition">
              {isEditing ? 'Actualizar Producto' : 'Guardar Producto'}
            </button>
          </div>
        </form>
      </div>
    {/if}

    <div class="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700">
        <h2 class="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-6">Gestionar Productos Existentes</h2>
        {#if localProducts.length > 0}
            <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-700">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
                    <thead class="bg-gray-100/70 dark:bg-slate-700/70 backdrop-blur-sm">
                        <tr>
                        <th scope="col" class="px-6 py-3.5 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Nombre</th>
                        <th scope="col" class="px-6 py-3.5 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Precio (ARS$)</th>
                        <th scope="col" class="px-6 py-3.5 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Stock</th>
                        <th scope="col" class="px-6 py-3.5 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white/50 dark:bg-slate-800/50 divide-y divide-gray-200 dark:divide-slate-700 backdrop-blur-sm">
                        {#each localProducts as product (product.id)}
                        <tr class="hover:bg-sky-50/50 dark:hover:bg-slate-700/50 transition-colors">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">ARS$ {product.price.toFixed(2)}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{product.stock}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <button on:click={() => openEditForm(product)} class="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 transition-colors">Editar</button>
                            <button on:click={() => deleteProduct(product.id)} class="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors">Eliminar</button>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {:else}
            <p class="text-center text-gray-500 dark:text-gray-400 py-4">No hay productos para mostrar. ¡Añade algunos!</p>
        {/if}
    </div>
  {/if}
</div>

<style>
  /* Estilos adicionales si son necesarios, Tailwind es preferido */
</style> 
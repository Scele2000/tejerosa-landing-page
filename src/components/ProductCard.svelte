<script>
  export let product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
    category: ''
  };
</script>

<article class="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-md bg-white">
  <div class="aspect-square w-full overflow-hidden">
    <img 
      src={product.image} 
      alt={product.name}
      class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
    />
  </div>
  
  <div class="p-5 space-y-2">
    <div class="flex justify-between items-start">
      <h3 class="text-lg font-medium text-gray-800">{product.name}</h3>
      <span class="font-medium text-[#E27990]">{product.price.toFixed(2)}€</span>
    </div>
    
    <p class="text-sm text-gray-600 line-clamp-2">{product.description}</p>
    
    <div class="flex justify-between items-center pt-2">
      <span class="inline-block px-3 py-1 text-xs rounded-full bg-[#F2B5C8] text-[#C95775]">{product.category}</span>
      <button class="text-[#E27990] hover:text-[#C95775] transition-colors font-medium text-sm">
        Ver detalles
      </button>
    </div>
  </div>
</article>
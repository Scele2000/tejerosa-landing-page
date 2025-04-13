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

<article class="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
  <div class="aspect-square w-full overflow-hidden">
    <img 
      src={product.image} 
      alt={product.name}
      class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
    />
  </div>
  
  <div class="absolute inset-0 flex flex-col justify-end">
    <div class="glass p-5 space-y-2 backdrop-blur-md bg-white/70 border-t border-white/80">
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
  </div>
</article>

<style>
  .glass {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .group:hover .glass {
    background: rgba(255, 255, 255, 0.8);
  }
</style>
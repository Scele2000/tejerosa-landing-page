<script>
  export let color = "#333";
  export let size = 40;
</script>

<div 
  class="loader"
  style="--color: {color}; --size: {size}px"
  aria-label="Cargando..."
>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>

<style>
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    position: relative;
  }
  
  .circle {
    width: 25%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--color);
    margin: 0 2px;
    animation: bounce 1.5s infinite ease-in-out;
  }
  
  .circle:nth-child(1) {
    animation-delay: 0s;
  }
  
  .circle:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  .circle:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>